import React from "react";
import "./navbar.css";

function NavBar() {
  let logoURL =
    "https://yorkcapital.com/wp-content/themes/yorkcapital/dist/assets/img/logo-white.svg";
  let logoTextUrl =
    "https://yorkcapital.com/wp-content/themes/yorkcapital/dist/assets/img/footer-logo.svg";

  return (
    <div className="navbar">
      <div className="logo-container">
        <img id="main-logo" src={logoURL} alt="York Logo" />
        <img id="main-logo-text" src={logoTextUrl} alt="York Logo" />
      </div>
      <ul>
        <li>HOME</li>
        <li>TEAM</li>
        <li>STRATEGIES</li>
        <li>CONTACT</li>
        <li>CLIENT LOGIN</li>
      </ul>
    </div>
  );
}

export default NavBar;
