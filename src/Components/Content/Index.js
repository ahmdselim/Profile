/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
import AboutMe from "./AboutMe";
import MyExperience from "./MyExperience";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Footer from "./Footer";
import "./style.css";

const Index = () => {
  const [clicked, setClicked] = useState(false);

  const handleGo = (section) => {
    window.location.replace(`/#${section.target.firstChild.data}`);
    // console.log(section.target.firstChild.data);
  };

  return (
    <div className="content">
      <FontAwesomeIcon
        onClick={() => setClicked(!clicked)}
        icon={faBars}
        className="barsIcon"
        style={
          clicked
            ? { borderRadius: "0px 20px 20px 0px", display: "none" }
            : { borderRadius: "20px" }
        }
      />
      <FontAwesomeIcon
        icon={faTimes}
        onClick={() => setClicked(!clicked)}
        className="barsIcon"
        style={
          clicked ? { borderRadius: "0px 20px 20px 0px" } : { display: "none" }
        }
      />
      <div className={clicked ? "menu clicked" : "menu"}>
        <a onClick={(section) => handleGo(section)}>About Me</a>
        <a onClick={(section) => handleGo(section)}>Service</a>
        <a onClick={(section) => handleGo(section)}>Portfolio</a>
        <a onClick={(section) => handleGo(section)}>Resume</a>
      </div>
      <Home />
      <AboutMe />
      <MyExperience />
      <Portfolio />
      <Resume />
      <Footer />
    </div>
  );
};

export default Index;
