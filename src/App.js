import React from "react";
import "./Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="container">
{/* Left Section */}
      <div className="left-section">
        <h1>Create account.</h1>
        <p>
          Already have an account? <a href="#">Log In</a>
        </p>
        <form>
          <input type="text" placeholder="Username" className="input-field" />
          {/* Password Field */}
            <div className="input-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              // className="input-field"
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            </div>

          {/* Confirm Password Field */}
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="input-field"
            />

          <input type="text" placeholder="Full Name" className="input-field" />
          <input type="email" placeholder="Email address" className="input-field" />
          <div className="checkbox-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I’ve read and agree with your <a href="#">Terms of Services</a>
            </label>
          </div>
          <button className="create-account">Create Account</button>
          <pr>Or</pr>
        <div className="social-buttons">
          <button className="google-button">Sign up with Google</button>
        </div>
        </form>
      </div>
      
{/* Right Section */}
      <div className="right-section">
        <h2>Over 11,012,005 candidates waiting for good employees.</h2>
        <div className="stats">
          <div>
            <p className="number">11,012,005</p>
            <p>Live Jobs</p>
          </div>
          <div>
            <p className="number">1101</p>
            <p>Companies</p>
          </div>
          <div>
            <p className="number">2005</p>
            <p>New Jobs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
