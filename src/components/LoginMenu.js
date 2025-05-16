import React, { useEffect, useState } from "react";
import "./LoginMenu.css";

export default  function LoginMenu({ visible, closeLogin, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [otpMode, setOtpMode] = useState(false);
  const [otp, setOtp] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);

  useEffect(() => {
    if (!visible) {
      // Reset everything on close
      setEmail("");
      setOtp("");
      setOtpMode(false);
      setEmailValid(false);
    }
  }, [visible]);

  const validateEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handleContinue = async () => {
    if (!emailValid) return;

    setSendingOtp(true);
    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setOtpMode(true);
      } else {
        alert("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    } finally {
      setSendingOtp(false);
    }
  };

  const handleVerify = async () => {
    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem("jwt", data.token);
        closeLogin();
        onLoginSuccess();
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className={`login-menu ${visible ? "open" : ""}`}>
      <button className="close-btn" onClick={closeLogin}>✕</button>
      <h3>{otpMode ? "Enter OTP" : "Login to CompileIT"}</h3>

      {!otpMode ? (
        <>
          <button className="google-btn">Sign in with Google</button>
          <p style={{ textAlign: "center", margin: "10px 0" }}>OR</p>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className={`continue-btn ${emailValid ? "active" : ""}`}
            disabled={!emailValid || sendingOtp}
            onClick={handleContinue}
          >
            {sendingOtp ? "Sending..." : "Continue"}
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="continue-btn" onClick={handleVerify}>
            Verify
          </button>
        </>
      )}
    </div>
  );
}
