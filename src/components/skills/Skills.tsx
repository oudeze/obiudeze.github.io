import React from "react";
import "./Skills.css";
import FullStack from "./FullStack";
import BackEnd from "./DatabaseandTools";
import CloudInfra from "./CloudInfra";
import { Slide } from "react-awesome-reveal";

const Skills: React.FC = () => {
  return (
    <section className="skills section" id="skills">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Skills</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">A qualitative description of my technical level across Software Engineering and Cloud Infrastructure</span>
      </Slide>
      <div className="skills__container container grid">
        <Slide direction="left" triggerOnce>
          <FullStack />
        </Slide>
        <Slide direction="left" triggerOnce>
          <CloudInfra />
        </Slide>
        <Slide direction="left" triggerOnce>
          <BackEnd />
        </Slide>

      </div>
    </section>
  );
};

export default Skills;
