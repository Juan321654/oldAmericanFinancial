import React from "react";
import "./Home.css";
import lineBg from "../../assets/svg/line-bg.svg";

function Home() {
  let columnsText = (
    <div className="columns-text-container">
      <div>
        <div>FOCUSED</div>
        <div>
          Financial Services investing is all that we do. We offer investors
          expert access to a diverse and complex sector.
        </div>
      </div>
      <div>
        <div>GLOBAL</div>
        <div>
          We have an opportunistic approach to investing globally. We pursue the
          most attractive investments in the most attractive markets.
        </div>
      </div>
      <div>
        <div>EXPERIENCED</div>
        <div>
          Our specialist expertise and industry focus provides us with a
          competitive advantage in valuing, re-positioning and transforming
          businesses.
        </div>
      </div>
    </div>
  );

  return (
    <div className="home-container">
      <div>
        <p>Differentiated global expertise</p>
        <img src={lineBg} alt="bg-line" id="line-gb-img"/>
      </div>
      <div>{columnsText}</div>
      <p>
        OLD AMERICAN FINANCIAL® is a $2 + billion global investment management
        and investment company with offices in New York, London & Paris.
      </p>
    </div>
  );
}

export default Home;
