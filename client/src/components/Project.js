import React from "react";
import { SiGithub } from "react-icons/si";
import { BsArrowRightSquareFill } from "react-icons/bs";

function Project({ img, title, languages, link, github }) {
  return (
    <div className="project">
      <img src={img} alt="Project image" />
      <div className="project-info">
        <div className="project-top">
          <h3 className="font-m" style={{ margin: 0 }}>
            {title}
          </h3>
          <div className="project-top-buttons"></div>
        </div>
        <div className="project-footer">
          <div className="project-footer-languages font-s">
            {languages.map((language) => {
              return <div className="font-s">{language}</div>;
            })}
          </div>
          <div className="project-footer-buttons">
            <button className="project-button">
              <a href={github}><SiGithub /></a>
            </button>
            <button className="project-button">
              <a href={link}><BsArrowRightSquareFill /></a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
