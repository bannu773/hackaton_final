import React from "react";
import "./style.css";
import gf from "../../assets/gfg-new-logo.png";
import img1 from "../../assets/img1.jpeg"
import ccc from "../../assets/logo-small-1-1.png";
import newleaf from "../../assets/319404445_1324961484944842_7733330898332491332_n.png";
import tcs from "../../assets/TCSiON_Badge (1).png";
import { useParallax } from "react-scroll-parallax";

function Sponsers({sponsorsRef}) {
  const head = useParallax({
    translateX: [-60, 20],
  });
  return (
    <div className="sponser" ref={sponsorsRef}>
      <div className="col-md-12 text-center" ref={head.ref}>
        <h3 className="animate-character">SPONSORS</h3>
      </div>
      <div className="sponsors-cont">
        <div className="sponsor-card bg-white ">
          <img src={gf} alt="Sponsor 1" className="sponsor-image" />
        </div>
        <div className="sponsor-card bg-white ">
          <img src={ccc} alt="Sponsor 1" className="sponsor-image" />
        </div>
        <div className="sponsor-card bg-white ">
          <img src={newleaf} alt="Sponsor 2" className="sponsor-image" />
        </div>
        <div className="sponsor-card bg-white tcs-ion">
          <img src={tcs} alt="Sponsor 3" className="sponsor-image1" />
        </div>
        <div className="sponsor-card bg-white ">
          <img src={img1} alt="Sponsor 3" className="sponsor-image" />
        </div>
      </div>
    </div>
  );
}

export default Sponsers;
