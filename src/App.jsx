// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./_register.jsx";
// import Login from "./_login.jsx";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Navigate to="./register.jsx" />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //   </Routes>
    // </Router>
    <div>
      <Register />
    </div>
  );
}

export default App;
