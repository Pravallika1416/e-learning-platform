// src/components/IntroSection.js
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const IntroSection = ({ scrollToCourses }) => (
  <div className="intro-section">
    <div className="intro-section-content">
      <h2>Break Limits. Build Skills.</h2>
      <h2>Turn ambition into action with industry-ready tech courses.</h2>
      <p>
        Master coding with confidence through expert-led, job-focused learning
        paths.
      </p>
      <button onClick={scrollToCourses}>
        Explore Courses <FaChevronDown style={{ marginLeft: "10px" }} />
      </button>
    </div>
  </div>
);

export default IntroSection;
