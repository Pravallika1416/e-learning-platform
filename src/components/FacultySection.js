// src/components/FacultySection.js
import React from "react";

const FacultySection = () => (
<div className="faculty-section">
        <h3 className="section-title">Our Faculty</h3>
        <div className="card-container">
          <div className="faculty-card">
            <strong>Dr. Meera Iyer</strong>
            <br />
            Former research scientist at IBM with 15+ years in AI. Passionate
            about helping beginners build strong foundations in Python and ML.
          </div>
          <div className="faculty-card">
            <strong>Arjun Nair</strong>
            <br />
            Ex-frontend engineer at Flipkart. Specializes in React, JavaScript,
            and turning code into art. Believes in learning by building real
            projects.
          </div>
          <div className="faculty-card">
            <strong>Ritika Banerjee</strong>
            <br />
            Industry mentor and cloud solutions expert. She’s guided 500+
            students into tech careers, especially in DevOps and AWS.
          </div>
          <div className="faculty-card">
            <strong>Prateek Sinha</strong>
            <br />
            Known for his practical approach to Data Structures & Algorithms.
            Helped students crack interviews at Google, Meta, and more.
          </div>
        </div>
      </div>
);

export default FacultySection;
