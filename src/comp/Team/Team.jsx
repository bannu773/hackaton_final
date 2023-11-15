import React from "react";
import "./style.css";
import gf from "../../assets/g.png";
import ccc from "../../assets/logo-small-1-1.png";
import newleaf from "../../assets/319404445_1324961484944842_7733330898332491332_n.png";
import tcs from "../../assets/TCSiON_Badge (1).png";
import poshya from "../../assets/poshya.jpeg";
import bannu from '../../assets/bannu.jpeg';
import kishan from '../../assets/team4.jpeg';
import harichandhana from '../../assets/team1.jpeg'
import kibho from '../../assets/team2.jpeg'
import Jhansi from '../../assets/Jhansi.jpeg'
import { useParallax } from "react-scroll-parallax";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Team({teamRef}) {
  const head = useParallax({
    translateX: [-60, 20],
  });
  return (
    <div className="team" ref={teamRef}>
      <div className="col-md-12 text-center" ref={head.ref}>
        <h3 className="animate-character">TEAM</h3>
      </div>
      <div className="team-cont">
        <div className="team-card bg-white  ">
          <img src={harichandhana} alt="team 1" className="team-image" />
          <p className="font-bold card_name"> REDDI HARI CHANDANA</p>
          <p className="card_subname">Student Convenor</p>
          <p> <LocalPhoneIcon fontSize="7" className="mr-2" />9398455257</p>
        </div>
        <div className="team-card bg-white ">
          <img src={kibho} alt="team 1" className="team-image" />
          <p className="font-bold card_name">SAI TARUN MISHRA</p>
          <p className="card_subname">Student Co-Convenor</p>
          <p><LocalPhoneIcon fontSize="7" className="mr-2" />7306483128</p>
        </div>
        <div className="team-card bg-white ">
          <img src={Jhansi} alt="team 2" className="team-image" />
          <p className="font-bold card_name">VARANASI JHANSI</p>
          <p className="card_subname">Travel And Accomodation</p>
          <p><LocalPhoneIcon fontSize="7" className="mr-2" />9392956225</p>
        </div>
        <div className="team-card bg-white tcs-ion">
          <img src={kishan} alt="team 3" className="team-image1" />
          <p className="font-bold card_name">KANDAVALLI KISHAN BABU</p>
          <p className="card_subname text-gray-700">Travel And Accomodation</p>
          <p><LocalPhoneIcon fontSize="7" className="mr-2" />7013294063</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
