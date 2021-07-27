import React from "react";
import "./global/reset.css";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <h1>Logo</h1>
      <ul className="menu">
        <li> Home</li>
        <li>Movie</li>
        <li>Série</li>
      </ul>
    </div>
  );
}

export default Header();
