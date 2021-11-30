import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import whitelogo from "../../assets/images/white-logo.png";
import { Sling as Hamburger } from "hamburger-react";

function NavBar() {
  const [navBarColor, setNavBarColor] = useState(false);
  const [isOpen, setOpen] = useState(false);

  console.log(isOpen);

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
      <ul className={isOpen && "small-screen-menu"}>
        <li className={`navbar-menu ${isOpen && "show-menu"}`}>
          <Link
            to="/"
            className="hover-underline-animation"
            onClick={setBgToWhite}
          >
            HOME
          </Link>
        </li>
        <li className={`navbar-menu ${isOpen && "show-menu"}`}>
          <Link
            to="/our-people"
            className="hover-underline-animation"
            onClick={setBgToBlack}
          >
            OUR PEOPLE
          </Link>
        </li>
        <li className={`navbar-menu ${isOpen && "show-menu"}`}>
          <Link
            to="/team"
            className="hover-underline-animation"
            onClick={setBgToBlack}
          >
            TEAM
          </Link>
        </li>
        <li className={`navbar-menu ${isOpen && "show-menu"}`}>
          <Link
            to="/contact"
            className="hover-underline-animation"
            onClick={setBgToBlack}
          >
            CONTACT
          </Link>
        </li>
        <li className={`navbar-menu ${isOpen && "show-menu"}`}>
          <Link
            to="/client-reporting"
            className="hover-underline-animation"
            onClick={setBgToBlack}
          >
            CLIENT REPORTING
          </Link>
        </li>
      </ul>
      <Hamburger
        color={navBarColor ? "black" : "white"}
        toggled={isOpen}
        toggle={setOpen}
        label="Show menu"
      />
    </div>
  );
}

export default NavBar;
