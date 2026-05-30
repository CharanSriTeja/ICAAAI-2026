import React, { useState } from "react";
import "./Committees.css";

const Committees = () => {
  const [activeCategory, setActiveCategory] = useState("advisory");

  const committeesData = {
    advisory: {
      title: "Advisory & Editorial Committee",
      lists: [
        {
          groupName: "Advisory Committee Members",
          members: [
            "DATO’ Prof. Dr. Shamala K. Subramaniam, UPM, Malaysia",
            "Dr. Antonino Galletta, Professor, University of Messina, Italy",
            "Dr. Diego Oliva, Assoc. Professor, Universidad de Guadalajara, Mexico",
            "Dr. Judhi Prasetyo, Middlesex University, Dubai",
            "Dr. Ahmed Elngar, Associate Professor in CSE, Beni-Suef University, Egypt",
            "Dr. Sourangshu Bhattacharya, Assoc. Professor, IIT Kharagpur, India",
            "Dr. Sriparna Saha, Assoc. Professor, IIT Patna, India",
            "Dr. R.B.V. Subrahmanyam, Professor in CSE, NIT Warangal, India",
            "Dr. Manju Khari, Professor in CSE, JNU Delhi, India",
            "Dr. M.H.M. Krishna Prasad, Professor in CSE, JNTUK, India",
            "Dr. L. Sumalatha, Professor in CSE, JNTUK, India",
            "Dr. A.S.N. Chakravarty, Professor in CSE, JNTUK, India",
            "Dr. A. Krishna Mohan, Professor in CSE, JNTUK, India"
          ]
        },
        {
          groupName: "Editorial Board Members",
          members: [
            "Dr. R.N.V. Jagan Mohan, Associate Professor, CSE, SRKR Engineering College",
            "Prof. BHVS Ramakrishnam Raju, Professor & Head, CSE, SRKR Engineering College",
            "Dr. G.N.V.G. Sirisha, Associate Professor, CSE & Coordinator B.Tech. AI&ML, SRKR Engineering College"
          ]
        }
      ]
    },
    technical: {
      title: "Technical Program & Programme Committee",
      lists: [
        {
          groupName: "Technical Program Committee",
          members: [
            "Dr. Hazlina Binti Hamdan, Head of AI Research Group, UPM, Malaysia",
            "Dr. Ozen Ozer, Professor, Kirklareli University, Turkey",
            "Dr. Ben Othman Soufiane, Prince Laboratory Research, University of Sousse, Tunisia",
            "Dr. Tien Anh Tran, Asst. Professor, Vietnam Maritime University, Vietnam",
            "Dr. Sumitra Srinivas K, Middlesex University, Dubai",
            "Dr. Praneetha Sree, Assistant Professor, NIT Raipur, India",
            "Dr. K. Himabindu, Assistant Professor & Head in CSE, NIT AP, India",
            "Dr. Nagesh Bhattu Sristy, Assistant Professor, NIT AP, India",
            "Dr. P. S. V. S. Sai Prasad, Professor, University of Hyderabad, India",
            "Dr. N.S.S Ushadevi, Assistant Professor, CSE, JNTU Kakinada, India",
            "Dr. Chandra Sekhar Voruganti, Lead Computer Vision Engineer"
          ]
        },
        {
          groupName: "Programme Committee Members",
          members: [
            "Dr. R.B.V. Subrahmanyam, Professor, CSE, NIT Warangal",
            "Dr. R. Pradeep Singh, Associate Professor & HOD CSE, NIT Raipur",
            "Dr. A.S.N. Chakravarthy, Professor, CSE, JNTU Kakinada",
            "Dr. K.V. Krishnam Raju, Professor & Coordinator B.Tech CIC, SRKR Engineering College"
          ]
        }
      ]
    },
    organizing: {
      title: "Internal Organizing Committees",
      lists: [
        {
          groupName: "Logistics Committee",
          members: [
            "Dr. J. Rajani Kanth (Coordinator) - 77309 67999",
            "Dr. Ch. Ravi Swaroop - 95424 24938",
            "Smt. K. Sravani",
            "Sri Ch. Vinod Varma",
            "Smt. P. Jahnavi",
            "Sri. K.Gopala Varma",
            "Sri. K.P.Sai Ramakrishna",
            "Sri S. Suresh Kumar",
            "Sri P Durga Prasad"
          ]
        },
        {
          groupName: "Registrations Committee",
          members: [
            "Dr. D.N.S.B. Kavitha (Coordinator) - 99517 52864",
            "Smt. M. Jeevana Sujitha - 95735 48460",
            "Smt. A.L. Lavanya",
            "Smt. V. Anjani Kranthi",
            "Smt. K.V.N. Valli",
            "Miss Ch. Suma",
            "Smt. R. Leela Jyothi",
            "Smt. K. V. Mounica",
            "Miss K.V. Rishitha",
            "Miss M. Pragna Sri"
          ]
        },
        {
          groupName: "Technical Sessions Organizing Committee",
          members: [
            "Dr. K. Venkata Nagendra (Coordinator) - 6281537006",
            "Sri V. Dilip Kumar - 80963 96555",
            "Dr. G. Mahesh, Professor, CSE",
            "Smt. V. Priyadarshini",
            "Smt. B. Mounika",
            "Sri K. Hari Krishna",
            "Sri DVSRK Raju",
            "Smt. T. Rama Tulasi",
            "Smt. K. Amrutha",
            "Smt. D. Sravani"
          ]
        }
      ]
    }
  };

  const currentCategory = committeesData[activeCategory];

  return (
    <div className="committees-page">
      <div className="committees-container">
        {/* Header */}
        <div className="committees-header">
          <p className="committees-tagline">CONFERENCE LEADERSHIP</p>
          <h2 className="committees-title">Committees</h2>
          <div className="committees-divider"></div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="committees-tabs">
          <button
            className={`committees-tab-btn ${activeCategory === "advisory" ? "active" : ""}`}
            onClick={() => setActiveCategory("advisory")}
          >
            Advisory & Editorial
          </button>
          <button
            className={`committees-tab-btn ${activeCategory === "technical" ? "active" : ""}`}
            onClick={() => setActiveCategory("technical")}
          >
            Program & Technical
          </button>
          <button
            className={`committees-tab-btn ${activeCategory === "organizing" ? "active" : ""}`}
            onClick={() => setActiveCategory("organizing")}
          >
            Internal Organizing
          </button>
        </div>

        {/* Group Display Grids */}
        <div className="committees-panel">
          <h3 className="committees-panel-title">{currentCategory.title}</h3>
          
          <div className="committees-groups-grid">
            {currentCategory.lists.map((group, groupIdx) => (
              <div key={groupIdx} className="committee-group-card">
                <h4 className="committee-group-name">{group.groupName}</h4>
                <div className="committee-card-divider"></div>
                <ul className="committee-members-list">
                  {group.members.map((member, memIdx) => (
                    <li key={memIdx} className="committee-member-item">
                      <span className="bullet">&bull;</span> {member}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committees;
