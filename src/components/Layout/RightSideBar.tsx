import React from 'react';
import { Link } from 'react-router-dom';
import './rightSideBar.scss';

const RightSideBar = () => {
  const handleContactMeClick = () => {
    const email = 'sangeethj74@gmail.com';
    const subject = 'Inquiry from Your Portfolio Website';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="right">
      <main className="right__main">
        <div>
          <Link to="#" className="right__email" onClick={handleContactMeClick}>
            sangeethj74@gmail.com
          </Link>
        </div>
        <div className="right__line"></div>
      </main>
    </div>
  );
};

export default RightSideBar;
