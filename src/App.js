import NavBar from "./components/navBar/NavBar";
import "./App.css";
import React from "react";

import "./App.css";

import Home from "./components/Pages/Home";
import Services from "./components/Pages/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Cards from "./components/Card/Cards";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Cards />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
