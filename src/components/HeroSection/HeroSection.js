import React from "react";
import "../../App.css";
import Cards from "../Card/Cards";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="https://static.videezy.com/system/resources/previews/000/037/604/original/18_008_02.mp4"
        autoPlay
        loop
        muted
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <img className="logo" src="./images/Artwork.png" />
      <h2 className="maintitle">
        The special forces of the cryptographic market
      </h2>
      <div className="hero-btns">
        <Cards />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default HeroSection;
