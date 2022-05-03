import React, { Component } from "react";
import "./Gallery.css";

import Anges from "../../assets/illust/agnes.jpg";
import Blue from "../../assets/illust/blue.jpg";
import Flower from "../../assets/illust/flower.jpg";
import Hien from "../../assets/illust/hien.jpg";
import SayCheese from "../../assets/illust/saycheese.jpg";
import Elpis from "../../assets/illust/elpis.jpg";
import Train from "../../assets/illust/train.jpg";
import Alice from "../../assets/illust/alice.png";


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
          <div className="grid">
            <div className="gallery-container">
              <div className="gallery-item">
                <div className="image">
                  <LazyLoadImage src={Anges} delayTime={1000} />
                </div>
              </div>
            </div>
            <div className="gallery-container">
              <div className="gallery-item">
                <div className="image">
                  <LazyLoadImage src={Blue} delayTime={1000} />
                </div>
              </div>
            </div>
            <div className="gallery-container">
              <div className="gallery-item">
                <div className="image">
                  <LazyLoadImage src={Flower} delayTime={1000} />
                </div>
              </div>
            </div>
            <div className="gallery-container w-2">
              <div className="gallery-item">
                <div className="image" >
                  <LazyLoadImage src={SayCheese} delayTime={1000} style={{objectFit: 'cover', objectPosition: '50% 10%'}} />
                </div>
              </div>
            </div>
            <div className="gallery-container h-2">
              <div className="gallery-item">
                <div className="image">
                  <LazyLoadImage src={Hien} delayTime={1000} style={{objectFit: 'cover', objectPosition: '50% 20%'}} />
                </div>
              </div>
            </div>
            <div className="gallery-container w-2">
              <div className="gallery-item">
                <div className="image">
                  <LazyLoadImage src={Elpis} delayTime={1000} />
                </div>
              </div>
            </div>
            <div className="gallery-container ">
              <div className="gallery-item">
                <div className="image">
                  <LazyLoadImage src={Train} delayTime={1000} style={{objectFit: 'cover', objectPosition: '65% 60%'}} />
                </div>
              </div>
            </div>
            <div className="gallery-container">
              <div className="gallery-item">
                <div className="image">
                  <LazyLoadImage src={Alice} delayTime={1000} style={{objectFit: 'cover', objectPosition: '65% 25%'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
