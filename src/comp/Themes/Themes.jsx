import { Card } from "@mui/material";
import React from "react";
import Card1 from "../Utility/Card1";
import Card2 from "../Utility/Card1";

import { useParallax } from "react-scroll-parallax";
import Game from "../../assets/svg/gamesvg.svg";
import Brain from "../../assets/svg/brainsvg.svg";
import Mobile from "../../assets/svg/mobilesvg.svg";
// import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import Theme4 from "./../../assets/themes_new_6.png";
import Theme2 from "./../../assets/themes_new_4.png";
import Theme3 from "./../../assets/themes_new_3.png";
import Theme1 from "./../../assets/themes_new_5.png";
import Theme5 from "./../../assets/themes_new_2.png";
import Theme6 from "./../../assets/themes_new_1.png";

import "./../Utility/card.css";

const Themes = ({ themesRef }) => {
  const head = useParallax({
    translateX: [-60, 20],
  });
  return (
    <div className="Main_card">
      <div className="col-md-12 text-center " ref={head.ref}>
        <h3 className="animate-character">THEMES</h3>
      </div>
      {/* add in below div as container */}
      <div
        className="flex flex-row flex-wrap  gap-14 pt-9 pb-14 justify-between fl themes_container"
        ref={themesRef}
      >
        <div>
          <Card1
            Images={Theme1}
            text={"DIGITAL EMPOWERMENT FOR RURAL COMMUNITIES"}
            content={
              "Avishkaar invites participants to channel their innovation toward transforming the lives of underserved rural populations. This theme is an invitation to craft technology-driven solutions that bridge the digital divide, offering improved access to education, healthcare, agricultural insights, financial services, and digital literacy in rural Communities. "
            }
            prize={"5K"}
          />
        </div>
        <div>
          <Card1
            Images={Theme2}
            text={"URBAN MOBILITY AND TRAFFIC MANAGEMENT"}
            content={
              "Avishkaar challenges participants to innovate urban living, addressing transportation challenges. This theme inspires solutions for traffic congestion, improved public transit, smart urban mobility, and sustainable travel. Participants contribute to creating accessible, efficient, and environmentally friendly cities, prioritizing quality urban life."
            }
            prize={"1K"}
          />
        </div>
        <div>
          <Card1
            Images={Theme3}
            text={"AGRICULTURE AND FOOD TECHNOLOGY"}
            content={
              "Avishkaar calls for a revolution in agriculture, urging tech-driven solutions for farming challenges. Participants innovate in crop management, supply chain efficiency, and food distribution, contributing to food security, reduced wastage, increased productivity, and sustainable practices. This is vital for nourishing our nation and safeguarding the environment, fostering resilience and sustainability in food systems"
            }
            prize={"2K"}
          />
        </div>
        <div>
          <Card2
            Images={Theme4}
            text={"HERITAGE AND CULTURE"}
            content={
              "Avishkaar summons participants to safeguard, celebrate, and rejuvenate India's rich heritage and diverse traditions. This theme inspires tech-driven solutions for preserving historical sites, promoting cultural education, enhancing exchange, and bridging generational gaps. Participants, by embracing this theme, contribute to preserving our identity, fostering cross-cultural appreciation, and ensuring the legacy of our heritage thrives in the modern world."
            }
            prize={"4K"}
          />
        </div>
        <div>
          <Card1
            Images={Theme5}
            text={"WASTE MANAGEMENT AND RECYCLING"}
            content={
              "Avishkaar empowers participants to envision waste as a resource, fostering sustainable solutions for environmental challenges. This theme inspires tech-driven approaches in waste collection, separation, recycling, and disposal. Engaging in this theme, participants contribute to reducing pollution, conserving resources, promoting circular economies, and fostering a cleaner, healthier environment for present and future generations"
            }
            prize={"3K"}
          />
        </div>
        <div>
          <Card1
            Images={Theme6}
            text={"RENEWABLE/SUSTAINABLE ENERGY SOLUTIONS"}
            content={
              "This theme fosters the development of technology-driven approaches leveraging renewable sources like solar, wind, hydro, and bioenergy to tackle energy challenges. Participation in this theme contributes to reducing carbon emissions, promoting energy efficiency, and creating a sustainable energy ecosystem. Individuals align with our nation's commitment to a more environmentally conscious and energy-independent future."
            }
            prize={"6K"}
          />
        </div>
      </div>
    </div>
  );
};

export default Themes;
