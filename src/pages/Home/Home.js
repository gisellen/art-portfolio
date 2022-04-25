import React from "react";
import HomeNav from "../../components/HomeNav/HomeNav";
import Desk from "../../assets/Desk.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <img src={Desk} />
      <HomeNav />
    </div>
  );
}
