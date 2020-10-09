import React from "react";
import { FiAlignJustify } from "react-icons/fi";
export function Navbar() {
  return (
    <nav>
      <div>
        <FiAlignJustify />
        <a href="#">About</a>
        <a>Products</a>
        <a>For Teams</a>
      </div>
    </nav>
  );
}
