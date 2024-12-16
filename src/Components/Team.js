import React from 'react';

export default function Team() {
  const teamMembers = [
    { id: 1, name: "John Doe", designation: "Project Manager", photo: "https://via.placeholder.com/300" },
    { id: 2, name: "Jane Smith", designation: "Software Engineer", photo: "https://via.placeholder.com/300" },
    { id: 3, name: "Alice Johnson", designation: "UI/UX Designer", photo: "https://via.placeholder.com/300" },
    { id: 4, name: "Bob Brown", designation: "Quality Analyst", photo: "https://via.placeholder.com/300" },
    { id: 5, name: "Emma Davis", designation: "DevOps Engineer", photo: "https://via.placeholder.com/300" },
    { id: 6, name: "Michael Wilson", designation: "Backend Developer", photo: "https://via.placeholder.com/300" },
    { id: 7, name: "Sophia Taylor", designation: "Frontend Developer", photo: "https://via.placeholder.com/300" },
    { id: 8, name: "William Lee", designation: "Data Scientist", photo: "https://via.placeholder.com/300" },
  ];

  return (
    <section className="section team-section" id="team" aria-label="Team">
      <div className="container">
        <p className="section-subtitle text-center">- Meet the Minds Behind the Magic -</p>
        <h2 className="h2 section-title text-center">Our Talented Team</h2>
        <p className="section-text text-center">
          At Infiedge, our talented team delivers excellence, drives innovation, and turns visionary ideas into impactful realities.
        </p>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <img
                src={member.photo}
                alt={`${member.name}'s photo`}
                className="team-photo"
              />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-designation">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
