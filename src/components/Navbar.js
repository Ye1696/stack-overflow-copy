import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import LogoImage from "../assets/images/logo.png";
export function Navbar() {
  return (
    <nav>
      <div className="Navbar">
        <div className="Navbar-logo">
          <FiAlignJustify />
          <img className="logo" src={LogoImage} />
          <a className="Navbar-href" href="#">
            About
          </a>
          <a className="Navbar-href" href="#">
            Products
          </a>
          <a className="Navbar-href" href="#">
            For Teams
          </a>

          <input className="Navbar-input" placeholder="Search..."></input>
        </div>
        <div className="Navbar-button">
          <button className="Navbar-login">Log in</button>
          <button className="Navbar-signup">Sign up</button>
        </div>
      </div>
    </nav>
  );
}
