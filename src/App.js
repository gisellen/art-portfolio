import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import Sketches from "./pages/Sketches/Sketches";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence exitBeforeEnter={true}>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Navigate replace to="/art-portfolio/home" />} />
          <Route exact path="/home" element={<Navigate replace to="/art-portfolio/home" />} />
          <Route exact path="/art-portfolio" element={<Navigate replace to="/art-portfolio/home" />} />
          <Route exact path="/art-portfolio/home" element={<Home />} />
          <Route exact path="/art-portfolio/illust" element={<Gallery />} />
          <Route exact path="/art-portfolio/sketches" element={<Sketches />}></Route>
          <Route exact path="/art-portfolio/about" element={<About />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
