import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import "./introduction.scss";

const Introduction = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = "Hashen ".split("");
  const nameArray2 = "angeeth,".split("");
  const jobArray = "oftware Developer".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const handleContactMeClick = () => {
    const email = "sangeethj74@gmail.com";
    const subject = "Inquiry from Your Portfolio Website";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="intro ">
      <div className="intro__left">
        <span className="sectiontag">&lt;section&gt;</span>
        <h1 className="intro__headingPrimary">
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>&nbsp;
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>&nbsp;
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <img
            src="https://res.cloudinary.com/dhbiouaym/image/upload/v1663667972/Portfolio/logo-s_fna9e6.png"
            className="intro__logos"
            alt=""
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray2}
            idx={15}
          />
          <br />
          <img
            src="https://res.cloudinary.com/dhbiouaym/image/upload/v1663667972/Portfolio/logo-s_fna9e6.png"
            className="intro__logos"
            alt=""
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={19}
          />
        </h1>
        <h2 className="intro__headingSecondary">
          Expertise in Frontend Development
        </h2>
        <Link to="#" className="intro__button" onClick={handleContactMeClick}>
          Contact Me
        </Link>
        <span className="sectiontag">&lt;/section&gt;</span>
      </div>
      <div className="intro__right">
        <div className="logo__outline">
          <svg
            id="sj"
            width="49rem"
            height="49.5rem"
            viewBox="0 0 299 295"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Path for the logo outline */}
            <path
              d="M 273 42 C 221 39 172 38 114 42 C 109 74 108 99 109 118 C 166 126 193 136 211 171 C 216 179 213 191 199 186 C 173 144 146 142 109 140 C 103 197 105 209 105 228 C 170 246 198 248 268 242 C 274 200 278 174 273 128 C 251 108 232 100 201 98 C 193 94 197 83 202 80 C 228 80 257 83 274 108 C 278 80 277 64 273 43"
              stroke="#FFD700"
              strokeWidth="2"
            />
          </svg>
        </div>
        {/* Uncomment the following code if you want to include the logo fill */}
        <div className="logo__fill">
          <svg
            width="50.2rem"
            height="49.7rem"
            viewBox="0 0 287 287"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 273 42 C 221 39 172 38 114 42 C 109 74 108 99 109 118 C 166 126 193 136 211 171 C 216 179 213 191 199 186 C 173 144 146 142 109 140 C 103 197 105 209 106 239 C 170 246 198 248 268 242 C 274 200 278 174 273 128 C 251 108 232 100 201 98 C 193 94 197 83 202 80 C 228 80 257 83 274 108 C 278 80 277 64 273 43"
              fill="#FFD700"
            />
            <path
              d="M 268 278 L 103 271 L 104 258 L 270 260 L 269 276"
              fill="#FFD700"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
