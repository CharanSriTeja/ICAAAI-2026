import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    category: "national",
    paperId: "",
    paperTitle: "",
    utr: "",
    receipt: null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, receipt: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log("Registration submitted: ", formData);
    setSubmitted(true);
  };

  return (
    <div className="reg-page">
      <div className="reg-container">
        {/* Header */}
        <div className="reg-header">
          <p className="reg-tagline">CONFERENCE SIGNUP</p>
          <h2 className="reg-title">Registration</h2>
          <div className="reg-divider"></div>
        </div>

        {/* Pricing Tables and Bank Info */}
        <div className="reg-info-grid">
          {/* Fees Table */}
          <div className="reg-card table-card">
            <h3 className="reg-card-title">Registration & Publication Fees</h3>
            <table className="reg-fees-table">
              <thead>
                <tr>
                  <th>Registration Category</th>
                  <th>Fee Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>National Participants (Academia/R&D/Industry)</td>
                  <td><strong>Rs. 9000/-</strong></td>
                </tr>
                <tr>
                  <td>International Participants (Academia/R&D/Industry)</td>
                  <td><strong>$110 USD</strong></td>
                </tr>
                <tr>
                  <td>Additional Page Fee</td>
                  <td><strong>Rs. 1000/- per page</strong></td>
                </tr>
                <tr>
                  <td>Accompanying Person / Listener</td>
                  <td><strong>Rs. 1000/-</strong></td>
                </tr>
                <tr>
                  <td>Accommodation Charges (per day)</td>
                  <td><strong>Rs. 500/-</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bank Wire Details */}
          <div className="reg-card bank-card">
            <h3 className="reg-card-title">Bank Payment Details</h3>
            <p className="bank-info-note">
              Please transfer the registration fee to the following SBI bank account via Net Banking / IMPS / NEFT and keep the UTR/Reference number and receipt copy ready.
            </p>
            <div className="bank-details-box">
              <div className="bank-row">
                <span className="label">Account Name</span>
                <span className="value">ICAAAI-2024 SRKREC</span>
              </div>
              <div className="bank-row">
                <span className="label">Account Number</span>
                <span className="value highlighting">43489958911</span>
              </div>
              <div className="bank-row">
                <span className="label">Bank Name</span>
                <span className="value">SBI Chinamiram</span>
              </div>
              <div className="bank-row">
                <span className="label">IFSC Code</span>
                <span className="value highlighting">SBIN0020530</span>
              </div>
              <div className="bank-row">
                <span className="label">Branch Address</span>
                <span className="value">Chinamiram, West Godavari District, Andhra Pradesh - 534204</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Form */}
        <div className="reg-card form-card">
          <h3 className="reg-card-title form-title-align">Registration Submission Form</h3>

          {submitted ? (
            <div className="reg-success-message">
              <div className="success-icon">&#10004;</div>
              <h4 className="success-title">Registration Submitted!</h4>
              <p className="success-desc">
                Thank you for registering for ICAAAI-2025. A confirmation email has been sent to <strong>{formData.email}</strong>. Our review committee will verify your payment and UTR: <strong>{formData.utr}</strong> shortly.
              </p>
              <button
                className="reg-reset-btn"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    org: "",
                    category: "national",
                    paperId: "",
                    paperTitle: "",
                    utr: "",
                    receipt: null
                  });
                }}
              >
                Submit Another Registration
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Contact Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Enter contact number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="org">Institution / Organization *</label>
                  <input
                    type="text"
                    id="org"
                    name="org"
                    required
                    placeholder="Enter university or company"
                    value={formData.org}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Registration Category *</label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="national">National Participant (Rs. 9000)</option>
                    <option value="international">International Participant ($110 USD)</option>
                    <option value="listener">Accompanying Person / Listener (Rs. 1000)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="paperId">Paper ID (If applicable)</label>
                  <input
                    type="text"
                    id="paperId"
                    name="paperId"
                    placeholder="e.g. ICAAAI-2025-102"
                    value={formData.paperId}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group double-width">
                  <label htmlFor="paperTitle">Paper Title (If applicable)</label>
                  <input
                    type="text"
                    id="paperTitle"
                    name="paperTitle"
                    placeholder="Enter your submitted paper title"
                    value={formData.paperTitle}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="utr">Payment Reference (UTR/Transaction No) *</label>
                  <input
                    type="text"
                    id="utr"
                    name="utr"
                    required
                    placeholder="Enter transaction reference UTR"
                    value={formData.utr}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="receipt">Upload Receipt Copy (PDF/Image) *</label>
                  <input
                    type="file"
                    id="receipt"
                    required
                    accept="image/*,application/pdf"
                    onChange={handleFileChange}
                    className="file-input-field"
                  />
                </div>
              </div>

              <div className="form-submit-align">
                <button type="submit" className="reg-submit-button">
                  Complete Registration &rarr;
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
