  import React, { useEffect, lazy, Suspense } from 'react';
  import { useSelector } from 'react-redux';

  import HBGMenu from './pages/HBGMenu.jsx';
  import SlideIn from './pages/SlideIn.jsx';
  const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
  const Bio = lazy(() => import('./pages/Bio.jsx'));
  const About = lazy(() => import('./pages/About.jsx'));
  const Contact = lazy(() => import('./pages/Contact.jsx'));
  const BackgroundImage = lazy(() => import('./components/BackgroundImage.jsx'));
  import RightNavBar from './components/RightNavBar.jsx';

  import AnimatedCursor from './components/cursor.jsx';


  const App = () => {
    const isDarkMode = useSelector((state) => state.app.isDarkMode);

    useEffect(() => {
      window.history.scrollRestoration = 'manual';
      document.documentElement.style.overflow = "hidden";
    }, []);

    const overlay = () => {
      // Freeze body during transition
      document.body.classList.add('freeze');
      document.querySelector('.menuOverlay').addEventListener('transitionend', () => document.body.classList.remove('freeze'));

      // Toggle classes
      document.querySelector('.cd-menu-icon').classList.toggle('is-clicked');
      document.querySelectorAll('.menuOverlay, .home').forEach((element) => element.classList.toggle('visible'));

    };

    const withSuspense = (Component, key, props) => (
      <Suspense fallback={<div>Loading...</div>} key={key}>
        <Component {...props} />
      </Suspense>
    );

    const components = [
      <AnimatedCursor key="AnimatedCursor"/>,
      <HBGMenu overlay={overlay} key="HBGMenu"/>,
      <SlideIn overlay={overlay} key="SlideIn"/>,
      withSuspense(Portfolio, "Portfolio"),
      withSuspense(BackgroundImage, "Paris", { input: isDarkMode ? "hongkong-night" : "paris" }),
      withSuspense(About, "About"),
      withSuspense(BackgroundImage, "Rome", { input: isDarkMode ? "sgp" : "rome" }),
      withSuspense(Bio, "Bio"),
      withSuspense(BackgroundImage, "HongKong", { input: isDarkMode ? "wheelers" : "hongkong" }),
      withSuspense(Contact, "Contact"),
      <RightNavBar key="RightNavBar"/> 
    ];

    return <main id="main" className="relative font-m-reg">{components}</main>;
  };

  export default App;