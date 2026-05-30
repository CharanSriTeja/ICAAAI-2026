import React, { useState } from "react";
import "./Sponsors.css";

const SponsorLogo = ({ src, alt, link, fallbackText }) => {
  const [imgError, setImgError] = useState(false);

  const logoContent = imgError ? (
    <div className="sponsor-fallback">
      <span>{fallbackText}</span>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className="sponsor-logo-img"
      onError={() => setImgError(true)}
    />
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="sponsor-item">
        {logoContent}
      </a>
    );
  }

  return <div className="sponsor-item">{logoContent}</div>;
};

const Sponsors = () => {
  const sponsorsList = [
    {
      src: "/img/newSponser.jpg",
      alt: "Sponsor Logo",
      fallbackText: "Co-Sponsor"
    },
    {
      src: "/img/departmentSponsor.jpg",
      alt: "Department Sponsor",
      fallbackText: "Dept Sponsor"
    },
    {
      src: "/img/SriMaharshi.jpg",
      alt: "Sri Maharshi Consultancy",
      link: "https://srimaharshiconsultancy.com/",
      fallbackText: "Sri Maharshi"
    },
    {
      src: "/img/venue.png",
      alt: "SRKR Venue",
      fallbackText: "SRKR Campus"
    }
  ];

  return (
    <section id="sponsors" className="sponsors-section">
      <div className="sponsors-container">
        <div className="sponsors-header">
          <p className="sponsors-tagline">PARTNERS & SUPPORT</p>
          <h2 className="sponsors-title">Thanks to Our Sponsors</h2>
          <div className="sponsors-divider"></div>
        </div>

        {/* Core Sponsors */}
        <div className="sponsors-card-container">
          <h3 className="sponsors-subsection-title">Event Sponsors</h3>
          <div className="sponsors-grid">
            {sponsorsList.map((sponsor, idx) => (
              <SponsorLogo
                key={idx}
                src={sponsor.src}
                alt={sponsor.alt}
                link={sponsor.link}
                fallbackText={sponsor.fallbackText}
              />
            ))}
          </div>
        </div>

        {/* Publication Partner */}
        <div className="sponsors-card-container publication-container">
          <h3 className="sponsors-subsection-title">Publication Partner</h3>
          <div className="partner-grid">
            <SponsorLogo
              src="/img/taylor_and_francis.png"
              alt="Taylor & Francis Group"
              fallbackText="Taylor & Francis Group"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
