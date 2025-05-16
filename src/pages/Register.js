// src/pages/Register.js
import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate form submission and clear the form
    setTimeout(() => setFormData({ fullName: "", email: "", phone: "" }), 2000);
  };

  return (
    <div className="register-container">
      <h2>Course Registration</h2>
      <p>Fill in your details to register for the selected course and get started!</p>

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Your Full Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>

        {submitted && <p className="success-message">Registration successful! 🎉</p>}
      </form>
    </div>
  );
};

export default Register;
