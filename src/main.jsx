import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './View/LoginPage.jsx'
import SignUpPage from './View/SignUpPage.jsx'
// import Term from './View/Term.jsx'
import ForgotPw from './View/ForgotPw.jsx'
import EmailVerify from './View/EmailVerify.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path="/term" element={<Term />} /> */}
        <Route path="/forgotpw" element={<ForgotPw />} />
        <Route path="/emailverify" element={<EmailVerify />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
