import NavBar from "./components/navBar/NavBar";
import "./App.css";
import React from "react";

import "./App.css";

import Home from "./components/Pages/Home";
import Services from "./components/Pages/About";
import Products from "./components/Pages/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Pages/Contact";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
