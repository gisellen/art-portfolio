import React from "react";
import "./About.css";
import { motion } from "framer-motion";

// images
import Cat from "../../assets/cat.png"
import ArtStation from "../../assets/icons/artstation.png"
import Envelope from "../../assets/icons/envelope.png"
import Instagram from "../../assets/icons/instagram.png"
import Twitter from "../../assets/icons/twitter.png"

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
        <div>
        <p className="about-text">
          Giselle Ng D. AKA "Xyrishi" is a digital artist and developer from New
          York. She enjoys pursuing endless creative endeavours. Her influences consists
          of video games, Japanese RPGs, fantasy, and american/japanese cartoons.
        </p>
        <div className="center icons-description">
            <a href="https://www.instagram.com/xyrishi/" target="_blank">
          <img className="icons" src={Instagram} width="30px" />
          </a>
          <a href="https://twitter.com/xyrishi00"  target="_blank">
          <img className="icons"  src={Twitter}  width="30px" />
          </a>
          <a href="https://www.artstation.com/xyrishi"  target="_blank">
          <img className="icons"  src={ArtStation}  width="30px" />
          </a>
          <a href="mailto: xyrishi00@gmail.com"  target="_blank">
          <img className="icons"  src={Envelope}  width="30px" />
          </a>
          </div>
          </div>
        <img src={Cat} height="60%"/>
      </div>
      
    </div>
    </motion.div>
  );
}
