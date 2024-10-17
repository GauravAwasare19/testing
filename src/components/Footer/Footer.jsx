import React from 'react';
import { Link } from 'react-router-dom'; 
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fRow">
        <div className="fColumn">
          <h3>Company Info</h3>
          <p>Global-GI Pune is dedicated to providing reliable courier services across the globe.</p>
        </div>
        <div className="fColumn">
          <h3>Quick Links</h3>
          <ul className="fList">
            <li className="fListItem">
              <Link to="/">Home</Link>
            </li>
            <li className="fListItem">
              <Link to="/gallery">Media Gallery</Link>
            </li>
            <li className="fListItem">
              <Link to="/about">About Us</Link>
            </li>
            <li className="fListItem">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="fColumn">
          <h3>Address</h3>
          <p>123 Courier Lane, Pune, MH, 411027</p>
        </div>
        <div className="fColumn">
          <h3>Contact Info</h3>
          <p>Phone: +1234567890</p>
          <p>Email: info@globalgi.com</p>
        </div>
      </div>
      <div className="fText">© 2024 Global-GI Pune. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
