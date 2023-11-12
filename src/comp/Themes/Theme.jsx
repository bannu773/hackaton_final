import React from "react";
import "./style.css";
import { useParallax } from "react-scroll-parallax";
import one from "../../assets/theme1_final.png";
import two from "../../assets/theme2_final.png";
import three from "../../assets/theme3_final.png";
import four from "../../assets/theme4_final.png";
import five from "../../assets/theme5_final.png";
import six from "../../assets/theme6_fianl.png";

function Theme({themesRef}) {
  const head = useParallax({
    translateX: [-60, 20],
  });

  return (
    <div className="full overflow-hidden" ref={themesRef}>
      <div className="col-md-12 text-center" ref={head.ref}>
        <h3 className="animate-character">OUR THEMES</h3>
      </div>

      <div className="half ">
        <div className="card-container">
          <div className="sub">
            <img src={one} alt="Theme 2" />
            <div className="para">
              <p>DIGITAL EMPOWERMENT FOR RURAL COMMUNITIES</p>
            </div>
          </div>
          <div className="sub">
            <img src={two} alt="Theme 3" />
            <div className="para">
              <p>URBAN MOBILITY AND TRAFFIC MANAGEMENT</p>
            </div>
          </div>
          <div className="sub">
            <img src={three} alt="Theme 2" />
            <div className="para">
              <p>AGRICULTURE AND FOOD TECHNOLOGY</p>
            </div>
          </div>
          <div className="grad4 "></div>
        </div>
        <div className="card-container">
          <div className="sub">
            <img src={four} alt="Theme 5" />
            <div className="para">
              <p>HERITAGE AND CULTURE</p>
            </div>
          </div>
          <div className="sub">
            <img src={five} alt="Theme 6" />
            <div className="para">
              <p>WASTE MANAGEMENT AND RECYCLING </p>
            </div>
          </div>
          <div className="sub ">
            <img src={six} alt="Theme 7" />
            <div className="para">
              <p>RENEWABLE/SUSTAINABLE ENERGY SOLUTIONS </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
