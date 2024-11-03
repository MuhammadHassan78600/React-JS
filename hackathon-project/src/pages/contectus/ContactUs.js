// ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from '../../components/navbar/Navbar';
// import emailjs from 'emailjs-com';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending the email using EmailJS
    emailjs.send('service_pg4zqqy', 'template_qng103t', formData, 'Bp0t•••••••••••••••••')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Reset form after successful submission
        setFormData({ name: '', email: '', message: '' });
      }, (err) => {
        console.error('Failed to send email. Error:', err);
      });
  };

  return (
    <div>
     
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Please fill out the form below.</p>
        <form onSubmit={handleSubmit} className="contact-form">
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
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
