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
import Theme7 from "./../../assets/themes_travel.png";
import Theme8 from "./../../assets/theme_innovation.png"

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
              "Aaviskhar extends an invitation to participants to channel innovation toward transforming the lives of the rural population. This theme encourages the creation of technology-driven solutions that improve access to education, healthcare, agriculture, financial services and digital literacy."
            }
            prize={"5K"}
          />
        </div>
        <div>
          <Card1
            Images={Theme2}
            text={"URBAN MOBILITY AND TRAFFIC MANAGEMENT"}
            content={
              "Avishkaar prompts innovation in urban living, emphasizing transportation solutions for traffic congestion, improved public transit, and sustainable travel. Participants strive to create accessible, efficient, and environmentally friendly cities, prioritizing quality urban life."
            }
            prize={"1K"}
          />
        </div>
        <div>
          <Card1
            Images={Theme3}
            text={"AGRICULTURE AND FOOD TECHNOLOGY"}
            content={
              "Aaviskhar urges a tech revolution in agriculture, prompting innovation in crop management, supply chain efficiency, and food distribution. The goal is to boost food security, minimize wastage, enhance productivity, and advocate for sustainable practices."
            }
            prize={"2K"}
          />
        </div>
        <div>
          <Card2
            Images={Theme4}
            text={"Medical and Health"}
            content={
              "Aavishkar calls forth transformative solutions to healthcare challenges. This theme focuses on tech-driven solutions for patient data security and privacy, telemedicine accessibility and equity, chronic disease management, rapid prototyping, and medical education."
            }
            prize={"4K"}
          />
        </div>
        <div>
          <Card1
            Images={Theme5}
            text={"WASTE MANAGEMENT AND RECYCLING"}
            content={
              "Avishkaar empowers participants to envision waste as a resource and inspires tech-driven approaches in waste collection, separation, recycling, and disposal. Participants in this theme contribute to a cleaner, healthier environment by reducing pollution, conserving resources, and promoting circular economies."
            }
            prize={"3K"}
          />
        </div>
        <div>
          <Card1
            Images={Theme6}
            text={"RENEWABLE/SUSTAINABLE ENERGY SOLUTIONS"}
            content={
              "This theme fosters the development of technology-driven approaches to reduce carbon emissions, promote energy efficiency, and create a sustainable energy ecosystem by leveraging renewable sources like solar, wind, hydro, and bioenergy to tackle energy challenges."
            }
            prize={"6K"}
          />

        </div>
        <div>
          <Card1
            Images ={Theme7}
            text={"Tourism and Travel"}
            content={
              "Aavishkar summons participants to dive into smart destination management, Sustainable Practices, and Immense health focus innovations. This theme mainly focuses on digital nomad solutions in travel and tourism."
            }
           />
        </div>
        <div>
          <Card1 
          Images={Theme8}
          text={"Student Innovation  "}
          content={
            "Aavishkar embraces Technical enthusiasts with creative minds. This theme pays attention to solving real-world problems using advanced technology. It will showcase the student problem-solving skills & technical prowess in diverse domains."
            }/>
          
          
        </div>
      </div>
    </div>
  );
};

export default Themes;
