import React, { Component } from 'react';
import './style.css'
class Countdown extends Component {
  constructor() {
    super();
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  countDown() {
    let futureDate = new Date('21 Mar 2024');
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor((myDate / 1000 / 60 / 60) % 24);
    let min = Math.floor((myDate / 1000 / 60) % 60);
    let sec = Math.floor((myDate / 1000) % 60);

    this.setState({
      days,
      hours,
      min,
      sec,
    });
  }

  componentDidMount() {
    this.countDown();
    setInterval(() => this.countDown(), 1000);
  }

  render() {
    return (
      <div className="clock">
        <div>
          <p className="big-text">{this.state.days}</p>
          <span>Days</span>
        </div>
        <div>
          <p className="big-text">{this.state.hours}</p>
          <span>Hours</span>
        </div>
        <div>
          <p className="big-text">{this.state.min}</p>
          <span>Min</span>
        </div>
        <div>
          <p className="big-text">{this.state.sec}</p>
          <span>Sec</span>
        </div>
      </div>
    );
  }
}

export default Countdown;
