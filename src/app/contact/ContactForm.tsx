"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitEnquiry, type ContactState } from "./actions";

const initial: ContactState = { status: "idle", message: "" };

const labelClass = "t-eyebrow text-[var(--ink-soft)]";

const fieldClass =
  "t-body-sm mt-3 w-full border border-[var(--rule-strong)] bg-transparent px-4 py-3 outline-none transition-colors focus:border-[var(--accent)]";

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initial);

  if (state.status === "sent") {
    return (
      <p className="t-lede border-t border-[var(--accent)] pt-6">
        {state.message}
      </p>
    );
  }

  // React resets the form on every submit, so restore what was typed when the
  // action comes back with an error — otherwise a long enquiry is lost.
  const v = state.values;

  return (
    <form action={action} className="relative space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={120}
            defaultValue={v?.name}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={160}
            defaultValue={v?.email}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="organization" className={labelClass}>
          Organization
        </label>
        <input
          id="organization"
          name="organization"
          maxLength={160}
          defaultValue={v?.organization}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          The program
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          required
          maxLength={5000}
          defaultValue={v?.message}
          className={fieldClass}
        />
      </div>

      {/* Honeypot — hidden from people, tempting to bots */}
      <div
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <label htmlFor="consent" className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent)]"
        />
        <span className="t-caption text-[var(--ink-soft)]">
          I consent to Fernandez Consulting storing these details in order to
          respond to my enquiry. See the{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-2 hover:text-[var(--ink)]"
          >
            privacy notice
          </Link>
          .
        </span>
      </label>

      {state.status === "error" && (
        <p role="alert" className="t-body-sm text-red-700 dark:text-red-400">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="t-action inline-flex w-full items-center justify-center bg-[var(--ink)] px-6 py-3.5 text-[var(--ground)] transition hover:opacity-85 disabled:opacity-50 sm:w-auto"
      >
        {pending ? "Sending…" : "Discuss Your SaMD Program"}
      </button>
    </form>
  );
}
