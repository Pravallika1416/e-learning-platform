// src/components/Graduates.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { graduatesCourses } from "../constants/menData";
import "./Courses.css"; // Create CSS for styling

const Graduates = () => {
  const navigate = useNavigate();

  const goToRegister = () => navigate("/register");

  return (
    <div className="courses-section graduates-section">
    <h2 className="section-heading">Courses for Graduates</h2>
    <div className="graduates-layout">
      {graduatesCourses.map((course, idx) => (
        <div className="course-item" key={idx} onClick={goToRegister}>
          <img src={course.image} alt={course.name} className="course-image" />
          <h3>{course.name}</h3>
        </div>
      ))}
    </div>
  </div>
  
  
  );
};

export default Graduates;
