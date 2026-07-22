"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const CONTACT_EMAIL = "pablo.gomez@icfo.eu";

export function ContactForm() {
  const [backupLink, setBackupLink] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = `pabloaurelio.com | ${name || "New inquiry"}`;
    const body = [
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      "",
      message || "Hello Pablo,"
    ].join("\n");

    const mailtoLink =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setBackupLink(mailtoLink);
    window.location.href = mailtoLink;
    event.currentTarget.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Where should Pablo reply?"
          required
        />
      </div>

      <div className="form-field form-field-wide">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Write to Pablo."
          required
        />
      </div>

      <div className="form-actions">
        <button className="button button-primary" type="submit">
          Open draft
        </button>
      </div>

      {backupLink ? (
        <p className="form-backup">
          If your mail app did not open, use the{" "}
          <a href={backupLink}>backup draft link</a>.
        </p>
      ) : null}
    </form>
  );
}
