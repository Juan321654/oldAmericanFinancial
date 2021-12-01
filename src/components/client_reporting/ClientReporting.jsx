import React from "react";
import "./ClientReporting.css";
import buildingImg from "../../assets/images/building-bottom-view.jpg";

function ClientReporting() {
  return (
    <div className="client-container">
      <article>
        <div>
          <h1>Private Equity Funds LP Reporting</h1>
          <h2>Reporting For:</h2>
          <p>Old American Financial Global Opportunities Partners</p>
          <p>Old American Financial Global Opportunities Partners II</p>
          <p>Old American Financial Global Opportunities Partners III</p>
          <p>OAF II Preferred Partners</p>
          <p>OAF III Credit Fund Partners</p>
          <p>OAF II Asset Backed Fund</p>
        </div>
        <div>
          <h1>Hedge Funds LP Reporting</h1>
          <h2>Reporting For:</h2>
          <p>Old American Financial Global Opportunities Fund**</p>
          <p>** As of February 1, 2018 GlobeOp replaced Citco as the</p>
          <p>new administrator for Old American Financial Global</p>
          <p>Opportunities and now provides administration services</p>
          <p>
            for all Old American Financial.{" "}
            <a
              href="https://citcoone.citco.com/"
              target="_blank"
              rel="noreferrer"
            >
              Citco
            </a>
          </p>
        </div>
      </article>
      <img src={buildingImg} alt="building view from bottom" />
    </div>
  );
}

export default ClientReporting;
