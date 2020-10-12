import React from "react";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import LogoImage from "../assets/images/logo.png";
export function Navbar() {
  return (
    <nav>
      <div className="Navbar">
        <div className="Navbar-logo">
          <FiAlignJustify size="20px" cursor="pointer" />
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
          <div className="input-search">
            <FiSearch size="20px" color="grey" className="FiSearch" />
            <input className="Navbar-input" placeholder="Search..."></input>
          </div>
        </div>
        <div className="Navbar-button">
          <button className="Navbar-login">Log in</button>
          <button className="Navbar-signup">Sign up</button>
        </div>
      </div>
    </nav>
  );
}
