import React from 'react';
import './Contact.css';


const Contact = () => {
  

  return (
    <div className="contact-page">
      <h2>Get in touch</h2>
      <h4>Thank you for visiting our website. We are committed to the highest standards of customer service. Feel free to connect with us for sharing your feedback, queries, suggestions, enquiries with the form given below.</h4>
      <div className="contact-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.1963739348844!2d73.76001967496641!3d18.65518188246472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e39e0b1e45%3A0x4f52a852531ec0fa!2sGanesh%20Talav!5e0!3m2!1sen!2sin!4v1729100483947!5m2!1sen!2sin" 
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        
        <div className="contact-details">
          <p className="office-title">Pradhikaran Office</p>
          <p>
            <strong>Address: </strong>My Home
            <br />
            Near Ganesh Talav, Nigdi Pradhikaran, Pune-411044, India
          </p>
          <p>
            <strong>Contact: </strong>+(91) 9999999999
          </p>
          <p>
            Email: <a href="mailto:veggisphere@gmail.com">veggisphere@gmail.com</a>
          </p>
        </div>
      </div>

      <section className="form-section">
        <form className="contact-form">
          <h3>Message Us</h3>
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" className="field" placeholder="Enter your name" name="name" required />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input type="email" className="field" placeholder="Enter your email" name="email" required />
          </div>
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" className="field" placeholder="Enter your contact number" name="mobilenumber" required />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea name="message" className="field mess" placeholder="Your message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
