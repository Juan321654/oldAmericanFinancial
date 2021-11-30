import React from "react";
import "./Home.css";

function Home() {
  let backgroundImageUrl = `https://www.oldamericanfinancial.com/wp-content/themes/hestia-child/images/home_experience.jpg`;
  let longText = `OLD AMERICAN FINANCIAL® is a $2 + billion global investment management and investment company with offices in New York, London & Paris.`;
  let financialServiceImg = `https://www.oldamericanfinancial.com/wp-content/uploads/2021/11/Screenshot-2021-11-04-123433-600x420.png`;
  let insightImg = `https://www.oldamericanfinancial.com/wp-content/themes/hestia-child/./images/home_insight.jpg`;

  const headerContainer = (
    <>
      <img
        className="financial-img"
        src={financialServiceImg}
        alt="Financial Service"
      />
      <img className="financial-img" src={insightImg} alt="people" />
      <div className="rigorous-container">
        <p>RIGOROUS INVESTMENT PROCESS</p>
      </div>
    </>
  );

  const footerColumnsText = (
    <div className="footer-columns-text-container">
      <div>
        <h3>FOCUSED</h3>
        <p>
          Financial Services investing is all that we do. We offer investors
          expert access to a diverse and complex sector.
        </p>
      </div>
      <div>
        <h3>GLOBAL</h3>
        <p>
          We have an opportunistic approach to investing globally. We pursue the
          most attractive investments in the most attractive markets.
        </p>
      </div>
      <div>
        <h3>EXPERIENCED</h3>
        <p>
          Our specialist expertise and industry focus provides us with a
          competitive advantage in valuing, re-positioning and transforming
          businesses.
        </p>
      </div>
    </div>
  );

  return (
    <div className="home-container">
      <div className="financial-container">{headerContainer}</div>
      <p className="home-long-text">{longText}</p>
      <div className="expertise">
        <img
          className="expertise-img"
          src={backgroundImageUrl}
          alt="Old American expertise"
        />
        <p>DIFFERENTIATED GLOBAL EXPERTISE</p>
      </div>
      {footerColumnsText}
    </div>
  );
}

export default Home;
