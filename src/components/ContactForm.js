import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
  };

  const isFormValid =
    formData.name.trim().length > 0 &&
    isEmailValid(formData.email) &&
    formData.subject.trim().length > 0 &&
    formData.message.trim().length > 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isSending) return;

    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      alert('Email service is not configured yet. Please set EmailJS env variables and restart the dev server.');
      return;
    }

    const fullMessage = `From: ${formData.name} <${formData.email}>\n\n${formData.message}`;

    setIsSending(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'mateoarias437@gmail.com',
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: fullMessage,
        },
        { publicKey }
      );

      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Email send failed:', error);
      alert('Sorry, something went wrong while sending your message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p className="contact-intro">
          If you have any questions or job opportunities to discuss, you can contact me through this form. Please make sure to
          fill in the subject and email correctly. I will try to respond as soon as possible. Thank you for taking the time to
          check out my work. 🙂
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={!isFormValid || isSending}>
            {isSending ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
