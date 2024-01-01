const HBGMenu = ({ overlay }) => {
  return (
    <div className="hamburgerMenu block md:hidden" onClick={overlay}>
      <a href="#/" className="cd-primary-nav-trigger" aria-label="Close Menu">
        <span className="cd-menu-icon"></span>
      </a>
    </div>
  );
};

export default HBGMenu;