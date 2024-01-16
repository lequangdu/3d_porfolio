import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Quang Du</span>
      <br />A Frontend Engineer from Ho Chi Minh City, Vietnam
    </h1>
  ),
  2: (
    <InfoBox
      text="I am working with React, NextJS, ..."
      link="/about"
      btnText="Explore more"
    />
  ),
  3: (
    <InfoBox
      text="Let me show you some of my projects"
      link="/projects"
      btnText="Visit projects"
    />
  ),
  4: (
    <InfoBox
      text="Contact with me if you want to work together"
      link="/contact"
      btnText="Contact me"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
