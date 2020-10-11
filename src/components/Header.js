import React from "react";
import { IconName } from "react-icons/fi";

export function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-title">We 3 people who code</div>
        <div className="header-definition">
          We build products that empower developers and connect them to
          solutions that enable productivity, growth, and discovery.
        </div>
        <div className="header-button">
          <button className="developers">For developers</button>
          <button className="businesses">For businesses</button>
        </div>
      </div>
    </header>
  );
}
