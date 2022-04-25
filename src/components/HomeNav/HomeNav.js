import React from "react";
import { Link } from "react-router-dom";
import "./HomeNav.css";

export default function Navbar() {
  return (
    <div>
      <div className="center">
        <Link to="/illust">illust</Link>
        <Link to="/sketches">sketches</Link>
        <Link to="/about">about</Link>
      </div>
    </div>
  );
}
