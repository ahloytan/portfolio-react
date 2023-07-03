import React, { useEffect, useState } from 'react';
import HBGMenu from './pages/HBGMenu.jsx'
import SlideIn from './pages/SlideIn.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Bio from './pages/Bio.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import BackgroundImage from './pages/components/BackgroundImage.jsx'
import ReactGA from 'react-ga4';
import AnimatedCursor from './pages/components/cursor.jsx';

const App = () => {
  const [flaticon] = useState('https://www.flaticon.com/');
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_GTAG);
    ReactGA.send("pageview");
  }, []);

  const showOverlay = () => {
    // Freeze body during transition
    document.body.classList.add('freeze');
    document.querySelector('.menuOverlay').addEventListener('transitionend', () => {
      document.body.classList.remove('freeze');
    });

    // Toggle classes
    document.querySelector('.cd-menu-icon').classList.toggle('is-clicked');
    document.querySelectorAll('.menuOverlay, .home').forEach((element) => {
      element.classList.toggle('visible');
    });
  };

  const components = [
    !isMobile && <AnimatedCursor key="AnimatedCursor"/>,
    <HBGMenu overlay={showOverlay} key="HBGMenu"/>,
    <SlideIn overlay={showOverlay} key="SlideIn"/>,
    <Portfolio key="Portfolio"/>,
    <BackgroundImage input="paris" key="Paris"/>,
    <About key="About"/>,
    <BackgroundImage input="rome" key="Rome"/>,
    <Bio title={flaticon} key="Bio"/>,
    <BackgroundImage input="hongkong" key="Hongkong"/>,
    <Contact key="Contact"/>
  ];

  return <main className="siteContainer">{components}</main>;
};

export default App;