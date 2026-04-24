import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Home from "./pages/Home";
import Projects from "./pages/projects.js";
import "./styles.css";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;