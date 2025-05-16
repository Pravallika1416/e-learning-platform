// src/components/CoursesSection.js
import React from "react";
import Graduates from "./Graduates";
import Juniors from "./Juniors";

const CoursesSection = React.forwardRef((_, ref) => (
  <div className="courses-section" ref={ref}>
    <div className="courses-container">
      <Graduates />
      <Juniors />
    </div>
  </div>
));

export default CoursesSection;
