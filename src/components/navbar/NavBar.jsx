import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  let logoTextUrl =
    "https://www.oldamericanfinancial.com/wp-content/uploads/2021/11/logo.jpg";

  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          id="main-logo-text"
          src={logoTextUrl}
          alt="York Logo"
          onClick={() => (window.location.pathname = "/")}
        />
      </div>
      <ul>
        <li>
          <Link to="/" className="hover-underline-animation">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/our-people" className="hover-underline-animation">
            OUR PEOPLE
          </Link>
        </li>
        <li>
          <Link to="/team" className="hover-underline-animation">
            TEAM
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover-underline-animation">
            CONTACT
          </Link>
        </li>
        <li>
          <Link to="/client-reporting" className="hover-underline-animation">
            CLIENT REPORTING
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
