import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import Box from "@mui/material/Box";
import logo from '../../assets/logo-removebg-preview.png';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./style.css";

function Footer_part({scrollToSection}) {
  const iconStyle = {
    fontSize: "20px",
    cursor: "pointer",
  };
  const pages = [
    "Home",
    "About",
    "Themes",
    "Timeline",
    
  ];
  const pages1 = [
    "Chief_Guests",
    "Sponsors",
    "FAQS",
    "Team",
  ]

  const handleMenuItemClick = (page) => {
   
    scrollToSection(page.toLowerCase());
    console.log(page);
  };


  return (
    <div className="footer gap-9">
    <div className="footer_1">
      <div className="sect">
        <p>Organised by</p>
        <img src={logo} alt="Logo" />
        <p>Address : K.Kotturu, Tekkali, Srikakulam</p>
      </div>
      <div  style={{display:"flex", flexDirection:"column",gap:"30px", justifyContent:"space-between"}}>
        <div><h1 className="text-center">Quick Links</h1></div>
        <div className="foot1 ">
          <div className="text-left align-baseline " style={{flexDirection:"column"}}>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "flex" }, flexDirection:"column" }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handleMenuItemClick(page)} // Call handleMenuItemClick with the page name
                    sx={{ color: "white", textTransform: "capitalize" ,fontWeight:"1000"}}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
          </div>
          <div>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "flex" }, flexDirection:"column" }}>
                {pages1.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handleMenuItemClick(page)} // Call handleMenuItemClick with the page name
                    sx={{ color: "white", textTransform: "capitalize" ,fontWeight:"1000"}}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
          </div>
        </div>
      </div>
      <div className="section">
        <p>FOLLOW US</p>
        <div className="sec">
          <i style={iconStyle}>
            <BsFacebook />
          </i>
          <i style={iconStyle}>
            <AiFillLinkedin />
          </i>
          <i style={iconStyle}>
            <RiInstagramFill />
          </i>
          <i style={iconStyle}>
            <BsTwitter />
          </i>
        </div>
      </div>
    </div>
    <div className="footer_2">
      <p>© AVISHKAAR 2023 | ALL RIGHTS RESERVED</p>
      <p>Developed and designed by SAC</p>
    </div>
  </div>
  );
}

export default Footer_part;