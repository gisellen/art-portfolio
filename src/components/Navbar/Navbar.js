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
  if (usePathname() === "/home") {
    displayNav = false;
  } else {
    displayNav = true;
  }

  // animation settings
  const pageMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <div>
      {displayNav ? (
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}>
        <div className="center">
          <Link  to="/home">home</Link>
          <Link to="/illust">illust</Link>
          <Link to="/sketches">sketches</Link>
          <Link to="/about">about</Link>
        </div>
        </motion.div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
