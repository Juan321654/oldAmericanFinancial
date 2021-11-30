import React from "react";
import "./OurPeople.css";

function OurPeople() {
  let fullText = `Our people are our greatest asset, so we strive to attract and retain the best talent by providing a meritocratic environment where every employee can achieve his or her highest potential. We foster a culture of collaboration, continuous learning and professional development. Open communication, constructive feedback and mutual respect are integral to our success.

  We work in a cooperative team environment across all functional areas and geographies, where the centrally managed investment team collaborates closely with the operations staff.
  
  As a key component of our commitment to excellence, we invest in our people by providing them the tools they need to succeed and the opportunity to grow and develop their careers. We focus on providing relevant, ongoing training for our employees, including management training and development for our leaders.
  
  In order to promote relationship building, we often hold firm-sponsored events, such as summer outings, and bring the entire firm together for a “Research Week” in New York at least once per year.`;

  return (
    <div>
      <div className="our-people-container">
        <div className="our-people-text">
          <h1>Our People</h1>
          <p>{fullText}</p>
        </div>
      </div>
    </div>
  );
}

export default OurPeople;
