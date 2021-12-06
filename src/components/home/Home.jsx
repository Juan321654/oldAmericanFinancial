import React from "react";
import "./Home.css";
import lineBg from "../../assets/svg/line-bg.svg";
import backgroundVideo from "../../assets/YORK_Home_Banner_HR.mp4";

function Home() {
  let columnsText = (
    <div className="columns-text-container">
      <div className="div-small-container">
        <div className="div-pad">FOCUSED</div>
        <div>
          Financial Services investing is all that we do. We offer investors
          expert access to a diverse and complex sector.
        </div>
      </div>
      <div className="div-small-container">
        <div className="div-pad">GLOBAL</div>
        <div>
          We have an opportunistic approach to investing globally. We pursue the
          most attractive investments in the most attractive markets.
        </div>
      </div>
      <div className="div-small-container">
        <div className="div-pad">EXPERIENCED</div>
        <div>
          Our specialist expertise and industry focus provides us with a
          competitive advantage in valuing, re-positioning and transforming
          businesses.
        </div>
      </div>
      {/* <div className="div-small-container small-cont-colored">
        <div>
          OLD AMERICAN FINANCIAL® is a $2 + billion global investment management
          and investment company with offices in New York, London & Paris.
        </div>
      </div> */}
    </div>
  );

  return (
    <div className="home-container">
      <video autoPlay loop src={backgroundVideo} playsInline muted />

      <div className="animation-top">
        <p id="differentiated-text">
          Differentiated global expertise <br /> & Financial service specialists
        </p>
        <img src={lineBg} alt="bg-line" id="line-gb-img" />
      </div>
      <div>{columnsText}</div>
      <p style={{ textAlign: "center" }}>
        OLD AMERICAN FINANCIAL® is a $2 + billion global investment management
        and investment company with offices in New York, London & Paris.
      </p>
    </div>
  );
}

export default Home;
