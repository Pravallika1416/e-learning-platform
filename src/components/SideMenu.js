// SideMenu.js
import React, { useState, useEffect } from "react";
import useAuth from "./useAuth"; // Import the custom hook
import { graduatesCourses,juniorsCourses } from "../constants/menData";
import "./SideMenu.css";

const SideMenu = ({ visible, closeMenu, toggleLoginMenu }) => {
  const { isLoggedIn, courses, handleLogout } = useAuth();
  const [showGradMenu, setShowGradMenu] = useState(false);
  const [showJuniorMenu, setShowJuniorMenu] = useState(false);

  useEffect(() => {
    if (visible) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [visible]);

  const handleGradToggle = () => {
    setShowGradMenu(!showGradMenu);
    if (showJuniorMenu) setShowJuniorMenu(false); // Optional: Close other menu
  };

  const handleJuniorToggle = () => {
    setShowJuniorMenu(!showJuniorMenu);
    if (showGradMenu) setShowGradMenu(false); // Optional: Close other menu
  };

  return (
    <div className={`side-menu ${visible ? "open" : ""}`}>
      

      {/* Conditionally show login or user-related options */}
      {!isLoggedIn ? (
        <>
        <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
        ✕
      </button>

      <h2 className="menu-title">
        Compile<span className="highlight">IT</span>
      </h2>

      <hr />

      {/* Course dropdowns are shown regardless of login status */}
      <div className="menu-item" onClick={handleGradToggle}>
        Graduates <span>{showGradMenu ? "▲" : "▼"}</span>
      </div>
      {showGradMenu && <ul className="submenu">
  {graduatesCourses.map((course, idx) => (
    <li key={idx}><a href="#graduates">{course.name}</a></li>
  ))}
</ul>
}

      <div className="menu-item" onClick={handleJuniorToggle}>
        Juniors <span>{showJuniorMenu ? "▲" : "▼"}</span>
      </div>
      {showJuniorMenu && <ul className="submenu">
  {graduatesCourses.map((course, idx) => (
    <li key={idx}><a href="#graduates">{course.name}</a></li>
  ))}
</ul>
}

      <hr />
         <div className="contact">
        <p>📞 Call us: +91-9876543210</p>
        <p>✉️ Mail us: support@compileit.com</p>
      </div>
      <div className="mobile-login">
      <button
            className="login-button"
            onClick={() => {
              closeMenu();        // Closes the side menu
              toggleLoginMenu();  // Opens the login menu
            }} // Opens the Login Menu when clicked
          >
            Login
          </button>
      </div>
          
        </>
      ) : (
        <>
          <div className="menu-item">
            <a href="#">My Courses</a>
          </div>

          <div className="menu-item">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </>
      )}

      <hr />

     
    </div>
  );
};

export default SideMenu;
