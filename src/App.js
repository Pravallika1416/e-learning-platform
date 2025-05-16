import React, { useState } from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import LoginMenu from './components/LoginMenu';
import Home from './pages/Home';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    window.location.reload();
     // Set logged in state to true after successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    window.location.reload();
  };

  return (
    <div className="app">
    <Router>
      <Header toggleMobileMenu={() => setMenuOpen(true)} toggleLoginMenu={() => setLoginOpen(true)} />
      <SideMenu 
        visible={menuOpen} 
        closeMenu={() => setMenuOpen(false)} 
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        toggleLoginMenu={() => setLoginOpen(true)} // Pass the login toggle function to open login menu
      />
      <LoginMenu
        visible={loginOpen}
        closeLogin={() => setLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess} // Pass onLoginSuccess to handle successful login
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
