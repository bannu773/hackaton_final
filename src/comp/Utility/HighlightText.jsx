import React from "react";
import "./highlight.css";

const HighlightText = ({ text }) => {
  return (
    <span className="highlight-text">{text}</span>
  );
};

export default HighlightText;