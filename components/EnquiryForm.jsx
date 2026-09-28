"use client";
import React, { useState } from 'react';
import '@/components/EnquiryForm.css';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: In a real app you would send this data to an API.
    console.log('Enquiry submitted:', formData);
    setSubmitted(true);
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="enquiry-section">
      <h2 className="enquiry-title">Get in Touch</h2>
      <div className="enquiry-container">
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="enquiry-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="enquiry-input"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="enquiry-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="enquiry-textarea"
          />
          <button type="submit" className="enquiry-submit" disabled={submitted}>
            {submitted ? 'Sent!' : 'Send Enquiry'}
          </button>
        </form>
        <div className="contact-details">
          <h3>Our Offices</h3>
          <p><strong>India:</strong> New Delhi, India</p>
          <p><strong>Dubai:</strong> Dubai, United Arab Emirates</p>
          <p><strong>Phone:</strong> +91 00000 00000 | +971 000 000 000</p>
          <p><strong>Email:</strong> info@inchbrick.com</p>
        </div>
      </div>
    </section>
  );
}
