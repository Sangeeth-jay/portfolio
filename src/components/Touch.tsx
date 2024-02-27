import React, { useState, useEffect } from 'react';
import AnimatedLettersFast from './AnimatedlettersFast';
import './scss/touch.scss';

const Touch = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = 'Get In Touch'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  }, []);

  const handleContactMeClick = () => {
    const email = 'sangeethj74@gmail.com'; 
    const subject = 'Inquiry from Your Portfolio Website';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className='sec'>
      <span className="sectiontag">&lt;section&gt;</span>
      <div className='touch'>
        <h1 className="touch__headingPrimary">
          <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
        <p className='touch__description'>
          I am interested in freelance opportunities - especially on ambitious or large projects.
          However, if you have any other requests or questions, don't hesitate to contact me using the
          form below.
        </p>
        <button className="intro__button" onClick={handleContactMeClick}>
          Hire Me
        </button>
      </div>
      <span className="sectiontag">&lt;/section&gt;</span>
    </section>
  );
};

export default Touch;
