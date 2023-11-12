  import React from "react";
import "./style.css";
import { useParallax } from "react-scroll-parallax";
import gf from "../../assets/g.png";
import First from '../../assets/first.png'
import Sec from '../../assets/second.png'
import Third from '../../assets/third.png'


// import tokenImage from './tokenImage.jpg';
// import creatorImage from './creatorImage.jpg';

const NFTCardComponent = () => {
  const head = useParallax({
    translateX: [-60, 20],
  });
  return (
    <div className="prize_main">
      <div className="main_ntf pb-10 prize_grad">
        <div className="col-md-12 text-center pb-10" ref={head.ref}>
          <h3 className="animate-character1">PRIZE CARDS</h3>
        </div>
        <div className="sub_ntf">
          <div className="nft">
            <div className="main">
              {/* <img className="tokenImage" src={tokenImage} alt="NFT" /> */}
              {/* <h2>Kibertopiks #4269</h2> */}
              <img src={First} />
              <p className="text-white text-13xl  flex justify-center" >
                  PRIZE
              </p>
              <div className="tokenInfo flex justify-center">
                <div className="price flex justify-center">
                  <p>1,00,000</p>
                </div>
                
              </div>
              <hr />
              <div className="creator">
                <div className="wrapper">
                  {/* <img src={creatorImage} alt="Creator" /> */}
                </div>
                
              </div>
            </div>
          </div>
          <div className="nft">
            <div className="main">
              {/* <img className="tokenImage" src={tokenImage} alt="NFT" /> */}
              {/* <h2>Kibertopiks #4269</h2> */}
              <img src={Sec} />
              <p className="text-white text-13xl  flex justify-center" >
                  PRIZE
              </p>
              <div className="tokenInfo flex justify-center">
                <div className="price flex justify-center">
                  <p>1,00,000</p>
                </div>
                
              </div>
              <hr />
              <div className="creator">
                <div className="wrapper">
                  {/* <img src={creatorImage} alt="Creator" /> */}
                </div>
                
              </div>
            </div>
          </div>
          <div className="nft">
            <div className="main">
              {/* <img className="tokenImage" src={tokenImage} alt="NFT" /> */}
              {/* <h2>Kibertopiks #4269</h2> */}
              <img src={Third} />
              <p className="text-white text-13xl  flex justify-center" >
                  PRIZE
              </p>
              <div className="tokenInfo flex justify-center">
                <div className="price flex justify-center">
                  <p>1,00,000</p>
                </div>
                
              </div>
              <hr />
              <div className="creator">
                <div className="wrapper">
                  {/* <img src={creatorImage} alt="Creator" /> */}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCardComponent;
