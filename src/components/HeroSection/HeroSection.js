import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";
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

      <h1>Algo Force</h1>
      <img className="logo" src="./images/Artwork.png" />

      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
