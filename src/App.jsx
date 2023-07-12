  import React, { useEffect, lazy, Suspense } from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  import ReactGA from 'react-ga4';

  import HBGMenu from './pages/HBGMenu.jsx';
  const SlideIn = lazy(() => import('./pages/SlideIn.jsx'));
  const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
  const Bio = lazy(() => import('./pages/Bio.jsx'));
  const About = lazy(() => import('./pages/About.jsx'));
  const Contact = lazy(() => import('./pages/Contact.jsx'));
  const BackgroundImage = lazy(() => import('./components/BackgroundImage.jsx'));

  import LoadingScreen from './components/LoadingScreen.jsx'
  import AnimatedCursor from './components/cursor.jsx';
  import { showLoadingScreen, isMobile } from './mixins/helper.jsx';


  const App = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.app.isDarkMode);
    const isLoading = useSelector((state) => state.app.loading);

    useEffect(() => {
      ReactGA.initialize(import.meta.env.VITE_GTAG);
      ReactGA.send("pageview");

      return showLoadingScreen(dispatch);
    }, []);

    const showOverlay = () => {
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
      isLoading && <LoadingScreen key="LoadingScreen" />,
      !isMobile && <AnimatedCursor key="AnimatedCursor"/>,
      isMobile && <HBGMenu overlay={showOverlay} key="HBGMenu"/>,
      withSuspense(SlideIn, "SlideIn", {showOverlay}),
      withSuspense(Portfolio, "Portfolio"),
      withSuspense(BackgroundImage, "Paris", { input: isDarkMode ? "hongkong-night" : "paris" }),
      withSuspense(About, "About"),
      withSuspense(BackgroundImage, "Rome", { input: isDarkMode ? "sgp" : "rome" }),
      withSuspense(Bio, "Bio"),
      withSuspense(BackgroundImage, "HongKong", { input: isDarkMode ? "wheelers" : "hongkong" }),
      withSuspense(Contact, "Contact"),
    ];

    return <main className="relative font-m-reg">{components}</main>;
  };

  export default App;