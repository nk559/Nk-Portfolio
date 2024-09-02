import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs.send(
      'service_v4a4n1d', // Replace with your EmailJS Service ID
      'template_j00xoim', // Replace with your EmailJS Template ID
      formData, // The form data that includes name, email, subject, and message
      'z18Vs0M6fx5ixQIW9' // Replace with your EmailJS User ID
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, (error) => {
      alert('Failed to send message, please try again.');
    });
  };

  return (
    <div className='contact-me'>
      <h1 className='contact-heading'>Let's Connect: Drop me a line and let the conversation begin!</h1>
      <form onSubmit={handleSubmit}>
        <p className='contact-subhead'>Name</p>
        <input 
          type='text' 
          name='name'
          placeholder='Enter your name' 
          value={formData.name}
          onChange={handleChange}
          required
        />
        <p className='contact-subhead'>E-mail</p>
        <input 
          type='email' 
          name='email'
          placeholder='Enter your mail address' 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <p className='contact-subhead'>Subject</p>
        <input 
          type='text' 
          name='subject'
          placeholder='Enter a subject' 
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <p className='contact-subhead'>Message</p>
        <textarea 
          id="message" 
          name="message" 
          rows="6" 
          cols="50" 
          placeholder="Enter your message here..." 
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea><br />
        <button className='submit' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
