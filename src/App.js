import React from "react";
import "./Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import BackgroundSVG from "./background";

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="leftSection">
        <form className="signup-form">
          <h2>Create account.</h2>
          <p>Already have an account? <a href="/login">Log In</a></p>
          <div className="input-group">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Username" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I've read and agree with your <a href="/terms">Terms of Services</a></label>
          </div>
          <button className="create-account">Create Account →</button>
          <p className="or-text">or</p>
          <div className="social-buttons">
            <button className="facebook">Sign up with Facebook</button>
            <button className="google">Sign up with Google</button>
          </div>
        </form>
      </div>
      <div className="rightSection">
        <h2>Over 1,75,324 candidates waiting for good employees.</h2>
        <div className="stats">
          <div>
            <p>1,75,324</p>
            <p>Live Job</p>
          </div>
          <div>
            <p>97,354</p>
            <p>Companies</p>
          </div>
          <div>
            <p>7,532</p>
            <p>New Jobs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
