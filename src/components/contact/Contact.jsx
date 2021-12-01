import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  let veseyURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1952610896096!2d-74.0170036842875!3d40.713717845446716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1ba8b95327%3A0xacc1ccbaf2cfa5f9!2s200%20Vesey%20St%2C%20New%20York%2C%20NY%2010281!5e0!3m2!1sen!2sus!4v1638320879967!5m2!1sen!2sus";
  let cavendishURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8595548999965!2d-0.14633211953139677!3d51.515792579736086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad5280a95d3%3A0x4ba1fbcf1eeb3dbe!2s33%20Cavendish%20Square%2C%20London%20W1G%200PW%2C%20UK!5e0!3m2!1sen!2sus!4v1638323188419!5m2!1sen!2sus";
  let vendomeURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5549965692812!2d2.3283401803890023!3d48.86669557938964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e31d9237125%3A0xd77d04481980bc30!2s10%20Pl.%20Vend%C3%B4me%2C%2075001%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1638323306985!5m2!1sen!2sus";
  const [activeMap, setActiveMap] = useState(veseyURL);

  const showMap = (url) => {
    return (
      <iframe
        src={url}
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        title="map"
      ></iframe>
    );
  };

  const showInfo = (city, location, country, phone, phone2, url) => {
    return (
      <div className="contact-info">
        <div className="contact-header" onClick={() => setActiveMap(url)}>
          {city}
        </div>
        <div>{location}</div>
        <div>{country}</div>
        <div>
          <a href={`tel: ${phone}`}>Tel: {phone2}</a>
        </div>
      </div>
    );
  };

  return (
    <div className="contact-main-container animation-fadeIn">
      <div className="contact-container">
        <div className="contact-location-container">
          {showInfo(
            "New York",
            "200 Vesey St",
            "New York, NY",
            "+12127725932",
            "+1.212.772.5932",
            veseyURL
          )}
          {showInfo(
            "Paris",
            "10 Place Vendôme 75001",
            "Paris, France",
            "+33185149309",
            "+33.1.85.14.93.09",
            vendomeURL
          )}
          {showInfo(
            "London",
            "33 Cavendish Square, W1G 9PQ",
            "London, U.K.",
            "+442038850929",
            "+44.20.3885.0929",
            cavendishURL
          )}
        </div>
        {showMap(activeMap)}
      </div>
      <div className="contact-long-text">
        Old American Financial is here to provide you with more information,
        answer any questions you may have and create an effective solution for
        your financial needs. EU Investors – Request for Information We hereby
        request that Old American Financial, L.P. and/or its affiliates (“Old
        American”) provide us with information about the private investment
        funds managed by it (the “Funds”). We understand that, as a result of
        this request, we will be contacted by Old American Financial and
        provided with certain documents and information concerning the Funds,
        including, without limitation, access to Old American Financial website
        and inclusion on applicable email distribution lists. We confirm that we
        have not been solicited, required or advised to make this request by Old
        American. We acknowledge that Old American is not required to comply
        with the requirements of the Alternative Investment Fund Manager
        Directive (Directive 2011/61/EU), and will not be providing the specific
        information mandated by the Directive to existing or prospective
        investors.
      </div>
    </div>
  );
}

export default Contact;
