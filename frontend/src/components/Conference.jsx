import React, { useState } from "react";
import "./Conference.css";

const SpeakerCard = ({ speaker, onClick }) => {
  const [imgError, setImgError] = useState(false);

  // Helper to get initials
  const getInitials = (name) => {
    return name
      .replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Prof\.|Professor)\s+/i, "")
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="speaker-card" onClick={() => onClick(speaker)}>
      <div className="speaker-image-wrapper">
        {imgError ? (
          <div className="speaker-avatar-fallback">
            <span>{getInitials(speaker.name)}</span>
          </div>
        ) : (
          <img
            src={speaker.image}
            alt={speaker.name}
            className="speaker-image"
            onError={() => setImgError(true)}
          />
        )}
        <div className="speaker-card-overlay">
          <span className="speaker-view-btn">View Details</span>
        </div>
      </div>
      <div className="speaker-info">
        <h4 className="speaker-name">{speaker.name}</h4>
        <p className="speaker-role">{speaker.title}</p>
        <p className="speaker-inst">{speaker.institution}</p>
      </div>
    </div>
  );
};

const SpeakerModal = ({ speaker, onClose }) => {
  const [imgError, setImgError] = useState(false);

  if (!speaker) return null;

  const getInitials = (name) => {
    return name
      .replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Prof\.|Professor)\s+/i, "")
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close details">
          &times;
        </button>

        <div className="modal-grid">
          <div className="modal-image-col">
            {imgError ? (
              <div className="modal-avatar-fallback">
                <span>{getInitials(speaker.name)}</span>
              </div>
            ) : (
              <img
                src={speaker.image}
                alt={speaker.name}
                className="modal-image"
                onError={() => setImgError(true)}
              />
            )}
          </div>

          <div className="modal-info-col">
            <span className="modal-tag">{speaker.typeLabel}</span>
            <h3 className="modal-name">{speaker.name}</h3>
            <h4 className="modal-role">{speaker.title}</h4>
            <h5 className="modal-inst">{speaker.institution}</h5>
            
            <div className="modal-divider"></div>
            
            <p className="modal-bio">
              {speaker.bio || `${speaker.name} will deliver a session as a ${speaker.typeLabel.toLowerCase()} at the 3rd International Conference on Algorithms in Advanced Artificial Intelligence (ICAAAI-2025). Join us to explore state-of-the-art developments in AI, machine learning, and advanced algorithms.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Conference = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const chiefGuests = [
    {
      name: "Dr. Hazlina Binti Hamdan",
      title: "Head of AI Research Group",
      institution: "Universiti Putra Malaysia",
      image: "/img/g1.jpg",
      typeLabel: "Chief Guest",
      bio: "Dr. Hazlina Binti Hamdan is the Head of the Artificial Intelligence Research Group in the Faculty of Computer Science and Information Technology at Universiti Putra Malaysia. Her research spans neural networks, deep learning, intelligent systems, and their interdisciplinary applications."
    },
    {
      name: "Professor M.V. Panduranga Rao",
      title: "Professor in Computer Science",
      institution: "Indian Institute of Technology Hyderabad",
      image: "/img/g3.jpg",
      typeLabel: "Chief Guest",
      bio: "Professor M.V. Panduranga Rao is a Professor at the Indian Institute of Technology (IIT) Hyderabad. His research focuses on quantum computing, randomized algorithms, cyber-physical systems, and formal methods in computing."
    },
    {
      name: "Dr. Sriparna Saha",
      title: "Associate Professor in CSE",
      institution: "Indian Institute of Technology Patna",
      image: "/img/g2.jpg",
      typeLabel: "Chief Guest",
      bio: "Dr. Sriparna Saha is an Associate Professor in the Department of Computer Science and Engineering at the Indian Institute of Technology (IIT) Patna. She is a recipient of many prestigious awards and has authored numerous research papers in NLP, text mining, machine learning, and bioinformatics."
    },
    {
      name: "Dr. A. S. N. Chakravarthy",
      title: "Professor in CSE",
      institution: "JNTU Kakinada, India",
      image: "/img/guest4.jpg",
      typeLabel: "Chief Guest",
      bio: "Dr. A. S. N. Chakravarthy is a Professor of Computer Science and Engineering at JNTU Kakinada. He has extensive research experience in cryptography, network security, computer forensics, and blockchain technology."
    }
  ];

  const keynoteSpeakers = [
    {
      name: "Mr. Ranjan Sinha",
      title: "Chief Technology Officer for watsonx in IBM Research AI",
      institution: "Vice President of IEEE Computer Society Bay Area Chapter",
      image: "/img/k3.jpg",
      typeLabel: "Keynote Speaker",
      bio: "Mr. Ranjan Sinha is the Chief Technology Officer (CTO) for IBM's watsonx platform in IBM Research AI. He is also the Vice President of the IEEE Computer Society Bay Area Chapter and is a widely respected leader in scalable AI solutions and large-scale language models."
    },
    {
      name: "Mr. Budaraju Raja Rao",
      title: "Information Technology Professional & Sr. Technical Staff",
      institution: "Oracle America Inc, CA, USA",
      image: "/img/k1.webp",
      typeLabel: "Keynote Speaker",
      bio: "Mr. Budaraju Raja Rao is a Senior Technical Staff Member at Oracle America Inc., based in California, USA. With decades of IT industry experience, his specialties cover distributed systems, enterprise architectures, cloud platforms, and large database technologies."
    },
    {
      name: "Dr. Judhi Prasetyo FHEA MSc",
      title: "Senior Lecturer & Founder of RoboTechX Lab",
      institution: "Middlesex University, Dubai",
      image: "/img/k2.jpg",
      typeLabel: "Keynote Speaker",
      bio: "Dr. Judhi Prasetyo is a Senior Lecturer in Computer Engineering and Informatics, and the Founder and Head of RoboTechX Lab at Middlesex University Dubai. He works actively in robotics, computer vision, human-robot interaction, and embedded intelligence systems."
    }
  ];

  return (
    <section id="conference" className="conf-section">
      <div className="conf-container">
        {/* Section Header */}
        <div className="conf-header">
          <p className="conf-tagline">EVENT SPEAKERS</p>
          <h2 className="conf-title">Chief Guests & Keynote Speakers</h2>
          <div className="conf-divider"></div>
        </div>

        {/* Chief Guests Subsection */}
        <div className="conf-subsection" id="chief-guests">
          <h3 className="conf-subsection-title">Our Distinguished Chief Guests</h3>
          <div className="speaker-grid">
            {chiefGuests.map((guest, idx) => (
              <SpeakerCard
                key={idx}
                speaker={guest}
                onClick={setSelectedSpeaker}
              />
            ))}
          </div>
        </div>

        {/* Keynote Speakers Subsection */}
        <div className="conf-subsection" id="keynote-speakers">
          <h3 className="conf-subsection-title">Our Keynote Speakers</h3>
          <div className="speaker-grid">
            {keynoteSpeakers.map((speaker, idx) => (
              <SpeakerCard
                key={idx}
                speaker={speaker}
                onClick={setSelectedSpeaker}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Speaker Details Modal */}
      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}
    </section>
  );
};

export default Conference;
