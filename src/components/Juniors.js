// src/components/Juniors.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { juniorsCourses } from "../constants/menData";
import "./Courses.css";

const Juniors = () => {
  const navigate = useNavigate();

  const goToRegister = () => navigate("/register");

  return (
<div className="courses-section juniors-section">
  <h2 className="section-heading">Courses for Juniors</h2>
  <div className="juniors-layout">
    {juniorsCourses.map((course, idx) => (
      <div className="course-item" key={idx} onClick={goToRegister}>
        <img src={course.image} alt={course.name} className="course-image" />
        <h3>{course.name}</h3>
      </div>
    ))}
  </div>
</div>

  
  );
};

export default Juniors;

