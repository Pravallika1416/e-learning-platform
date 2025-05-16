// Header.js
import React, { useState } from "react";
import useAuth from "./useAuth"; // Import the custom hook
import { graduatesCourses,juniorsCourses } from "../constants/menData";
import "./Header.css";

export default function Header({ toggleMobileMenu, toggleLoginMenu }) {
  const { isLoggedIn, courses, handleLogout } = useAuth();
  const [showGradMenu, setShowGradMenu] = useState(false);
  const [showJuniorMenu, setShowJuniorMenu] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  return (
    <header className="header">
      <div className="title">CompileIT</div>

      {/* Desktop Nav */}
      <nav className="desktop-nav">
        <div
          className="dropdown"
          onMouseEnter={() => setShowGradMenu(true)}
          onMouseLeave={() => setShowGradMenu(false)}
        >
          <button className="dropbtn">For Graduates ▼</button>
          {showGradMenu && (
  <div className="dropdown-content">
    {graduatesCourses.map((course, idx) => (
      <a href="#graduates" key={idx}>{course.name}</a>
    ))}
  </div>
)}
        </div>

        <div
          className="dropdown"
          onMouseEnter={() => setShowJuniorMenu(true)}
          onMouseLeave={() => setShowJuniorMenu(false)}
        >
          <button className="dropbtn">For Juniors ▼</button>
          {showJuniorMenu && (
  <div className="dropdown-content">
    {juniorsCourses.map((course, idx) => (
      <a href="#juniors" key={idx}>{course.name}</a>
    ))}
  </div>
)}
        </div>

        {isLoggedIn ? (
          <>
            <div
              className="dropdown"
              onMouseEnter={() => setShowCourses(true)}
              onMouseLeave={() => setShowCourses(false)}
            >
              <button className="dropbtn">My Classroom ▼</button>
              {showCourses && (
                <div className="dropdown-content">
                  {courses.length > 0 ? (
                    courses.map((c, i) => (
                      <a href="#" key={i}>
                        {c.title}
                      </a>
                    ))
                  ) : (
                    <span>No courses</span>
                  )}
                </div>
              )}
            </div>

            <div
              className="dropdown"
              onMouseEnter={() => setShowLogout(true)}
              onMouseLeave={() => setShowLogout(false)}
            >
              <button className="dropbtn">👤</button>
              {showLogout && (
                <div className="dropdown-content">
                  <a href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </div>
              )}
            </div>
          </>
        ) : (
          <button className="login-btn" onClick={toggleLoginMenu}>
            Login
          </button>
        )}
      </nav>

      {/* Mobile Nav */}
      <div className="mobile-nav">
        {isLoggedIn ? (
          <>
            <div
              className="dropdown"
              onMouseEnter={() => setShowCourses(true)}
              onMouseLeave={() => setShowCourses(false)}
            >
              <button className="dropbtn">My Classroom ▼</button>
              {showCourses && (
                <div className="dropdown-content">
                  {courses.length > 0 ? (
                    courses.map((c, i) => (
                      <a href="#" key={i}>
                        {c.title}
                      </a>
                    ))
                  ) : (
                    <span>No courses</span>
                  )}
                </div>
              )}
            </div>

            <div
              className="dropdown"
              onMouseEnter={() => setShowLogout(true)}
              onMouseLeave={() => setShowLogout(false)}
            >
              <button className="dropbtn">👤</button>
              {showLogout && (
                <div className="dropdown-content">
                  <a href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </div>
              )}
            </div>
          </>
        ) : (
          <button
            className="menu-icon"
            onClick={toggleMobileMenu} // Toggle menu visibility
          >
            <span className="menu-text">Courses</span> ☰
          </button>
        )}
      </div>
    </header>
  );
}
