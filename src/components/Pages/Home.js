import React from "react";
import "../../App.css";
import "./Home.css";

import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <div className="home_coint">
        <div className="home_item1">
          <HeroSection />
        </div>
        <div className="home_item2">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
