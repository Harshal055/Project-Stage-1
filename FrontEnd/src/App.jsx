import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuroraBackgroundDemo from "./Pages/AuroraBackgroundDemo";
import Homemid from "./Pages/homemid"; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuroraBackgroundDemo />} />
        <Route path="/homemid" element={<Homemid />} />
      </Routes>
    </Router>
  );
};

export default App;