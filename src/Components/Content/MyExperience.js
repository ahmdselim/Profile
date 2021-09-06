import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

const MyExperience = () => {
  return (
    <section id="Service" className="myExperience">
      <h1>services</h1>
      <h2>What I Do?</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faCode} />
          <div className="textInfo">
            <h3>Web Development</h3>
            <p>
              A passionate Front-End Developer, I have worked on many projects
              using effective and various technologies and standards such as
              (React.js, Angular.js, Vanilla Javascript, HTML, CSS, jQuery,
              Bootstrap, and Sass) to guarantee a quality product. Currently,
              I&apos;m diving deeper into Front-End skills and general
              knowledge.
            </p>
          </div>
        </li>
        <li>
          <FontAwesomeIcon icon={faDesktop} />
          <div className="textInfo">
            <h3>Responsive design</h3>
            <p>
              In 2021 It&apos;s a must for all web sites to be responsive by
              using media queries and more.
            </p>
          </div>
        </li>
        <li>
          <FontAwesomeIcon icon={faPencilRuler} />
          <div className="textInfo">
            <h3>UI/UX Design</h3>
            <p>
              I prototype every thing before working with a client by using
              figma.
            </p>
          </div>
        </li>
        <li>
          <FontAwesomeIcon icon={faBullhorn} />
          <div className="textInfo">
            <h3>SEO</h3>
            <p>
              I use google console, keyword research and meta tags for search
              engine optimization
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default MyExperience;
