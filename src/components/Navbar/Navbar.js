import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  let displayNav;
  if (usePathname() === "/home") {
    displayNav = false;
  } else {
    displayNav = true;
  }
  return (
    <div>
      {displayNav ? (
        <div className="center">
          <Link to="/home">home</Link>
          <Link to="/illust">illust</Link>
          <Link to="/sketches">sketches</Link>
          <Link to="/about">about</Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
