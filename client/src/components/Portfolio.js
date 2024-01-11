import React from "react";

import Project from "./Project";

function Portfolio() {
  return (
    <div
      className="container"
      id="portfolio"
      style={{ backgroundColor: "#ededed" }}
    >
      <div className="portfolio-content align">
        <div className="title">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio-main">
          <Project
            img={process.env.PUBLIC_URL + "/assets/PokemonIMG.png"}
            title={"Pokemon Catelogue"}
            languages={["React"]}
            link={"https://rprimm.github.io/pokemon/"}
            github={"https://github.com/rprimm/pokemon"}
          />
          <Project
            img={process.env.PUBLIC_URL + "/assets/Winows95.png"}
            title={"Windows95 Emulator"}
            languages={["HTML", "CSS", "JavaScript"]}
            link={'https://rprimm.github.io/windows95'}
            github={'https://github.com/rprimm/windows95'}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
