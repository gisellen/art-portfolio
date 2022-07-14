import React, { Component } from "react";
import "./Gallery.css";

import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default class gallery extends Component {
  render() {
    function importAll(r) {
      return r.keys().map(r);
    }
    const images = importAll(
      require.context("./../../assets/illust/", false, /\.(png|jpe?g|svg)$/)
    );


    const pageMotion = {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 1 } },
      exit: { opacity: 0, transition: { duration: 0.3 } },
    };

    return (
      <div className="viewport">
        <motion.div
          key="gallery"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageMotion}
        >
          <div className="container">
            <div className="grid">
              {images.map((e) => (
                // TODO: add key to image
                <motion.div
                className="gallery-container"
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  >
                  <div className="gallery-item">
                    <div className="image">
                      <LazyLoadImage src={e} delayTime={1000} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* TODO: back to top button */}
      </div>
    );
  }
}
