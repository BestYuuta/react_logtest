import React from "react";
import CountUp from "react-countup";
import "./_register.css";
import RoleSelect from "./_roleSelect";

const SignupPage = () => {
  return (
    <div className="container">

      {/* LOGO */}
      <header className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <g clipPath="url(#clip0_3264_352)">
              <path d="M33.751 11.25H6.25098C5.56062 11.25 5.00098 11.8096 5.00098 12.5V32.5C5.00098 33.1904 5.56062 33.75 6.25098 33.75H33.751C34.4413 33.75 35.001 33.1904 35.001 32.5V12.5C35.001 11.8096 34.4413 11.25 33.751 11.25Z" stroke="#0A65CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26.25 11.25V8.75C26.25 8.08696 25.9866 7.45107 25.5178 6.98223C25.0489 6.51339 24.413 6.25 23.75 6.25H16.25C15.587 6.25 14.9511 6.51339 14.4822 6.98223C14.0134 7.45107 13.75 8.08696 13.75 8.75V11.25" stroke="#0A65CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M35.0012 19.7358C30.4423 22.3734 25.2669 23.7583 20 23.75C14.7339 23.7583 9.55935 22.3739 5.00098 19.7371" stroke="#0A65CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.125 18.75H21.875" stroke="#0A65CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_3264_352">
                <rect width="40" height="40" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <h1>MyJob</h1>
      </header>

      {/* LEFT SECTION */}
      <div className="leftSection">
        <form className="signup-form">
        <div className="hdCreateAccount">
          <div className="title-row">
            <h2>Create account.</h2>
            <div className="select">
              <RoleSelect />
            </div>
          </div>
          <p>Already have an account? <a href="./_login.jsx">Log In</a></p>
        </div>
          <div className="input-group">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="inputRow">
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms"> I've read and agree with your <a href="/terms">Terms of Services</a></label>
          </div>
          <button className="create-account">Create Account →</button>
          <p className="or-text">or</p>
          <div className="social-buttons">
            <button className="google">
            <img src="src/assets/Google.svg" alt="google" width={20} height={20} />
              Sign up with Google</button>
          </div>
        </form>
      </div>

      {/* RIGHT SECTION */}
      <div className="rightSection">
          <svg xmlns="http://www.w3.org/2000/svg" width="998" height="1080" viewBox="0 0 998 1080" fill="none">
            <defs>
              <linearGradient id="animatedGradient" x1="499.75" y1="0" x2="499.75" y2="1080" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="white" stop-opacity="1">
                  <animate attributeName="stop-color" values="white; blue; purple; white" dur="10s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stop-color="aqua" stop-opacity="1">
                  <animate attributeName="stop-color" values="blue; purple; white; blue" dur="10s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            <path d="M51.5 0H999.5V1080H0L51.5 0Z" fill="url(#animatedGradient)" fill-opacity="0.9"/>
            <text x="50%" y="70%" text-anchor="middle" dominant-baseline="middle" font-size="35" fill="white" font-weight="bold">
            Over 1101 candidates waiting for good employees.
            </text>
          </svg>
        <div>
        
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
