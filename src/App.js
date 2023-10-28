import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Works from "./pages/Works";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <Router>
        <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/works" element={<Works />} />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
