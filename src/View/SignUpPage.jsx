import React, { useState } from "react";
import "./SignUpPage.css";
import TextField from "@mui/material/TextField";
import RoleSelect from "../Components/_roleSelect";
import Password from "../Components/_pw";
import ConfirmPw from "../Components/_confirmPw";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [accountType, setAccountType] = useState({
    fullName: "Full Name",
    username: "Username",
    email: "Email address",
  });
  const handleRoleChange = (role) => {
    if (role === "employer") {
      setAccountType({
        fullName: "Company Name",
        username: "Company Username",
        email: "Company Email",
      });
    } else if (role === "candidate") {
      setAccountType({
        fullName: "Full Name",
        username: "Username",
        email: "Personal Email",
      });
    }
  };
  return (
    <div>
      <div className="signup-container">
        {/* LOGO */}
        <header className="signup-logo">
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
        <div className="signup-leftSection">
          <form className="signup-form">
          <div className="signup-hdCreateAccount">
            <div className="signup-title-row">
              <h2>Create account.</h2>
              <div className="signup-select">
                <RoleSelect onAccoutTypeChange={handleRoleChange} />
              </div>
            </div>
            <p>Already have an account? {""}
              <Link to= "/login">Log In</Link>
            </p>
          </div>
            <div className="signup-input-group">
              <TextField 
                sx={{  width: '100%' }}
                id="name" 
                label={accountType.fullName} 
                variant="outlined" 
              /> 
              <TextField 
                sx={{  
                  width: '100%',
                }}
                id="username" 
                label={accountType.username} 
                variant="outlined" 
              /> 
            </div>
              <TextField 
                sx={{  
                  width: '100%',
                  mt: 2
                }}
                id="email"
                label={accountType.email} 
                variant="outlined" 
              /> 
              <Password sx ={{
                mt: 2,
                width: '100%'
              }}/>
              <ConfirmPw />
              <div className="signup-terms">
                <label htmlFor="terms">
                  <input type="checkbox" id="terms" />
                  {" "}I've read and agree with your <a href="/terms">Terms of Services</a>
                </label>
              </div>
              <Link to="/emailverify">
                <button className="signup-create-account">Create Account →</button>
              </Link>
            <p className="signup-or-text">or</p>
            <div className="signup-social-buttons">
              <button className="signup-google">
              <img src="src/assets/Google.svg" alt="google" width={20} height={20} />
                Sign up with Google</button>
            </div>
          </form>
        </div>

        {/* RIGHT SECTION */}
        <div className="signup-rightSection">
          <div className="signup-svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  fill="none">
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
            </svg>
          </div>
          <div className="signup-stats">
            <p>Over 2 Candidates joined us to have a F U C K I N G JOB</p>
            <div className="signup-stats-row">
              {/* livejobs */}
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clip-path="url(#clip0_10_16336)">
                    <path opacity="0.2" d="M16 19C11.7872 19.0066 7.64764 17.8991 4.00098 15.7898V26C4.00098 26.1313 4.02684 26.2614 4.0771 26.3827C4.12735 26.504 4.20101 26.6143 4.29387 26.7071C4.38673 26.8 4.49697 26.8736 4.61829 26.9239C4.73962 26.9741 4.86965 27 5.00098 27H27.001C27.1323 27 27.2623 26.9741 27.3837 26.9239C27.505 26.8736 27.6152 26.8 27.7081 26.7071C27.8009 26.6143 27.8746 26.504 27.9249 26.3827C27.9751 26.2614 28.001 26.1313 28.001 26V15.7886C24.3539 17.8987 20.2135 19.0066 16 19Z" fill="white"/>
                    <path d="M27.001 9.00003H5.00098C4.44869 9.00003 4.00098 9.44775 4.00098 10V26C4.00098 26.5523 4.44869 27 5.00098 27H27.001C27.5533 27 28.001 26.5523 28.001 26V10C28.001 9.44775 27.5533 9.00003 27.001 9.00003Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 9V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H13C12.4696 5 11.9609 5.21071 11.5858 5.58579C11.2107 5.96086 11 6.46957 11 7V9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28.0009 15.7887C24.3538 17.8987 20.2135 19.0066 15.9999 19C11.7871 19.0066 7.64743 17.8991 4.00073 15.7897" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.5 15H17.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_10_16336">
                      <rect width="32" height="32" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <h3>100+</h3>
                <p>Live Jobs</p>
              </div>
              {/* company */}
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clip-path="url(#clip0_10_16348)">
                    <path opacity="0.2" d="M17.9993 26.9979V4.99786C17.9993 4.73265 17.8939 4.47829 17.7064 4.29076C17.5188 4.10322 17.2645 3.99786 16.9993 3.99786H4.99927C4.73405 3.99786 4.4797 4.10322 4.29216 4.29076C4.10462 4.47829 3.99927 4.73265 3.99927 4.99786V26.9979" fill="white"/>
                    <path d="M2 26.9979H30" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.9993 26.9979V4.99786C17.9993 4.73265 17.8939 4.47829 17.7064 4.29076C17.5188 4.10322 17.2645 3.99786 16.9993 3.99786H4.99927C4.73405 3.99786 4.4797 4.10322 4.29216 4.29076C4.10462 4.47829 3.99927 4.73265 3.99927 4.99786V26.9979" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.9993 26.9979V12.9979C27.9993 12.7326 27.8939 12.4783 27.7064 12.2908C27.5188 12.1032 27.2645 11.9979 26.9993 11.9979H17.9993" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.99927 8.99786H11.9993" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.99927 16.9979H13.9993" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.99927 21.9979H11.9993" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.9993 21.9979H23.9993" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.9993 16.9979H23.9993" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_10_16348">
                      <rect width="32" height="32" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <h3>1000+</h3>
                <p>Company</p>
              </div>
              {/* newjobs */}
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clip-path="url(#clip0_10_16364)">
                    <path opacity="0.2" d="M16 19C11.7872 19.0066 7.64764 17.8991 4.00098 15.7898V26C4.00098 26.1313 4.02684 26.2614 4.0771 26.3827C4.12735 26.504 4.20101 26.6143 4.29387 26.7071C4.38673 26.8 4.49697 26.8736 4.61829 26.9239C4.73962 26.9741 4.86965 27 5.00098 27H27.001C27.1323 27 27.2623 26.9741 27.3837 26.9239C27.505 26.8736 27.6152 26.8 27.7081 26.7071C27.8009 26.6143 27.8746 26.504 27.9249 26.3827C27.9751 26.2614 28.001 26.1313 28.001 26V15.7886C24.3539 17.8987 20.2135 19.0066 16 19Z" fill="white"/>
                    <path d="M27.001 9.00003H5.00098C4.44869 9.00003 4.00098 9.44775 4.00098 10V26C4.00098 26.5523 4.44869 27 5.00098 27H27.001C27.5533 27 28.001 26.5523 28.001 26V10C28.001 9.44775 27.5533 9.00003 27.001 9.00003Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 9V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H13C12.4696 5 11.9609 5.21071 11.5858 5.58579C11.2107 5.96086 11 6.46957 11 7V9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28.0009 15.7887C24.3538 17.8987 20.2135 19.0066 15.9999 19C11.7871 19.0066 7.64743 17.8991 4.00073 15.7897" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.5 15H17.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_10_16364">
                      <rect width="32" height="32" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <h3>100+</h3>
                <p>New Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;