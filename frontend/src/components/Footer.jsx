import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const StudentCard = ({ name, role, img, linkedin, github, email }) => {
  const [imgError, setImgError] = useState(false);

  const getInitials = (n) => {
    return n.split(" ").map((x) => x[0]).join("").toUpperCase();
  };

  return (
    <div className="webteam-student-card">
      <div className="webteam-student-img-wrapper">
        {imgError ? (
          <div className="webteam-avatar-fallback">
            <span>{getInitials(name)}</span>
          </div>
        ) : (
          <img
            src={img}
            alt={name}
            className="webteam-student-img"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <h4 className="webteam-student-name">{name}</h4>
      <p className="webteam-student-role">{role}</p>
      <div className="webteam-student-socials">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn linkedin" aria-label="LinkedIn">
            in
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon-btn github" aria-label="GitHub">
            git
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="social-icon-btn email" aria-label="Email">
            @
          </a>
        )}
      </div>
    </div>
  );
};

const Footer = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [facultyImgError, setFacultyImgError] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="footer-section">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Branding Column */}
            <div className="footer-col branding-col">
              <button onClick={() => handleNav("/")} className="footer-logo-btn bg-transparent border-none cursor-pointer p-0 text-left">
                {logoError ? (
                  <span className="text-xl font-bold text-white">SRKR</span>
                ) : (
                  <img
                    src="/img/srkr.png"
                    alt="SRKR Engineering College Logo"
                    className="footer-logo-img"
                    onError={() => setLogoError(true)}
                  />
                )}
              </button>
              <h4 className="footer-branding-title">ICAAAI 2025</h4>
              <p className="footer-branding-desc">
                3rd International Conference on Algorithms in Advanced Artificial Intelligence. Hosted by Department of Computer Science & Engineering.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col links-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li>
                  <button onClick={() => handleNav("/")} className="footer-link-btn">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav("/committees")} className="footer-link-btn">
                    Committees
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav("/call-for-papers")} className="footer-link-btn">
                    Call For Papers
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav("/register")} className="footer-link-btn">
                    Registration
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav("/contact")} className="footer-link-btn">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Details Column */}
            <div className="footer-col contact-col">
              <h4 className="footer-col-title">Contact Address</h4>
              <p className="footer-contact-info">
                <strong>Dr. R.N.V. Jagan Mohan</strong>, Convener, ICAAAI-2025<br />
                Department of Computer Science and Engineering,<br />
                S.R.K.R Engineering College, Bhimavaram - 534204, AP, India.
              </p>
              <p className="footer-contact-links">
                <strong>Email:</strong> <a href="mailto:icaaai@srkrec.edu.in">icaaai@srkrec.edu.in</a><br />
                <strong>Mobile:</strong> <a href="tel:+917981349543">+91 7981349543</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container bottom-flex">
          <p className="footer-copyright">
            &copy; 2025 ICAAAI. Designed and developed by SRKR CSE{" "}
            <button className="footer-team-trigger" onClick={() => setModalOpen(true)}>
              WEB TEAM
            </button>
          </p>
        </div>
      </div>

      {/* WEB Team Modal Overlay */}
      {modalOpen && (
        <div className="webteam-modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="webteam-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="webteam-modal-close" onClick={() => setModalOpen(false)} aria-label="Close modal">
              &times;
            </button>

            <div className="webteam-modal-header">
              <h3 className="webteam-modal-title">Meet Our WEB Team</h3>
              <p className="webteam-modal-subtitle">The developers behind ICAAAI-2025 website</p>
            </div>

            <div className="webteam-modal-body">
              {/* Faculty Section */}
              <div className="webteam-section">
                <h4 className="webteam-section-title">Faculty Coordinator</h4>
                <div className="webteam-faculty-card">
                  <div className="webteam-faculty-img-col">
                    {facultyImgError ? (
                      <div className="faculty-avatar-fallback">PK</div>
                    ) : (
                      <img
                        src="/img/pavansir.jpg"
                        alt="Dr. K D V Pavan Kumar Varma"
                        className="faculty-pic"
                        onError={() => setFacultyImgError(true)}
                      />
                    )}
                  </div>
                  <div className="webteam-faculty-info-col">
                    <h5 className="faculty-name">Dr. K D V Pavan Kumar Varma</h5>
                    <p className="faculty-role">Assistant Professor</p>
                    <p className="faculty-dept">Dept of Computer Science & Engineering</p>
                    <p className="faculty-inst">SRKR Engineering College, Bhimavaram</p>
                    
                    <div className="faculty-contact-links">
                      <p><strong>Email:</strong> <a href="mailto:kdvpvarma@gmail.com">kdvpvarma@gmail.com</a></p>
                      <p><strong>Mobile:</strong> 9959622225</p>
                      {/* Web Profile Link */}
                      <p>
                        <a href="https://sites.google.com/view/kdvpkvarma/" target="_blank" rel="noopener noreferrer" className="faculty-profile-link">
                          View Academic Profile &rarr;
                        </a>
                      </p>
                    </div>

                    <div className="faculty-socials">
                      <a href="https://www.linkedin.com/in/pavan-varma-kothapalli-4577b949/" target="_blank" rel="noopener noreferrer" className="social-icon-btn linkedin">
                        in
                      </a>
                      <a href="https://github.com/pavanvarmakothapalli" target="_blank" rel="noopener noreferrer" className="social-icon-btn github">
                        git
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Students Section */}
              <div className="webteam-section">
                <h4 className="webteam-section-title">Student Developers</h4>
                <div className="webteam-students-grid">
                  <StudentCard
                    name="L Lithin Sai"
                    role="Front-End Developer"
                    img="/img/Lithin1.jpg"
                    linkedin="https://www.linkedin.com/in/lithin-sai-28a78a2b9/"
                    github="https://github.com/Lithin2004"
                    email="lithinsailankalapalli2004@gmail.com"
                  />
                  <StudentCard
                    name="K Venkat Sai"
                    role="Front-End Developer"
                    img="/img/venkat.jpg"
                    linkedin="https://in.linkedin.com/in/venkata-sai-kundeti-a4ba612b9"
                    github="https://github.com/Venkatkundeti"
                    email="venkatkundeti12@gmail.com"
                  />
                  <StudentCard
                    name="M Chaitanya"
                    role="Front-End Developer"
                    img="/img/chaithanya.jpg"
                    linkedin="https://www.linkedin.com/in/chaitu930"
                    github="https://github.com/Chaitanyamanepalli"
                    email="chaitanyamanepalli130@gmail.com"
                  />
                  <StudentCard
                    name="M L Gandhi"
                    role="Back-End Developer"
                    img="/img/gandhi.jpg"
                    linkedin="https://www.linkedin.com/in/lokesh-gandhi-modalavalasa-9a69a5292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    github="https://github.com/lokeshgandhi111"
                    email="lokeshgandhimodalavalasa111@gmail.com"
                  />
                  <StudentCard
                    name="C M Srikar"
                    role="Back-End Developer"
                    img="/img/srikar.jpg"
                    linkedin="http://linkedin.com/in/chandramouli-srikar-morapakala-2ba6832b9/"
                    github="http://github.com/CMSrikar"
                    email="srikarmorapakala20605@gmail.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
