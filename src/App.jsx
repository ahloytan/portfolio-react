  import React, { lazy, Suspense } from 'react';
  import { useSelector } from 'react-redux';

  import HBGMenu from './pages/HBGMenu.jsx';
  import SlideIn from './pages/SlideIn.jsx';
  const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
  const Bio = lazy(() => import('./pages/Bio.jsx'));
  const About = lazy(() => import('./pages/About.jsx'));
  const Contact = lazy(() => import('./pages/Contact.jsx'));
  const BackgroundImage = lazy(() => import('./components/BackgroundImage.jsx'));
  const RightNavBar = lazy(() => import('./components/RightNavBar.jsx'));

  import SkeletonLoader from './components/SkeletonLoader.jsx';
  import AnimatedCursor from './components/Cursor.jsx';


  const App = () => {
    const isDarkMode = useSelector((state) => state.app.isDarkMode);
    const isLoading = useSelector((state) => state.app.loading);

    const overlay = () => {
      // Toggle classes
      document.querySelector('.cd-menu-icon').classList.toggle('is-clicked');
      document.querySelectorAll('.menuOverlay, .home').forEach((element) => element.classList.toggle('visible'));

    };

    const withSuspense = (Component, key, props) => (
      <Suspense fallback={<SkeletonLoader/>} key={key}>
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
      withSuspense(RightNavBar, "RightNavBar")
    ];

    return <main id="main" className="relative font-m-reg">{components}</main>;
  };

  export default App;