import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import logo from "../static/images/logo-sj.png";
// @ts-ignore
import myCv from "../static/cv/hashenSangeethCV.pdf";
import "./scss/navbar.scss";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = myCv;
    link.download = "hashenSangeethCV.pdf";
    link.click();
  };

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          <img alt="logo" src={logo} className="header__content__logo__img" />
        </Link>
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li>
              <a href="#about" className="navbar__itemsLink">
                <span>01.</span> About
              </a>
            </li>
            <li>
              <a href="#projects" className="navbar__itemsLink">
              <span>02.</span> Works
              </a>
            </li>

            <button onClick={downloadCv} className="btn">
              Resume
            </button>
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
