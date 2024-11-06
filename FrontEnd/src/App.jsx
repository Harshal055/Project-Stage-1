import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuroraBackgroundDemo from "./Pages/AuroraBackgroundDemo";
import Homemid from "./Pages/homemid"; // Ensure this path is correct
import SignupLogin from "./Pages/Auth";
import Auth from "./Pages/Auth";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuroraBackgroundDemo />} />
        <Route path="/homemid" element={<Homemid />} />
        <Route path="/Auth" element={<Auth />} />

      </Routes>
    </Router>
  );
};

export default App;