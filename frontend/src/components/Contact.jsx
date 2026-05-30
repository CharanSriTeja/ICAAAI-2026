import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <p className="contact-tagline">GET IN TOUCH</p>
          <h2 className="contact-title">Contact & Venue</h2>
          <div className="contact-divider"></div>
        </div>

        {/* Two Column Layout: Cards and Maps */}
        <div className="contact-grid">
          {/* Left Column: Cards */}
          <div className="contact-cards-col">
            <div className="contact-info-card">
              <h3 className="contact-card-title">Convener Information</h3>
              <p className="convener-name">Dr. R.N.V. Jagan Mohan</p>
              <p className="convener-role">Convener, ICAAAI-2025</p>
              <p className="convener-dept">Department of Computer Science and Engineering</p>
              <p className="convener-inst">S.R.K.R Engineering College</p>
            </div>

            <div className="contact-info-card">
              <h3 className="contact-card-title">Quick Contacts</h3>
              <div className="contact-link-row">
                <span className="contact-icon">&#9993;</span>
                <div className="contact-link-details">
                  <span className="label">Conference Email</span>
                  <a href="mailto:icaaai@srkrec.edu.in" className="value">
                    icaaai@srkrec.edu.in
                  </a>
                </div>
              </div>

              <div className="contact-link-row">
                <span className="contact-icon">&#9743;</span>
                <div className="contact-link-details">
                  <span className="label">Mobile Number</span>
                  <a href="tel:+917981349543" className="value">
                    +91 7981349543
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info-card" id="venue">
              <h3 className="contact-card-title">Venue Location</h3>
              <p className="venue-address">
                Sagi Rama Krishnam Raju (SRKR) Engineering College (Autonomous),<br />
                SRKR Marg, China Amiram,<br />
                Bhimavaram, West Godavari District,<br />
                Andhra Pradesh, India - 534204.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="contact-map-col">
            <div className="map-card-wrapper">
              <iframe
                title="SRKR Engineering College Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.9482931471746!2d81.49386341486443!3d16.544158488588825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2fbf0000001%3A0x63b3bf8b63e14!2sSRKR%20Engineering%20College!5e0!3m2!1sen!2sin!4v1685458999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="google-maps-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
