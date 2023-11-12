import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faFilePdf,
  faFileLines,
  faFileWord,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import './style.css'


const Sidebar = () => {
  return (
    <>
      <div className="nav-bar ">
        {/* <Link className="logo" to="/">
          <img src={} alt="Logo" />
        </Link> */}
        <nav>
          <NavLink exact="true" activeclassname="active" to="/resume">
            <FontAwesomeIcon icon={faFileLines} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faFilePdf} color="#4d4d4e"/>
            
          </NavLink>

          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faFileWord} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
         
        </nav>
        {/* <ul>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={codechefLogo} width="24" alt="Codechef" />
            </a>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default Sidebar;
