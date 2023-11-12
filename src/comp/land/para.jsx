import React, { useState, useEffect } from 'react';
import { useParallax } from 'react-scroll-parallax';
import './style.css';
import Rocket from '../../../assets/rock.png';

const Land = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateParallaxSpeed = (width) => {
    if (width > 1200) {
      return 10;
    } else if (width > 768) {
      return 7;
    } else {
      return 5;
    }
  };

  const calculateParallaxTranslateY = (width) => {
    if (width > 1200) {
      return [70, -10];
    } else if (width > 768) {
      return [50, -5];
    } else {
      return [30, 0];
    }
  };

  const calculateParallaxTranslateX = (width) => {
    if (width > 1200) {
      return [-40, 40];
    } else if (width > 768) {
      return [-20, 20];
    } else {
      return [0, 0];
    }
  };

  const calculateParallaxRotate = (width) => {
    if (width > 1200) {
      return [-90, 100];
    } else if (width > 768) {
      return [-60, 60];
    } else {
      return [0, 0];
    }
  };

  const parallax2 = useParallax({
    speed: calculateParallaxSpeed(windowWidth),
  });

  const image_rocket = useParallax({
    translateY: calculateParallaxTranslateY(windowWidth),
    translateX: calculateParallaxTranslateX(windowWidth),
    rotate: calculateParallaxRotate(windowWidth),
  });

  return (
    <div>
      <section className='page_1'>
        <div className='upper_part'>
            <div className='logo_image'>
                Logo
            </div>
            <div className='right_text'>
                <h1>Hackathons</h1>
            </div>
        </div>
        <div>

        </div>
      </section>
      <section className='page_2'>
        <div className='head_1'>
          <div>
            <h1>Content</h1>
            <div className='con_1'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, repudiandae! Vitae corporis magni earum deserunt ea, itaque aperiam libero corrupti explicabo velit at. Distinctio magnam ipsa veritatis ipsum blanditiis neque.</p>
            </div>
          </div>
        </div>
        <div className='image_2'>
          <div ref={image_rocket.ref}>
            <img src={Rocket}  />
          </div>
        </div>
      </section>
      <div
        ref={parallax2.ref}
        style={{
          height: '100vh',
          backgroundColor: '#d0d0d0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          flexDirection: 'column',
        }}
      >
        <div style={parallax2.style}>Page 2</div>
      </div>
    </div>
  );
};

export default Land;
