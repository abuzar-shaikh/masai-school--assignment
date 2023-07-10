import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Navbar/Home";
import Contact from "./Components/Navbar/Contact";
import About from "./Components/Navbar/About";
import Services from "./Components/Navbar/Services";
import Login from "./Components/Navbar/Login";
import NavBar from "./Components/Navbar/Navbar";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
