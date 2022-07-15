import React, { useState } from "react";
import Desk from "../../assets/Desk.png";
import DeskLight from "../../assets/DeskLight.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Home.css";

export default function Home() {
  const [image, setImage] = useState(Desk);

  const pageMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="home-page">
      <motion.div
        key="home"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
      >
        <Link draggable="false" to="/art-portfolio/illust">
          <img
            className="home-image"
            src={image}
            onMouseEnter={() => setImage(DeskLight)}
            onMouseLeave={() => setImage(Desk)}
          />
        </Link>
      </motion.div>
    </div>
  );
}
