import React, { useEffect, useState } from 'react';
import HBGMenu from './pages/HBGMenu.jsx'
import SlideIn from './pages/SlideIn.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Bio from './pages/Bio.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import BackgroundImage from './pages/components/BackgroundImage.jsx'
// import ReactGA from 'react-ga4';
import AnimatedCursor from './pages/components/cursor.jsx';

const App = () => {
  const [flaticon] = useState('https://www.flaticon.com/');

  useEffect(() => {
    // ReactGA.initialize(import.meta.env.VITE_GTAG);
    // ReactGA.send("pageview");
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

  return (
    <main className="siteContainer">
      <AnimatedCursor/>
      <HBGMenu overlay={showOverlay}/>
      <SlideIn overlay={showOverlay}/>
      <Portfolio/>
      <BackgroundImage input="paris"/>
      <About/>
      <BackgroundImage input="rome"/>
      <Bio title = {flaticon}/>
      <BackgroundImage input="hongkong"/>
      <Contact/>
    </main>
  );
};

export default App;