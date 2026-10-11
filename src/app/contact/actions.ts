"use server";

import { Resend } from "resend";
import { site } from "@/content/site";

export type ContactValues = {
  name: string;
  email: string;
  organization: string;
  message: string;
};

export type ContactState = {
  status: "idle" | "error" | "sent";
  message: string;
  /** Echoed back so an error does not wipe what the visitor typed. */
  values?: ContactValues;
};

const MAX = { name: 120, email: 160, organization: 160, message: 5000 };

function clean(v: FormDataEntryValue | null, max: number) {
  return String(v ?? "")
    .trim()
    .slice(0, max);
}

/** Strip CR/LF so user input cannot inject additional email headers. */
function headerSafe(v: string) {
  return v.replace(/[\r\n]+/g, " ");
}

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function submitEnquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: a real person never fills a hidden field. Logged, because a
  // browser extension filling it would silently discard a genuine enquiry.
  if (clean(formData.get("website"), 100)) {
    console.warn("[contact] Honeypot triggered — submission discarded.");
    return { status: "sent", message: RECEIVED };
  }

  const name = clean(formData.get("name"), MAX.name);
  const email = clean(formData.get("email"), MAX.email);
  const organization = clean(formData.get("organization"), MAX.organization);
  const message = clean(formData.get("message"), MAX.message);
  const consent = formData.get("consent");

  const values: ContactValues = { name, email, organization, message };
  const fail = (msg: string): ContactState => ({
    status: "error",
    message: msg,
    values,
  });

  if (!name || !email || !message) {
    return fail("Please complete every required field.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return fail("Please enter a valid email address.");
  }

  if (!consent) {
    return fail("Please confirm you consent to us responding to your enquiry.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  // `||` not `??`: a declared-but-empty env var is a blank string, not null.
  const to = process.env.CONTACT_EMAIL || site.email;

  if (!apiKey) {
    console.error(
      "[contact] RESEND_API_KEY is not set — enquiry not delivered.",
    );
    return fail(
      `We could not send your message. Please email us directly at ${site.email}.`,
    );
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `${site.name} <website@${site.domain}>`,
      to,
      replyTo: headerSafe(email),
      subject: `Enquiry — ${headerSafe(name)}${organization ? ` · ${headerSafe(organization)}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization || "—"}`,
        "",
        message,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Organization:</strong> ${escapeHtml(organization) || "—"}</p>
        <hr />
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return fail(
        `We could not send your message. Please email us directly at ${site.email}.`,
      );
    }

    return { status: "sent", message: RECEIVED };
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return fail(
      `We could not send your message. Please email us directly at ${site.email}.`,
    );
  }
}

const RECEIVED =
  "Received. You will have a direct response from the Principal shortly.";
