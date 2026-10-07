"use client";

import React, { useState } from "react";
import "@/components/EnquiryForm.css";

export default function EnquiryForm({ embedded = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      className={`enquiry-section${embedded ? " enquiry-section--embedded" : ""}`}
      aria-labelledby="enquiry-title"
    >
      <div className="enquiry-panel">
        <header className="enquiry-head">
          <span className="enquiry-mark" aria-hidden="true" />
          <p className="enquiry-eyebrow">Get in touch</p>
          <h2 id="enquiry-title" className="enquiry-title">
            Your Global Real Estate <em>Partner</em>
          </h2>
          <p className="enquiry-lead">
            From India to Dubai — and beyond — we connect NRIs to trusted property opportunities
            with local expertise and global standards.
          </p>
        </header>

        <ul className="enquiry-chips" aria-label="Why Inchbrick">
          <li>
            <i className="fas fa-globe" aria-hidden="true" /> Global Presence
          </li>
          <li>
            <i className="fas fa-shield-halved" aria-hidden="true" /> Trusted Partner
          </li>
          <li>
            <i className="fas fa-users" aria-hidden="true" /> Expert Support
          </li>
        </ul>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <label className="enquiry-field">
            <span className="enquiry-ico" aria-hidden="true">
              <i className="fas fa-user" />
            </span>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="enquiry-input"
            />
          </label>
          <label className="enquiry-field">
            <span className="enquiry-ico" aria-hidden="true">
              <i className="fas fa-envelope" />
            </span>
            <input
              type="email"
              name="email"
              placeholder="you@yourmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="enquiry-input"
            />
          </label>
          <label className="enquiry-field">
            <span className="enquiry-ico" aria-hidden="true">
              <i className="fas fa-phone" />
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              className="enquiry-input"
            />
          </label>
          <label className="enquiry-field enquiry-field--area">
            <span className="enquiry-ico" aria-hidden="true">
              <i className="fas fa-comment-dots" />
            </span>
            <textarea
              name="message"
              placeholder="Tell us what you're looking for..."
              value={formData.message}
              onChange={handleChange}
              required
              className="enquiry-textarea"
            />
          </label>
          <button type="submit" className="enquiry-submit" disabled={submitted}>
            {submitted ? "Sent — thank you!" : "Send Enquiry"}
            {!submitted && <i className="fas fa-arrow-right" aria-hidden="true" />}
          </button>
        </form>

        <div className="enquiry-foot">
          <a href="tel:+919876543210">
            <i className="fas fa-phone" aria-hidden="true" /> +91 98765 43210
          </a>
          <a href="mailto:info@inchbrick.com">
            <i className="fas fa-envelope" aria-hidden="true" /> info@inchbrick.com
          </a>
        </div>
      </div>
    </section>
  );
}
