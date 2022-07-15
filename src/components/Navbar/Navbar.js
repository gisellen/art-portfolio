import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";

export default function Navbar() {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  // display boolean
  let displayNav;
  if (usePathname() === "/art-portfolio/home") {
    displayNav = false;
  } else {
    displayNav = true;
  }

  // animation settings
  const pageMotion = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: -100, transition: { duration: 1 } },
  };

  const exitMotion = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 0, y: -100, transition: { duration: 1 } },
    exit: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div>
      {displayNav ? (
        <>
        <motion.div
        key="navbar"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}>
        <div className="center">
          <Link className="navbar" to="/art-portfolio/home">home</Link>
          <Link className="navbar" to="/art-portfolio/illust">illust</Link>
          <Link className="navbar" to="/art-portfolio/sketches">sketches</Link>
          <Link className="navbar" to="/art-portfolio/about">about</Link>
        </div>
        </motion.div>
        <hr className="nav-horizontal-divider"></hr>
        </>
      ) : (
         <>
        <motion.div
        key="navbar"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={exitMotion}>
        <div className="center">
          <Link className="navbar" to="/art-portfolio/home">home</Link>
          <Link className="navbar" to="/art-portfolio/illust">illust</Link>
          <Link className="navbar" to="/art-portfolio/sketches">sketches</Link>
          <Link className="navbar" to="/art-portfolio/about">about</Link>
        </div>
        </motion.div>
        <hr className="exit-nav-horizontal-divider"></hr>
        </>
      )}
    </div>
  );
}
