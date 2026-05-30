import React from "react";
import "./CallForPapers.css";

const CallForPapers = () => {
  const topics = [
    "Explainable AI, Responsible AI, Generative AI, Conversational AI, Quantum AI",
    "Machine Learning and Deep Learning",
    "AI in Data Science and Big Data Analytics",
    "Computer Vision and Image Processing",
    "Software Quality, Reliability, and Optimization",
    "IoT, Edge Computing, Cyber-Physical Systems, Digital Twin Applications",
    "Security and Privacy in AI, Blockchain Technologies",
    "Cloud Computing, Distributed and Federated Learning",
    "Natural Language Processing and Privacy-Preserving ML",
    "Other emerging AI applications"
  ];

  return (
    <div className="cfp-page">
      <div className="cfp-container">
        {/* Header */}
        <div className="cfp-header">
          <p className="cfp-tagline">RESEARCH CONTRIBUTIONS</p>
          <h2 className="cfp-title">Call For Papers</h2>
          <div className="cfp-divider"></div>
        </div>

        {/* Two Column Layout: Topics and Guidelines */}
        <div className="cfp-grid">
          {/* Left Column: Topics */}
          <div className="cfp-card topics-card">
            <h3 className="cfp-card-title">Topics of Interest</h3>
            <p className="cfp-card-desc">
              Authors are invited to submit high-quality, original, and unpublished research contributions in, but not limited to, the following areas:
            </p>
            <ul className="cfp-topics-list">
              {topics.map((topic, idx) => (
                <li key={idx} className="cfp-topic-item">
                  <span className="cfp-bullet">&#10003;</span> {topic}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Guidelines */}
          <div className="cfp-card guidelines-card">
            <h3 className="cfp-card-title">Author Guidelines</h3>
            <div className="guideline-block">
              <p>
                Manuscripts must be prepared using the official <strong>Conference Paper Template</strong>. Papers should not exceed <strong>6 pages</strong>; up to 2 additional pages may be included with a fee of INR 1000 / USD 15 per page.
              </p>
              <ul>
                <li><strong>Similarity Limit:</strong> Below 12% (double-blind peer review).</li>
                <li><strong>No AI Writing:</strong> Manuscripts with machine-generated content will not be considered.</li>
                <li><strong>Originality:</strong> Submissions must be original and not under review elsewhere.</li>
                <li><strong>Copyright:</strong> A signed Copyright Form is mandatory for publication.</li>
              </ul>
            </div>

            <h3 className="cfp-card-title resource-title">Downloads & Resources</h3>
            <div className="cfp-download-links">
              <a
                href="https://docs.google.com/document/d/1z3o22pnrzgvoRIyPxyocmQasiRrWklA5/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="cfp-download-btn"
              >
                Author Guidelines & Instructions
              </a>
              <a
                href="https://docs.google.com/document/d/1di1ge7TO8waqLIsUhiPrwhx9QksJKw95/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="cfp-download-btn"
              >
                Conference Paper Template (DOCX)
              </a>
              <a
                href="https://docs.google.com/document/d/1jst-CxR7wBRlUutrnNQuS5JQD3p9rzol/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="cfp-download-btn"
              >
                Publish & Copyright Form
              </a>
            </div>

            <div className="cfp-submit-box">
              <h4>Ready to Submit?</h4>
              <p>Submit your manuscript electronically in PDF format via the Google Form submission link:</p>
              <a
                href="https://forms.gle/CiwCWbrFxZMRnikc6"
                target="_blank"
                rel="noopener noreferrer"
                className="cfp-submit-btn"
              >
                Submit Paper Online
              </a>
            </div>
          </div>
        </div>

        {/* Publication details card */}
        <div className="cfp-card publication-card">
          <h3 className="cfp-card-title">Conference Proceedings & Publications</h3>
          <p className="publication-text">
            All accepted and presented papers will be compiled in the **ICAAAI-2025 Proceedings** to be published by **Taylor & Francis (CRC Press)** and submitted to **Scopus** for indexing.
          </p>
          <div className="previous-editions">
            <h4 className="prev-title">Previous Conference Volumes:</h4>
            <ul className="prev-list">
              <li>
                <strong>ICAAAI 2024:</strong> Published by Taylor & Francis.{" "}
                <a href="https://www.taylorfrancis.com/books/edit/10.1201/9781003641537/algorithms-advanced-artificial-intelligence-jagan-mohan-rama-krishnam-raju-chandra-sekhar-prasad" target="_blank" rel="noopener noreferrer">
                  View Book Proceedings
                </a>
              </li>
              <li>
                <strong>ICAAAI 2023:</strong> Published by Taylor & Francis (CRC Press).{" "}
                <a href="https://www.taylorfrancis.com/books/edit/10.1201/9781003529231/algorithms-advanced-artificial-intelligence-jagan-mohan-vasamsetty-chandra-sekhar-gupta" target="_blank" rel="noopener noreferrer">
                  View Book Proceedings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
