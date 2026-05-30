import React from "react";
import "./Schedule.css";

const Schedule = () => {
  const dates = [
    {
      date: "Sep 30, 2025",
      title: "Full Paper Submission",
      description: "Submit your final, fully formatted papers for double-blind peer review."
    },
    {
      date: "Oct 22, 2025",
      title: "Notification of Acceptance",
      description: "Review comments and decisions will be sent out to the authors."
    },
    {
      date: "Oct 30, 2025",
      title: "Camera Ready Submission",
      description: "Submit final print-ready versions incorporating reviewer feedback."
    },
    {
      date: "Nov 05, 2025",
      title: "Early Bird Registration",
      description: "Last day to register under the discounted early registration fee."
    },
    {
      date: "Dec 11–13, 2025",
      title: "Conference Event",
      description: "Three days of technical sessions, keynote speeches, and networking at SRKR Campus."
    }
  ];

  return (
    <section id="schedule" className="sched-section">
      <div className="sched-container">
        <div className="sched-header">
          <p className="sched-tagline">TIMELINE</p>
          <h2 className="sched-title">Important Dates</h2>
          <div className="sched-divider"></div>
        </div>

        <div className="sched-timeline">
          {dates.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-badge-outer">
                <div className="timeline-badge"></div>
              </div>
              <div className="timeline-panel">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
