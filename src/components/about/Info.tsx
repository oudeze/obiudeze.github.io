import React from "react";

const Info: React.FC = () => {
  return (
    <div className="about__info grid">
      {/* <div className="about__box">
        <i className="fa fa-briefcase about__icon"></i>
        <h2 className="about__title">Previously</h2>
        <span className="about__subtitle">Salesforce, IBM, Vanguard, Goldman Sachs</span>
      </div> */}
      <div className="about__box">
        <i className="fa fa-headphones about__icon"></i>
        <h2 className="about__title">Interested In</h2>
        <span className="about__subtitle">Software Development, Full-Stack Engineering, System Design, Data-driven services </span>
      </div>
    </div>
  );
};

export default Info;
