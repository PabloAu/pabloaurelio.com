"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import type { ContactFormCopy } from "@/data/localized-content";

const CONTACT_EMAIL = "pablo.gomez@icfo.eu";

type ContactFormProps = {
  copy: ContactFormCopy;
};

export function ContactForm({ copy }: ContactFormProps) {
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
        <label htmlFor="name">{copy.nameLabel}</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder={copy.namePlaceholder}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">{copy.emailLabel}</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={copy.emailPlaceholder}
          required
        />
      </div>

      <div className="form-field form-field-wide">
        <label htmlFor="message">{copy.messageLabel}</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={copy.messagePlaceholder}
          required
        />
      </div>

      <div className="form-actions">
        <button className="button button-primary" type="submit">
          {copy.submitLabel}
        </button>
      </div>

      {backupLink ? (
        <p className="form-backup">
          {copy.backupPrefix}
          <a href={backupLink}>{copy.backupLinkLabel}</a>
          {copy.backupSuffix}
        </p>
      ) : null}
    </form>
  );
}
