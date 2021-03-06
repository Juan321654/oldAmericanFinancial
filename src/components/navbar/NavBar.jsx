import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import whitelogo from "../../assets/images/white-logo.png";
import { Sling as Hamburger } from "hamburger-react";

function NavBar({ forceReload }) {
  const [navBarColor, setNavBarColor] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const setBgToWhite = () => {
    setNavBarColor(false);
    localStorage.setItem("navBarColor", false);
    setOpen(false);
  };

  const setBgToBlack = () => {
    setNavBarColor(true);
    localStorage.setItem("navBarColor", true);
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/") localStorage.setItem("navBarColor", false);
    const navBarColor = localStorage.getItem("navBarColor");
    if (navBarColor === "true") {
      setNavBarColor(true);
    } else {
      setNavBarColor(false);
    }
  }, []);

  useEffect(() => {
    if (forceReload) {
      const navBarColor = localStorage.getItem("navBarColor");
      if (navBarColor === "true") {
        setNavBarColor(true);
      } else {
        setNavBarColor(false);
      }
    }
  }, [forceReload]);

  return (
    <div className={`navbar padding ${navBarColor && "navbar-white"}`}>
      <div className="logo-container">
        <img
          id="main-logo-img"
          src={navBarColor ? logo : whitelogo}
          alt="old american Logo"
          onClick={() => {
            window.location.pathname = "/";
            setBgToWhite();
          }}
        />
      </div>
      <ul
        className={`${isOpen && "small-screen-menu"} ${
          navBarColor && "small-screen-dark"
        }`}
      >
        <li
          className={`navbar-menu delay-1 small-pad ${isOpen && "show-menu"}`}
        >
          <Link
            to="/"
            className={`hover-underline-animation ${
              navBarColor && isOpen === false && "underline-dark"
            }`}
            onClick={setBgToWhite}
          >
            Home
          </Link>
        </li>
        <li className={`navbar-menu delay-2 ${isOpen && "show-menu"}`}>
          <Link
            to="/our-people"
            className={`hover-underline-animation ${
              navBarColor && isOpen === false && "underline-dark"
            }`}
            onClick={setBgToBlack}
          >
            Our people
          </Link>
        </li>
        <li className={`navbar-menu delay-3 ${isOpen && "show-menu"}`}>
          <Link
            to="/team"
            className={`hover-underline-animation ${
              navBarColor && isOpen === false && "underline-dark"
            }`}
            onClick={setBgToBlack}
          >
            Team
          </Link>
        </li>
        <li className={`navbar-menu delay-4 ${isOpen && "show-menu"}`}>
          <Link
            to="/contact"
            className={`hover-underline-animation ${
              navBarColor && isOpen === false && "underline-dark"
            }`}
            onClick={setBgToBlack}
          >
            Contact
          </Link>
        </li>
        <li className={`navbar-menu delay-5 ${isOpen && "show-menu"}`}>
          <Link
            to="/client-reporting"
            className={`hover-underline-animation ${
              navBarColor && isOpen === false && "underline-dark"
            }`}
            onClick={setBgToBlack}
          >
            Client reporting
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
