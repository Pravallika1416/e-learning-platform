// src/components/AlumniSection.js
import React from "react";

const AlumniSection = () => (
    <div className="alumni-section">
    <h3 className="section-title">Our Alumni</h3>
    <div className="alumni-carousel">
      <div className="alumni-card">
        <strong>Priya Sharma</strong>
        <br />
        From complete beginner to full-stack developer at Infosys in 6
        months!
      </div>
      <div className="alumni-card">
        <strong>Rahul Verma</strong>
        <br />
        Now building AI tools at a startup after starting with our Python
        course.
      </div>
      <div className="alumni-card">
        <strong>Anjali Patel</strong>
        <br />
        Landed her dream job at Amazon Web Services as a cloud engineer.
      </div>
      <div className="alumni-card">
        <strong>Sameer Khan</strong>
        <br />
        Created a successful ed-tech app after completing our React
        bootcamp.
      </div>
      <div className="alumni-card">
        <strong>Neha Joshi</strong>
        <br />
        Mentors new learners now, once struggled with basic HTML!
      </div>
      <div className="alumni-card">
        <strong>Aditya Roy</strong>
        <br />
        Won national-level hackathons after mastering JavaScript here.
      </div>
    </div>
  </div>
);

export default AlumniSection;
