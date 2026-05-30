import React from "react";
import "./EthicsStatement.css";

const EthicsStatement = () => {
  return (
    <section id="ethics" className="ethics-section">
      <div className="ethics-container">
        <div className="ethics-header">
          <p className="ethics-tagline">ACADEMIC INTEGRITY</p>
          <h2 className="ethics-title">Publication & Ethics Statement</h2>
          <div className="ethics-divider"></div>
        </div>

        <div className="ethics-content-card">
          <div className="ethics-block">
            <h3 className="ethics-subtitle">Conference Publication Ethics</h3>
            <p className="ethics-paragraph">
              Publication ethics for conferences are crucial for maintaining academic research integrity. Key principles include originality, plagiarism, authorship, conflicts of interest, fair peer review, avoiding publication bias, and avoiding redundant or duplicate publication. Authors must ensure their work is original, properly cite others' work, and disclose any conflicts of interest. Conference organizers should establish clear guidelines, ensure fair peer review, and prevent misconduct. Consequences of misconduct include retraction, notification, and sanctions, such as bans from submitting to future conferences or publications. Both parties must work together to ensure the integrity and credibility of academic research.
            </p>
          </div>

          <div className="ethics-block">
            <h3 className="ethics-subtitle">Host & Proceedings Structure</h3>
            <p className="ethics-paragraph">
              The Department of Computer Science and Engineering will host the Third International Conference on Algorithms in Advanced Artificial Intelligence (ICAAAI-2025) from December 11–13, 2025. Every participant that submits a paper about their work is published in ICAAAI-2025. The conference proceedings cover a wide range of publication styles; some are considered book publications, while others are considered scholarly contributions by individuals or groups. These proceedings may appear as standalone books, book series, or collections of summaries or abstracts made available on platforms like Google and Amazon.
            </p>
            <p className="ethics-paragraph">
              For the ICAAAI-2025 conference, participants met virtually to conduct comprehensive sessions. Often consisting of abstracts, reports, or full-text papers submitted and presented in a variety of formats, including volumes or individual publications, the conference proceedings operate as a record of the event.
            </p>
          </div>

          <div className="ethics-grid">
            {/* Left Column: Intended Purpose */}
            <div className="ethics-list-box">
              <h4 className="ethics-list-title">Conference Proceedings Intentions</h4>
              <ul className="ethics-bullet-list">
                <li>
                  Allow researchers to engage with current research before it is formally published or widely disseminated, typically covering findings, experiments, theories, best practices, or new methodologies.
                </li>
                <li>
                  Provide a less formal setting for researchers to present their work, often reflected in the structure and style of the proceedings.
                </li>
                <li>
                  Enable the introduction of new concepts and methodologies in fields that are still developing.
                </li>
                <li>
                  Help emerging researchers establish connections with established researchers, teams, or institutions focusing on topics in algorithms and advanced artificial intelligence.
                </li>
              </ul>
            </div>

            {/* Right Column: Key Differences */}
            <div className="ethics-list-box">
              <h4 className="ethics-list-title">Key Differences: Proceedings vs. Books</h4>
              <ul className="ethics-bullet-list">
                <li>
                  The ICAAAI-2025 conference proceedings differ from traditional books in format and purpose, including how information is shared among participants and the nature of content, such as abstracts related to advanced artificial intelligence.
                </li>
                <li>
                  The ICAAAI-2025 conference proceedings are compiled according to scholarly academic principles, organized by the planning group and overseen by a program committee or authorized editors.
                </li>
                <li>
                  The publication includes thoroughly reviewed proceedings that have undergone screening and double-blind peer review, with a strict plagiarism limit of <strong>10%</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicsStatement;
