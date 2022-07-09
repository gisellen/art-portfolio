import React, { Component } from "react";
import "./Sketches.css";

import Girl from '../../assets/sketches/girl.PNG'
import Ing from '../../assets/sketches/ing.jpg'
import Sketches from '../../assets/sketches/sketches.jpg'
import Rosel from '../../assets/sketches/wosel.jpg'

import { LazyLoadImage } from "react-lazy-load-image-component";

export default class gallery extends Component {
  render() {
    function importAll(r) {
      return r.keys().map(r);
    }
    const images = importAll(
      require.context("./../../assets/illust/", false, /\.(png|jpe?g|svg)$/)
    );
    return (
      <div className="viewport">
        <div className="container">
          <div className="sketches-grid">
            <div className="gallery-container w-1 h-2">
              <div className="gallery-item">
                <div className="image">
                  <LazyLoadImage src={Girl} delayTime={1000} />
                </div>
              </div>
            </div>
            <div className="gallery-container w-1 h-2">
              <div className="gallery-item">
                <div className="image">
                  <LazyLoadImage src={Ing} delayTime={1000} />
                </div>
              </div>
            </div>
            <div className="gallery-container h-2">
              <div className="gallery-item">
                <div className="image">
                  <LazyLoadImage src={Rosel} delayTime={1000} />
                </div>
              </div>
            </div>
            <div className="gallery-container w-1 h-2">
              <div className="gallery-item">
                <div className="image">
                  <LazyLoadImage src={Sketches} delayTime={1000} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
