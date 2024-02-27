import React from "react";

import { Link } from "react-router-dom";
import "./scss/navbar.scss";
import logo from "../static/images/logo-sj.png"
// @ts-ignore
import myCv from "../static/cv/hashenSangeethCV.pdf";

const Navbar = () => {
  const downloadCv = () => {
    const link = document.createElement('a');
    link.href = myCv;
    link.download = 'hashenSangeethCV.pdf';
    link.click();
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__link">
          <img
            alt="logo"
            src={logo}
            className="navbar__img"
          />
        </Link>
      </div>
      <div className="navbar__right">
        <ul className="navbar__list">
          <li className="navbar__items">
            <a href="#about" className="navbar__itemsLink">
              <span className="navbar__itemsLinkNumeric">01. about</span>
            </a>
          </li>
          {/* <li className="navbar__items">
            <a href="#work" className="navbar__itemsLink">
              <span className="navbar__itemsLinkNumeric">02. work</span>
            </a>
          </li> */}
          <li className="navbar__items">
            <a href="#projects" className="navbar__itemsLink">
              <span className="navbar__itemsLinkNumeric">02. projects</span>
            </a>
          </li>

        </ul>
        <button onClick={downloadCv} className="navbar__button">
          Resume
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
