import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuroraBackgroundDemo from "./Pages/AuroraBackgroundDemo";
import Homemid from "./Pages/homemid"; // Ensure this path is correct
import SignupLogin from "./Pages/Auth";
import Auth from "./Pages/Auth";
import UserProfile from './Pages/UserProfile'; // Ensure this import path is correct
import CodeEditor from "./Pages/Terminal-pages/CodeEditor";
import Codewd from "./Pages/Terminal-pages/codewd";






const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuroraBackgroundDemo />} />
        <Route path="/homemid" element={<Homemid />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/CodeEditor" element={<CodeEditor />} />
        <Route path="/Codewd" element={<Codewd />} />
      </Routes>

    </Router>
  );
};

export default App;