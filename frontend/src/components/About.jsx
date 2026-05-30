import React, { useState } from "react";
import "./About.css";

const About = ({ activeTab: propActiveTab, setActiveTab: propSetActiveTab }) => {
  const [localActiveTab, setLocalActiveTab] = useState("college");

  const activeTab = propActiveTab || localActiveTab;
  const setActiveTab = propSetActiveTab || setLocalActiveTab;

  const tabContents = {
    college: {
      title: "SRKR Engineering College",
      subtitle: "44 Years of Academic Excellence",
      paragraphs: [
        "Sagi Rama Krishnam Raju Engineering College (SRKREC), established in 1980, is one of Andhra Pradesh's first self-financing engineering institutions, dedicated to empowering rural students through technical education. With its 30-acre green campus, the college offers state-of-the-art facilities that foster an inclusive and culturally responsive learning environment.",
        "Over the years, SRKR has built a strong ethos of creativity, confidence, and logical thinking in its students, preparing them for nation-building and diverse careers. The college's vision, inspired by its founder Sri Sagi Rama Krishnam Raju, continues under the leadership of Sri S. Prasad Raju, ensuring academic excellence.",
        "Accredited with an 'A+' Grade by NAAC and multiple NBA accredited B.Tech. programs, the institution is recognized by AICTE and UGC for its outstanding contributions to education and research. SRKR's initiatives include the AICTE IDEA Lab emphasizing entrepreneurship, innovation, and skill development, alongside 14 Centres of Excellence driving research culture to address societal challenges."
      ]
    },
    cse: {
      title: "Department of CSE",
      subtitle: "Pioneering Computing Education since 1991",
      paragraphs: [
        "The Department of Computer Science & Engineering (CSE) at Sagi Rama Krishnam Raju Engineering College, established in 1991, has grown into a leading hub for teaching, research, and industry collaboration.",
        "The department offers undergraduate B.Tech programmes in CSE, Artificial Intelligence & Machine Learning, Computer Science & Design, and CSE (IoT & Cyber Security including Blockchain Technology), along with M.Tech in Computer Science & Technology and a Ph.D. programme. It also pioneers a Minor Degree in Quantum Technologies, aligned with India's National Quantum Mission.",
        "With a team of highly qualified faculty, the department is recognized as a Research Centre under JNTU Kakinada. Graduates are consistently placed in top multinational companies and product-based firms across domains such as software development, data science, cybersecurity, AI/ML, and cloud computing."
      ]
    },
    conference: {
      title: "ICAAAI Conference",
      subtitle: "3rd International Conference on Algorithms in Advanced AI",
      paragraphs: [
        "The 3rd International Conference on Algorithms in Advanced Artificial Intelligence (ICAAAI-2025) provides a global platform for researchers, academicians, and industry professionals to exchange knowledge and showcase innovations in Artificial Intelligence, Machine Learning, Data Science, and emerging computing technologies.",
        "Building on the success of its previous editions, the conference emphasizes both theoretical advances and real-world applications across interdisciplinary domains, fostering collaboration between international experts and young researchers."
      ]
    }
  };

  const currentTab = tabContents[activeTab];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <p className="about-tagline">CONFERENCE CONTEXT</p>
          <h2 className="about-title">About the Host & Event</h2>
          <div className="about-divider"></div>
        </div>

        <div className="about-tab-navigation">
          <button
            className={`about-tab-btn ${activeTab === "college" ? "active" : ""}`}
            onClick={() => setActiveTab("college")}
          >
            About College
          </button>
          <button
            className={`about-tab-btn ${activeTab === "cse" ? "active" : ""}`}
            onClick={() => setActiveTab("cse")}
          >
            About Department CSE
          </button>
          <button
            className={`about-tab-btn ${activeTab === "conference" ? "active" : ""}`}
            onClick={() => setActiveTab("conference")}
          >
            About Conference
          </button>
        </div>

        <div className="about-content-card">
          <div className="about-card-glow"></div>
          <div className="about-card-body">
            <h3 className="about-content-title">{currentTab.title}</h3>
            <h4 className="about-content-subtitle">{currentTab.subtitle}</h4>
            <div className="about-text-content">
              {currentTab.paragraphs.map((p, idx) => (
                <p key={idx} className="about-paragraph">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
