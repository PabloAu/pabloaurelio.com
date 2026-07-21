"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const CONTACT_EMAIL = "pablo.gomez@icfo.eu";

const topics = [
  "Research",
  "Software",
  "Apps",
  "Slowball",
  "Writing",
  "Consulting",
  "General"
] as const;

export function ContactForm() {
  const [backupLink, setBackupLink] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const topic = String(formData.get("topic") ?? "General").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = `pabloaurelio.com | ${topic} | ${name || "New inquiry"}`;
    const body = [
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Topic: ${topic || "General"}`,
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

      <div className="form-field">
        <label htmlFor="topic">Topic</label>
        <select id="topic" name="topic" defaultValue="General">
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={7}
          placeholder="Tell Pablo what you are building, exploring, or looking for."
          required
        />
      </div>

      <div className="form-actions">
        <button className="button button-primary" type="submit">
          Open email draft
        </button>
        <p className="form-note">
          For this first version, the form opens a prefilled email draft so it
          works on the static site immediately.
        </p>
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
