import React from "react";
import "../styles/about.css";
import hero from "../assets/img/about.jpg";

const About = () => {
  return (
    <div id="about">
      <div id="about-gradient">
        <div id="about-details">
          <h1 id="about-title">ABOUT US</h1>
          <p>
            Hello and Welcome. Thanks for taking the time to get to know us. The
            quintessential cricketing advice “Keep it Simple” is the core belief
            at Cricketer Shop. We have been online Since October 2022.
            Cricketer Shop has remained the leading online cricket shop and
            first choice of cricketers the world over. Thanks a lot for your
            support.
          </p>
        </div>
      </div>
      <img id="about-hero" src={hero} alt="hero" />
    </div>
  );
};

export default About;
