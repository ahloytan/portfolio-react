import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const RightNavBar = () => {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const navItems = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Portfolio', sectionId: 'portfolio' },
    { label: 'Experience', sectionId: 'about' },
    { label: 'Bio', sectionId: 'bio' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  const [activeSection, setActiveSection] = useState(navItems[0].sectionId);
  const observerRef = useRef(null);

  const scrollToSection = (sectionId) => document.getElementById(sectionId).scrollIntoView();
  
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    };

    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const target = document.getElementById(item.sectionId);
  
      if (target) observerRef.current.observe(target);
    });

    return () => observerRef.current.disconnect();
  }, []);

  return (
    <nav id="dot-nav">
      <ul>
        {navItems.map((item, index) => (
          <li className="dot-container text-right" key={index}>
            <a
              href={`#${item.sectionId}`}
              onClick={() => scrollToSection(item.sectionId)}
              rel="noreferrer"
            >
              <span className={`dot ${activeSection === item.sectionId ? 'active' : ''}`} style={{backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'}}></span>
              <span className="dot-label font-m-bold">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RightNavBar;
