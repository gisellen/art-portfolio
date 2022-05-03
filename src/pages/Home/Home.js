import React from "react";
import HomeNav from "../../components/HomeNav/HomeNav";
import Spline from "@splinetool/react-spline";
import Desk from "../../assets/Desk.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <div>
        <Spline scene="https://prod.spline.design/xMMWryvhFKr1Rxzx/scene.spline" />
      </div>

      <HomeNav />
    </div>
  );
}
