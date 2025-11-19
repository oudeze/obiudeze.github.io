import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
const Footer: React.FC = () => {
  const yeareDate: Date = new Date();
  const thisYear: number = yeareDate.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Obi Udeze </h1>

        <ul className="footer__list">
          <li>
            <Link
              to="about"
              className="footer__link"
              spy={true}
              smooth={true}
              duration={50}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className="footer__link"
              spy={true}
              smooth={true}
              duration={50}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="qualification"
              className="footer__link"
              spy={true}
              smooth={true}
              duration={50}
            >
              Qualifications
            </Link>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/obiudeze/"
            target={"_blank"}
            rel="noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/oudeze"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          {/* <a
            href="https://twitter.com/amazzaleen"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a> */}
        </div>
    <span className="footer__copy">
      &copy; {thisYear} Obi Udeze <br />
          Hosted with github pages checkout{" "}
          <a
            href="https://github.com/oudeze"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            my github
          </a>{" "}
          for how to do the same
    </span>
    <span className="footer__copy" style={{ fontSize: "0.85rem", opacity: 0.8, marginTop: "0.5rem", display: "block" }}>
      Contents may not be up to date, checkout{" "}
      <a
        href="https://www.linkedin.com/in/obiudeze/"
        target="_blank"
        rel="noreferrer"
        style={{ color: "inherit", textDecoration: "underline" }}
      >
        my LinkedIn
      </a>{" "}
      for updated info
    </span>
    <span className="footer__copy" style={{ fontSize: "0.85rem", opacity: 0.8, marginTop: "0.5rem", display: "block" }}>
      Pulled from Mazzine's github portfolio.{" "}
      <a
        href="https://github.com/Mazzaleen/mazza2"
        target="_blank"
        rel="noreferrer"
        style={{ color: "inherit", textDecoration: "underline" }}
      >
        Check it out!
      </a>
    </span>
      </div>
    </footer>
  );
};

export default Footer;
