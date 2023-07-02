import React from 'react';

const HBGMenu = ({ overlay }) => {
  return (
    <div className="hamburgerMenu" onClick={overlay}>
      <a href="#/" className="cd-primary-nav-trigger">
        <span className="cd-menu-icon"></span>
      </a>
    </div>
  );
};

export default HBGMenu;