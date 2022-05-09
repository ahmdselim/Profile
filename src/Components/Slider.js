import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/Ahmed.png";

const Slider = () => {
  return (
    <>
      <div className="primary-menu">
        <div className="author">
          <img src={logo} alt="" />
          <h2>
            Ahmed <strong>hassan</strong>
          </h2>
          <span>Web Developer</span>
          <div className="icons">
            <a href="https://www.linkedin.com/in/ahmdselim">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/ahmdselim">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.facebook.com/ahmdselimeg">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </div>
        <div className="info">
          <ul>
            <li>
              <FontAwesomeIcon icon={faCalendarCheck} />
              <span>April 4, 1999 </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Egypt </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCodeBranch} />
              <span>Github</span>
            </li>
          </ul>
        </div>
        <a
          className="hireMe"
          style={{ color: "#FFF", textDecoration: "none" }}
          href="mailto:ahmdhassaneg@gmail.com"
        >
          Email Me
        </a>
        <div className="icons">
          <a href="https://www.linkedin.com/in/ahmdselim">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/ahmdselim">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.facebook.com/ahmdselimeg">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Slider;
