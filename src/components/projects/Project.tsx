import React, { useState, useEffect } from "react";
import "./project.scss";
import LazyLoad from "react-lazyload";
import img1 from "./img/expressride.png";
import img2 from "./img/pos.png";
import img3 from "./img/hatchapp.png";
import img4 from "./img/nimal's home stay.png";

import AnimatedLettersFast from "components/AnimatedlettersFast";

const Project = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const nameArray = "02. My Projects".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 4000);
  });
  return (
    <div className="project" id="projects">
      <span className="sectiontag">&lt;section&gt;</span>
      <h1 className="about__headingPrimary">
        <AnimatedLettersFast
          letterClass={letterClass}
          strArray={nameArray}
          idx={15}
        />
      </h1>

      {/* ----------------------------------------- for desktops -------------------------- */}

      <LazyLoad once height={400}>
        <section className="project__section">
          <div className="project__left">
            <img className="project__img" src={img1} alt="expressride" />
          </div>
          <div className="project__right">
            <h3 className="project__headingTertiary">Featured Project</h3>
            <a
              href="https://github.com/Sangeeth-jay/Express-Ride-Taxi-Service"
              target="_blank"
              rel="noreferrer"
              className="project__headingSecondary"
            >
              <h2>Express Ride</h2>
            </a>
            <div className="project__descriptionContainer">
              <p className="project__description">
                Express Ride is a web application for taxi services that
                facilitates various operations, including booking vehicles,
                tracking rides, adding vehicles, updating vehicle information,
                as well as adding and updating staff profiles, among other
                functionalities.
              </p>
              <div className="project__tags">
                {" "}
                PHP &nbsp; Vanila JS &nbsp; jQuery &nbsp; Bootstrap &nbsp; MySQL
              </div>
              <div className="project__icons">
                <a
                  href="https://github.com/Sangeeth-jay/Express-Ride-Taxi-Service"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1.6rem" }}
                >
                  <svg className="project__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  href="https://www.figma.com/file/FZGmTrmx3P1zNqZ1PaDuIw/Taxi-Service?type=design&mode=design&t=kBw1opOUcElWZ0u2-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="project__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className="project__section project__section2">
          <div className="project__left1">
            <h3 className="project__headingTertiary">Featured Project</h3>
            <a
              href="https://github.com/Sangeeth-jay/POS-for-COT-final-assessment"
              target="_blank"
              rel="noreferrer"
              className="project__headingSecondary"
            >
              <h2>Nimal's HomeStay</h2>
            </a>
            <div className="project__descriptionContainer project__descriptionContainer1">
              <p className="project__description">
                "Nimal's HomeStay" is a simple website for small homestay
                business. The website is created using React JS, GSAP, Tailwind
                css, AOS, LottieFiles and Google Analytics. Also, I used
                react-router-dom for routing and react-scroll to make website
                attractively.{" "}
              </p>
              <div className="project__tags">
                React JS &nbsp; GSAP &nbsp; Tailwind css &nbsp; AOS &nbsp;
                LottieFiles &nbsp; Google Analytics{" "}
              </div>
              <div className="project__icons project__icons1">
                <a
                  href="https://github.com/Sangeeth-jay/Nimal-Home-Stay"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1.6rem" }}
                >
                  <svg className="project__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  href="https://www.figma.com/file/nLuzP3KEaCEmv11djmze1G/Nimal's-HomeStay?type=design&node-id=0-1&mode=design&t=kUxwW96epWLzFzOs-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="project__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="project__right">
            <img className="project__img" src={img4} alt="Nimal's HomeStay" />
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className="project__section project__section3">
          <div className="project__left">
            <img
              className="project__img"
              src={img3}
              alt="online grocery store"
              height={450}
            />
          </div>
          <div className="project__right">
            <h3 className="project__headingTertiary">Featured Project</h3>
            <a
              href="https://www.figma.com/file/qwn59jQ5Jz3f9ukIPROslH/hatch-the-AI-bot?type=design&node-id=3-90&mode=design&t=kBw1opOUcElWZ0u2-0"
              target="_blank"
              rel="noreferrer"
              className="project__headingSecondary"
            >
              <h2>#hatch</h2>
            </a>
            <div className="project__descriptionContainer">
              <p className="project__description">
                "#hatch" is an AI-powered chatting web app with a primary focus
                on identifying human thoughts through their chat interactions
                and providing solutions to their challenges. As part of a
                collaborative group project, I have contributed to the frontend
                development of this innovative application.
              </p>
              <div className="project__tags">
                {" "}
                Python &nbsp; ReactJS &nbsp; Tailwind CSS &nbsp; MongoDB
              </div>
              <div className="project__icons">
                <a
                  href="https://www.figma.com/file/qwn59jQ5Jz3f9ukIPROslH/hatch-the-AI-bot?type=design&node-id=3-90&mode=design&t=kBw1opOUcElWZ0u2-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="project__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className="project__section project__section4">
          <div className="project__left1">
            <h3 className="project__headingTertiary">Featured Project</h3>
            <a
              href="https://github.com/Sangeeth-jay/POS-for-COT-final-assessment"
              target="_blank"
              rel="noreferrer"
              className="project__headingSecondary"
            >
              <h2>SJ Grocery</h2>
            </a>
            <div className="project__descriptionContainer project__descriptionContainer1">
              <p className="project__description">
                "SJ Grocery" is a Point of Sale System designed for grocery
                shops, offering not only seamless sales transactions but also
                comprehensive inventory management. The system is equipped with
                distinct roles, comprising an admin with access to all functions
                and a user (cashier) with limited permissions, ensuring
                efficient and secure operations. Users, whether admins or
                cashiers, have the ability to add and update information for
                users and suppliers, manage products, maintain stock records,
                and generate daily sales reports, among other functionalities.{" "}
              </p>
              <div className="project__tags">JAVA &nbsp; MySQL &nbsp; MVC </div>
              <div className="project__icons project__icons1">
                <a
                  href="https://github.com/Sangeeth-jay/POS-for-COT-final-assessment"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1.6rem" }}
                >
                  <svg className="project__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  href="https://www.figma.com/file/I1qYVFCQ6GAyFmXyyWz1wy/POS?type=design&node-id=0-1&mode=design&t=kBw1opOUcElWZ0u2-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="project__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="project__right">
            <img
              className="project__img"
              src={img2}
              alt="SJ grocery"
              height={450}
            />
          </div>
        </section>
      </LazyLoad>

      {/* --------------------------------------------------- for Mobiles ----------------------------------------------------------------- */}

      <ul className="projectResp__list">
        <li className="projectResp__items projectResp__items4">
          <div className="projectResp__card">
            <div className="projectResp__cardTop">
              <svg className="projectResp__cardFolder">
                <use href="icons/symbol-defs.svg#icon-folder"></use>
              </svg>
              <div className="projectResp__cardLink">
                <a
                  href="https://github.com/Sangeeth-jay/Nimal-Home-Stay"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1.6rem" }}
                >
                  <svg className="projectResp__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  href="https://www.figma.com/file/nLuzP3KEaCEmv11djmze1G/Nimal's-HomeStay?type=design&node-id=0-1&mode=design&t=kUxwW96epWLzFzOs-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="projectResp__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="projectResp__cardBody">
              <div className="projectResp__cardBodyHeading">
                Nimal's HomeStay
              </div>
              <p className="projectResp__cardBodyDescription">
                "Nimal's HomeStay" is a simple website for small homestay
                business. The website is created using React JS, GSAP, Tailwind
                css, AOS, LottieFiles and Google Analytics. Also, I used
                react-router-dom for routing and react-scroll to make website
                attractively.
              </p>{" "}
            </div>
            <div className="projectResp__cardFooter">
              <div className="projectResp__tags">
                {" "}
                React JS &nbsp; GSAP &nbsp; Tailwind css &nbsp; AOS &nbsp;
                LottieFiles &nbsp; Google Analytics
              </div>
            </div>
          </div>
        </li>
        <li className="projectResp__items projectResp__items1">
          <div className="projectResp__card">
            <div className="projectResp__cardTop">
              <svg className="projectResp__cardFolder">
                <use href="icons/symbol-defs.svg#icon-folder"></use>
              </svg>
              <div className="projectResp__cardLink">
                <a
                  href="https://github.com/Sangeeth-jay/Express-Ride-Taxi-Service"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1.6rem" }}
                >
                  <svg className="projectResp__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  href="https://www.figma.com/file/FZGmTrmx3P1zNqZ1PaDuIw/Taxi-Service?type=design&mode=design&t=kBw1opOUcElWZ0u2-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="projectResp__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="projectResp__cardBody">
              <div className="projectResp__cardBodyHeading">Express Ride</div>
              <p className="projectResp__cardBodyDescription">
                Express Ride is a web application for taxi services that
                facilitates various operations, including booking vehicles,
                tracking rides, adding vehicles, updating vehicle information,
                as well as adding and updating staff profiles, among other
                functionalities.
              </p>{" "}
            </div>
            <div className="projectResp__cardFooter">
              <div className="projectResp__tags">
                {" "}
                PHP &nbsp; Vanila JS &nbsp; jQuery &nbsp; Bootstrap &nbsp; MySQL
              </div>
            </div>
          </div>
        </li>
        <li className="projectResp__items  projectResp__items2">
          <div className="projectResp__card">
            <div className="projectResp__cardTop">
              <svg className="projectResp__cardFolder">
                <use href="icons/symbol-defs.svg#icon-folder"></use>
              </svg>
              <div className="projectResp__cardLink">
                <a
                  href="https://github.com/Sangeeth-jay/POS-for-COT-final-assessment"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1.6rem" }}
                >
                  <svg className="projectResp__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  href="https://www.figma.com/file/I1qYVFCQ6GAyFmXyyWz1wy/POS?type=design&node-id=0-1&mode=design&t=kBw1opOUcElWZ0u2-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="projectResp__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="projectResp__cardBody">
              <div className="projectResp__cardBodyHeading">SJ Grocery</div>
              <p className="projectResp__cardBodyDescription">
                "SJ Grocery" is a Point of Sale System designed for grocery
                shops, offering not only seamless sales transactions but also
                comprehensive inventory management. The system is equipped with
                distinct roles, comprising an admin with access to all functions
                and a user (cashier) with limited permissions, ensuring
                efficient and secure operations. Users, whether admins or
                cashiers, have the ability to add and update information for
                users and suppliers, manage products, maintain stock records,
                and generate daily sales reports, among other functionalities.
              </p>
            </div>
            <div className="projectResp__cardFooter">
              <div className="projectResp__tags">
                {" "}
                JAVA &nbsp; MySQL &nbsp; MVC
              </div>
            </div>
          </div>
        </li>
        <li className="projectResp__items projectResp__items3">
          <div className="projectResp__card">
            <div className="projectResp__cardTop">
              <svg className="projectResp__cardFolder">
                <use href="icons/symbol-defs.svg#icon-folder"></use>
              </svg>
              <div className="projectResp__cardLink">
                <a
                  href="https://www.figma.com/file/qwn59jQ5Jz3f9ukIPROslH/hatch-the-AI-bot?type=design&node-id=3-90&mode=design&t=kBw1opOUcElWZ0u2-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="projectResp__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="projectResp__cardBody">
              <div className="projectResp__cardBodyHeading">#hatch</div>
              <p className="projectResp__cardBodyDescription">
                "#hatch" is an AI-powered chatting web app with a primary focus
                on identifying human thoughts through their chat interactions
                and providing solutions to their challenges.
                <br />
                As part of a collaborative group project, I have contributed to
                the frontend development of this innovative application.
              </p>
            </div>
            <div className="projectResp__cardFooter">
              <div className="projectResp__tags">
                {" "}
                Python &nbsp; ReactJS &nbsp; Tailwind CSS &nbsp; MongoDB
              </div>
            </div>
          </div>
        </li>
      </ul>

      <span className="sectiontag">
        <br />
        <br /> &lt;/section&gt;
      </span>
    </div>
  );
};

export default Project;
