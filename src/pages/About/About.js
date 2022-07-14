import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import Cat from "../../assets/cat.png"

export default function About() {
  const pageMotion = {
    initial: { opacity: 0, y:100 },
    animate: { opacity: 1, y:0, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };
  return (
    <motion.div
      key="about"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageMotion}>
    <div className="about-viewport">
      
      <div className="about-container">
        <p className="about-text">
          Giselle Ng D. is an hobbiest digital artist and developer from New
          York. She enjoys pursuing creative endeavours. Her influences consists
          of anime, Japanese RPGs, fantasy, and cute aesthetics.
        </p>
        <img src={Cat} height="60%"/>
      </div>
      
    </div>
    </motion.div>
  );
}
