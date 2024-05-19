import AnimatedLettersFast from "components/AnimatedlettersFast";
import React, { useState, useEffect } from "react";
import "./otherProjects.scss";

const OtherProjects = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const nameArray = "Other Projects ".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 4000);
  });

  return (
    <div className="other">
      <span className="sectiontag">&lt;section&gt;</span>
      <div className="other__container">
        <h1 className="other__headingPrimary">
          <AnimatedLettersFast
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
      </div>

      <ul className="other__list">
        <li className="other__items">
          <div className="other__card">
            <div className="other__cardTop">
              <svg className="other__cardFolder">
                <use href="icons/symbol-defs.svg#icon-folder"></use>
              </svg>
              <div className="other__cardLink">
                <a
                  href="https://github.com/Sangeeth-jay/Task-App-MERN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="other__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="other__cardBody">
              <div className="other__cardBodyHeading">Task-App</div>
              <p className="other__cardBodyDescription">
                This is a simple task app. This can use to note to day to day life taks. Also this is a fully functioned CRUD application. I create
                this project to study "MERN" stack{" "}
              </p>
            </div>
            <div className="other__cardFooter">
              <div className="other__tags">
                {" "}
                React JS &nbsp; Tailwind CSS &nbsp; Node JS &nbsp; Express JS &nbsp; MongoDB
              </div>
            </div>
          </div>
        </li>
        <li className="other__items">
          <div className="other__card">
            <div className="other__cardTop">
              <svg className="other__cardFolder">
                <use href="icons/symbol-defs.svg#icon-folder"></use>
              </svg>
              <div className="other__cardLink">
                <a
                  href="https://credit-card-validator-tan.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="other__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="other__cardBody">
              <div className="other__cardBodyHeading">Credit Card Validator</div>
              <p className="other__cardBodyDescription">
                This was a simple credit card validator application created using React JS.
                When I creating this learned about "Luhn algorythm" which is using in the industry.{" "}
              </p>
            </div>
            <div className="other__cardFooter">
              <div className="other__tags">
                {" "}
                React JS &nbsp; Tailwind CSS &nbsp; Luhn Algorithm
              </div>
            </div>
          </div>
        </li>
        <li className="other__items">
          <div className="other__card">
            <div className="other__cardTop">
              <svg className="other__cardFolder">
                <use href="icons/symbol-defs.svg#icon-folder"></use>
              </svg>
              <div className="other__cardLink">
                <a
                  href="https://gowisetha.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="other__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="other__cardBody">
              <div className="other__cardBodyHeading">Gowisetha</div>
              <p className="other__cardBodyDescription">
                Gowisetha is a simple web application for weather forecasting. I
                created this project for self-study API integration. I Used
                React JS framework and Tailwind CSS. Also, used OpenWeather API
                to get weather data.{" "}
              </p>
            </div>
            <div className="other__cardFooter">
              <div className="other__tags">
                {" "}
                React JS &nbsp; Tailwind CSS &nbsp; OpenWeather API
              </div>
            </div>
          </div>
        </li>
        <li className="other__items">
          <div className="other__card">
            <div className="other__cardTop">
              <svg className="other__cardFolder">
                <use href="icons/symbol-defs.svg#icon-folder"></use>
              </svg>
              <div className="other__cardLink">
                <a
                  href="https://todo-app-sangeeth-jay.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="other__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="other__cardBody">
              <div className="other__cardBodyHeading">Daily ToDo List</div>
              <p className="other__cardBodyDescription">
                This is my first React app and it is styled using vanila CSS. Here I used useState hook for state management. It's simple web without database.{" "}
              </p>
            </div>
            <div className="other__cardFooter">
              <div className="other__tags">
                {" "}
                React JS &nbsp; CSS 
              </div>
            </div>
          </div>
        </li>
        <li className="other__items">
          <div className="other__card">
            <div className="other__cardTop">
              <svg className="other__cardFolder">
                <use href="icons/symbol-defs.svg#icon-folder"></use>
              </svg>
              <div className="other__cardLink">
                <a
                  href="https://github.com/Sangeeth-jay/Coop-Fund-Mangement-System"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="other__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="other__cardBody">
              <div className="other__cardBodyHeading">COOP-Fund-Management</div>
              <p className="other__cardBodyDescription">
                Developed a web application to streamline fund management for a
                Cooperative Development Department - Southern. Enabled the
                recording of fund payments and generated various reports,
                including monthly and annual fund reports.{" "}
              </p>
            </div>
            <div className="other__cardFooter">
              <div className="other__tags">
                {" "}
                PHP &nbsp; VanilaJS &nbsp; jQuery &nbsp; MySQL
              </div>
            </div>
          </div>
        </li>
        <li className="other__items">
          <div className="other__card">
            <div className="other__cardTop">
              <svg className="other__cardFolder">
                <use href="icons/symbol-defs.svg#icon-folder"></use>
              </svg>
              <div className="other__cardLink">
                <a
                  href="https://github.com/Sangeeth-jay/boostrap-practice"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="other__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="other__cardBody">
              <div className="other__cardBodyHeading">Build-Con</div>
              <p className="other__cardBodyDescription">
                Responsive Web Site for Build-Con Construction Company. Use
                Bootstrap 5.3.0.
              </p>
            </div>
            <div className="other__cardFooter">
              <div className="other__tags"> HTML &nbsp; Bootstrap</div>
            </div>
          </div>
        </li>
        <li className="other__items">
          <div className="other__card">
            <div className="other__cardTop">
              <svg className="other__cardFolder">
                <use href="icons/symbol-defs.svg#icon-folder"></use>
              </svg>
              <div className="other__cardLink">
                <a
                  href="https://github.com/Sangeeth-jay/Co-operative-Req.-Report-generator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="other__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="other__cardBody">
              <div className="other__cardBodyHeading">
                COOP-Req-Report-Genarator
              </div>
              <p className="other__cardBodyDescription">
                This system was set up to enter the court case information of
                the debtors who have taken loans from those societies and have
                not paid them, and to record the administration of the court
                case money after the debtors have paid the case information.
              </p>
            </div>
            <div className="other__cardFooter">
              <div className="other__tags"> VB.net &nbsp; MS access</div>
            </div>
          </div>
        </li>
      </ul>
      <span className="sectiontag">&lt;/section&gt;</span>
    </div>
  );
};

export default OtherProjects;
