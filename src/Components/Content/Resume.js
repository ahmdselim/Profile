import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
const Resume = () => {
  return (
    <section id="Resume" className="resume">
      <h1>Career</h1>
      <h2>Resume</h2>
      <div className="row">
        <div>
          <FontAwesomeIcon icon={faGraduationCap} />
          <h3>Education</h3>
          <div className="resumeInfo">
            <h4>New Cairo Academy</h4>
            <span>2017 - 2022</span>
            <p>it&apos;s my college, i study at computer science department</p>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faBriefcase} />
          <h3>Experience</h3>
          <div className="resumeInfo">
            <h4>Freelancing</h4>
            <span>Feb 2019 - Till now</span>
            <p>
              I&apos;m currently doing freelance work for local businesses while
              continuing for upcoming opportunities like a job at a company to
              increase my experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
