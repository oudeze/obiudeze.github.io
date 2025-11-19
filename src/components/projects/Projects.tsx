import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Slide } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/pagination";

import "./Projects.css";
import { projectsData } from "../data/projectsData";

SwiperCore.use([Pagination, Autoplay]);

const Projects: React.FC = () => {
  // Split the projectsData into two arrays for two rows
  const halfwayIndex = Math.ceil(projectsData.length / 2);
  const firstRowProjects = projectsData.slice(0, halfwayIndex);
  const secondRowProjects = projectsData.slice(halfwayIndex);

  return (
    <section className="projects container section" id="projects">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Projects</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">
          A curated collection of my personal projects showcasing software engineering and trading systems
        </span>
      </Slide>

      {/* First Swiper instance for the first row */}
      <Swiper
        className="projects__container"
        loop={true}
        grabCursor={true}

        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={3}
        spaceBetween={24}
        // pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
      >
        {firstRowProjects.map(({ id, title, description, image, GitHub, hosted }) => (
          <SwiperSlide className="projects__card" key={id}>
            <h3 className="projects__name">{title}</h3>
            <img src={image} alt="img" className="projects__img" />
            <div className="projects__description">{description}</div>
            <div>
              <a href={`${hosted}`} className="projects_social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-globe"></i>
              </a>
              <a href={`${GitHub}`} className="projects_social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-github-alt"></i>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Second Swiper instance for the second row */}
      <Swiper
        className="projects__container"
        loop={true}
        grabCursor={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={3}
        spaceBetween={24}
        // pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
      >
        {secondRowProjects.map(({ id, title, description, image, GitHub, hosted }) => (
          <SwiperSlide className="projects__card" key={id}>
            <h3 className="projects__name">{title}</h3>
            <img src={image} alt="img" className="projects__img" />
            <div className="projects__description">{description}</div>
            <div>
              <a href={`${hosted}`} className="projects_social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-globe"></i>
              </a>
              <a href={`${GitHub}`} className="projects_social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-github-alt"></i>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
