import React from "react";
import "./BottomNav.css";
import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <div className="bottom-nav-container">
      <footer>
        <ul className="bottom-nav-links">
          <li className={``}>
            <Link to="/job-opportunities" className="hover-underline-animation">
              JOB OPPORTUNITIES
            </Link>
          </li>
          <li className={``}>
            <Link to="/terms-conditions" className="hover-underline-animation">
              TERMS & CONDITIONS
            </Link>
          </li>
          <li className={``}>
            <Link to="/privacy-policy" className="hover-underline-animation">
              PRIVACY POLICY
            </Link>
          </li>
          <li className={``}>
            <Link to="/webfraud-phishing-warning" className="hover-underline-animation">
              WEBFRAUD & PHISHING WARNING
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default BottomNav;
