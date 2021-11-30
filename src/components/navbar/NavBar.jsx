import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import whitelogo  from '../../assets/images/white-logo.png';

function NavBar() {
  const [navBarColor, setNavBarColor] = useState(false);

  const setBgToWhite = () => setNavBarColor(false);
  const setBgToBlack = () => setNavBarColor(true);

  return (
    <div className={`navbar padding ${navBarColor && "navbar-white"}`}>
      <div className="logo-container">
        <img
          id="main-logo-img"
          src={navBarColor ? logo : whitelogo}
          alt="old american Logo"
          onClick={() => (window.location.pathname = "/")}
        />
      </div>

      <ul>
        <li>
          <Link
            to="/"
            className="hover-underline-animation"
            onClick={setBgToWhite}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/our-people"
            className="hover-underline-animation"
            onClick={setBgToBlack}
          >
            OUR PEOPLE
          </Link>
        </li>
        <li>
          <Link
            to="/team"
            className="hover-underline-animation"
            onClick={setBgToBlack}
          >
            TEAM
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover-underline-animation"
            onClick={setBgToBlack}
          >
            CONTACT
          </Link>
        </li>
        <li>
          <Link
            to="/client-reporting"
            className="hover-underline-animation"
            onClick={setBgToBlack}
          >
            CLIENT REPORTING
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
