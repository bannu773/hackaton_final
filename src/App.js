import React, { useRef, useState } from "react";
import Land from "./comp/land/Land";
import "./App.css";
import Sidebar from "./comp/Sidebar";
import UpBar from "./comp/Upbar";
import { Timeline } from "@mui/icons-material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import TimeLine from "./comp/timeline/Timeline";
import Timer from "./comp/timer/timermain";
import Prize_card from "./comp/Prize_card";
import NFTCardComponent from "./comp/Prize_card";

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const homeref = useRef(null);
  const aboutRef = useRef(null);
  const themesRef = useRef(null);
  const timelineRef = useRef(null);
  const chiefguestsRef = useRef(null);
  const sponsorsRef = useRef(null);
  const faqsRef = useRef(null);
  const teamRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "home":
        if (homeref.current) {
          homeref.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "about":
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "themes":
        if (themesRef.current) {
          themesRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "timeline":
        if (timelineRef.current) {
          timelineRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "chief_guests":
        if (chiefguestsRef.current) {
          chiefguestsRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "sponsors":
        if (sponsorsRef.current) {
          sponsorsRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "faqs":
        if (faqsRef.current) {
          faqsRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "team":
        if (teamRef.current) {
          teamRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-black total_cont">
      <UpBar scrollToSection={scrollToSection} />
      <Land
        homeref={homeref}
        aboutRef={aboutRef}
        themesRef={themesRef}
        timelineRef={timelineRef}
        chiefguestsRef={chiefguestsRef}
        sponsorsRef={sponsorsRef}
        faqsRef={faqsRef}
        teamRef={teamRef}
        scrollToSection={scrollToSection}
      />
      {/* <NFTCardComponent /> */}
    </div>
  );
};

export default App;
