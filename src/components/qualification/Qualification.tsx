import React, { useState } from "react";

import { Slide } from "react-awesome-reveal";
import "./Qualification.css";

import { positionData } from "../data/positionData";
import { educationData } from "../data/educationData";
import { certificationsData } from "../data/certificationsData";

const linkedin = require("../assets/linkedin_logo.png");

const Qualification: React.FC = () => {
  const [toggleModal, setToggleModal] = useState<number>(1);
  const [showMoreEducation, setShowMoreEducation] = useState<boolean>(false);
  const [showMoreExperience, setShowMoreExperience] = useState<boolean>(false);

  const toggleTab = (index: number): void => {
    setToggleModal(index);
  };

  const handleShowMoreEducation = (): void => {
    setShowMoreEducation((prevState) => !prevState);
  };

  const handleShowMoreExperience = (): void => {
    setShowMoreExperience((prevState2) => !prevState2);
  };

  const educationItems = educationData.sort((a, b) => a.id - b.id);
  const experienceItems = showMoreExperience ? positionData : positionData.sort((a, b) => a.id - b.id).slice(0, 3);
  const certificationItems = certificationsData.sort((a, b) => a.id - b.id);
  return (
    <section className="qualification section" id="qualification">

      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Education & Experience</h2>
      </Slide>

      <Slide direction="right" triggerOnce>
  <span className="section__subtitle">
    Condensed Career Timeline
    ( <a href="https://www.linkedin.com/in/obiudeze/" target="_blank" rel="noopener noreferrer">
      <i className="bx bxl-linkedin"></i> for more specifics
    </a> )
  </span>
</Slide>


      <div className="qualification__container container">
        {/* START BUTTON */}
        <div className="qualification__tabs">
          <div
            className={
              toggleModal === 1
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleModal === 2
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          <div
            className={
              toggleModal === 3
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-award qualification__icon"></i>
            Certifications
          </div>
        </div>
        {/* END BUTTON */}


        <Slide direction="left" triggerOnce>

          {/* Content 1 */}
          {toggleModal === 1 && (
          <div className="jobs_timeline_container">
          {educationItems.sort((a, b) => a.id - b.id).map(ed => (
            <div className="job" key={ed?.id}>
            <h2>{ed?.school} - {ed?.degree}</h2>
            <h3>{ed?.grade}</h3>

            <img src={ed?.image} alt="" className="job_companyLogo"  />
            <h4>{ed?.location[0]}, {ed?.location[1]}</h4>



            <div className="job_date_beforeLine">{ed?.dates[0]}</div>
            <div className="job_date_afterLine">{`${ed?.dates[0]} - ${ed?.dates[1]}`}</div>
            </div>
            ))}

  {/* <button className={`qualification__button ${showMoreEducation ? 'qualification__button--inverse' : ''}`} onClick={handleShowMoreEducation}>
  {showMoreEducation ? 'Show less' : 'Show more education history'}
</button> */}

            </div>


          )}






        {/* Content 2 */}
        {toggleModal === 2 && (
        <div className="jobs_timeline_container">

          {experienceItems.sort((a, b) => a.id - b.id).map(job => (
            <div className="job" key={job.id}>
            <h2>{job?.company}</h2>
            <h3>{job?.position_title}</h3>
            <img
            src={job?.image}
            alt=""
             className="job_companyLogo"
             onClick={() => window.open(job?.website, "_blank") }/>
            <div className="job_date_beforeLine">{job?.dates[0]}</div>
            <div className="job_date_afterLine">{`${job?.dates[0]} - ${job?.dates[1]}`}</div>
            <div className="job_companyLinks">
              <img
                src={linkedin}
                alt=""
                onClick={() => window.open(job?.linkedin, "_blank")}
              />
              <i 
                className="uil uil-globe" 
                onClick={() => window.open(job?.website, "_blank")}
              />
            </div>

        </div>
         ))}

<button className={`qualification__button ${showMoreExperience ? 'qualification__button--inverse' : ''}`} onClick={handleShowMoreExperience}>
  {showMoreExperience ? 'Show less' : 'Show more employment history'}
</button>
        </div>
        )}

        {/* Content 3 */}
        {toggleModal === 3 && (
        <div className="jobs_timeline_container">
          {certificationItems.map(cert => {
            // Format date to shorter format (e.g., "Nov 2025" instead of "November 13, 2025")
            const formatDateShort = (dateStr: string) => {
              const [monthDay, year] = dateStr.split(', ');
              const [month, day] = monthDay.split(' ');
              const monthAbbr = month.substring(0, 3);
              return `${monthAbbr} ${year}`;
            };
            const issueDateShort = formatDateShort(cert.issueDate);
            const expireDateShort = formatDateShort(cert.expirationDate);
            
            return (
            <div className="job" key={cert.id}>
              <h2>{cert.name}</h2>
              <h3>{cert.issuer}</h3>
              <img
                src={cert.image}
                alt={cert.name}
                className="job_companyLogo"
                style={{ maxHeight: "80px", objectFit: "contain" }}
              />
              <h4>Issue Date: {cert.issueDate}</h4>
              <h4>Expires: {cert.expirationDate}</h4>
              <div className="job_date_beforeLine">{issueDateShort}</div>
              <div className="job_date_afterLine">Validation: {cert.validationNumber}</div>
              <div className="job_companyLinks">
                <a
                  href={cert.validationUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <i 
                    className="uil uil-globe" 
                    style={{ cursor: "pointer", fontSize: "30px" }}
                  />
                </a>
              </div>
            </div>
            );
          })}
        </div>
        )}

        </Slide>
      </div>
    </section>
  );
};

export default Qualification;
