import React from "react";
import { useParallax } from "react-scroll-parallax";
import backgroundImage from '../../assets/stars1.jpg'
import emailjs from "@emailjs/browser";
import { useEffect, useState, useRef } from "react";
import "./style.css";
const Contact = () => {
  const line = useParallax({
    translateX: [-30, 20],
  });

  useEffect(() => {
    emailjs.init("kcaSxckYSvzQ5b5pM");
  }, []);

  const form = useRef();

  const sendmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eww3hnc",
        "template_kc3yjmj",
        form.current,
        "kcaSxckYSvzQ5b5pM"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Your message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="col-md-12 text-center " ref={line.ref}>
        <h3 className="animate-character"> CONTACT US</h3>
      </div>
      <section className="contact" id="contact" style={{backgroundImage: `url(${backgroundImage})`}}>
        <form ref={form} onSubmit={sendmail} autoComplete="off">
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                name="name"
                required
              />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                name="email"
                required
              />
              <span className="focus"></span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input
                type="number"
                placeholder="Contact number"
                id="phoneno"
                name="phoneno"
                required
              />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                name="subject"
                required
              />
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            <span className="focus"></span>
          </div>

          <div className="btn-box btns">
            <button type="submit" name="send">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start px-8 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              >
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Send
                </span>
              </a>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
