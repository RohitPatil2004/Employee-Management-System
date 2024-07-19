import React from 'react';
import './Styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-website">
          <span className="footer-website-name">Easy Emp</span>
          <p className="footer-contact">Contact Us On:</p>
          <p>Email: rohitvpatil04@gmail.com</p>
          <p>Phone: +91 9321471804</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-address">
          <p>Our Address:</p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
            123 Street Name, City, Country
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
