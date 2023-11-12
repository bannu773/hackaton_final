import React, { useEffect, useState } from "react";
import "./timermain"; // Import your CSS file

const TimerMain = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Calculate the time difference and update the countdown
    const countdownDate = new Date("2023-12-31T00:00:00").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = countdownDate - now;
      
      setDays(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeLeft % (1000 * 60)) / 1000));
    };
    
    const timer = setInterval(updateCountdown, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="home-content2">
      <div id="clock" className="clock">
        <div>
          <p id="days" className="big-text">{days}</p>
          <span>Days</span>
        </div>
        <div>
          <p id="hours" className="big-text">{hours}</p>
          <span>Hours</span>
        </div>
        <div>
          <p id="min" className="big-text">{minutes}</p>
          <span>Min</span>
        </div>
        <div>
          <p id="sec" className="big-text">{seconds}</p>
          <span>Sec</span>
        </div>
      </div>
    </div>
  );
};

export default TimerMain;
