import React from "react";
import "./BottomNav.css";
import { Link } from "react-router-dom";
import whitelogo from "../../assets/images/white-logo.png";

function BottomNav({ setForceReload }) {
  const changeLogoColor = () => {
    setForceReload((prev) => prev + 1);
    localStorage.setItem("navBarColor", true);
  };
  const changeLogoColorLight = () => {
    setForceReload((prev) => prev + 1);
    localStorage.setItem("navBarColor", false);
  };

  let time = new Date().getFullYear();

  return (
    <div className="bottom-nav-container">
      <div className="bottom-nav-logo-container">
        <img
          id="bottom-nav-logo"
          src={whitelogo}
          alt="old american Logo"
          onClick={() => {
            window.location.pathname = "/";
          }}
        />
      </div>
      <div>
        <ul className="bottom-main-links">
          <li className={``}>
            <Link to="/" onClick={changeLogoColorLight}>Home</Link>
          </li>
          <li className={``}>
            <Link to="/our-people" onClick={changeLogoColor}>Our people</Link>
          </li>
          <li className={``}>
            <Link to="/team" onClick={changeLogoColor}>Team</Link>
          </li>
          <li className={``}>
            <Link to="/contact" onClick={changeLogoColor}>Contact</Link>
          </li>
          <li className={``}>
            <Link to="/client-reporting" onClick={changeLogoColor}>Client reporting</Link>
          </li>
        </ul>
      </div>
      <footer>
        <div className="copyright">
          Copyright &#169; {time} Old American Financial. All rights reserved.
        </div>

        <ul className="bottom-nav-links">
          <li className={``}>
            <Link to="/job-opportunities" onClick={changeLogoColor}>
              Job Opportunities | &nbsp;
            </Link>
          </li>
          <li className={``}>
            <Link to="/terms-conditions" onClick={changeLogoColor}>
              Terms & Conditions | &nbsp;
            </Link>
          </li>
          <li className={``}>
            <Link to="/privacy-policy" onClick={changeLogoColor}>
              Privacy Policy | &nbsp;
            </Link>
          </li>
          <li className={``}>
            <Link to="/webfraud-phishing-warning" onClick={changeLogoColor}>
              Webfraud & Phishing Warning
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default BottomNav;
