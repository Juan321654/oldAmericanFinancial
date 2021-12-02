import React from "react";
import "./BottomNav.css";
import { Link } from "react-router-dom";

function BottomNav({ setForceReload }) {
  const changeLogoColor = () => {
    setForceReload((prev) => prev + 1);
    localStorage.setItem("navBarColor", true);
  };

  return (
    <div className="bottom-nav-container">
      <footer>
        <ul className="bottom-nav-links">
          <li className={``}>
            <Link
              to="/job-opportunities"
              className="hover-underline-animation"
              onClick={changeLogoColor}
            >
              JOB OPPORTUNITIES
            </Link>
          </li>
          <li className={``}>
            <Link
              to="/terms-conditions"
              className="hover-underline-animation"
              onClick={changeLogoColor}
            >
              TERMS & CONDITIONS
            </Link>
          </li>
          <li className={``}>
            <Link
              to="/privacy-policy"
              className="hover-underline-animation"
              onClick={changeLogoColor}
            >
              PRIVACY POLICY
            </Link>
          </li>
          <li className={``}>
            <Link
              to="/webfraud-phishing-warning"
              className="hover-underline-animation"
              onClick={changeLogoColor}
            >
              WEBFRAUD & PHISHING WARNING
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default BottomNav;
