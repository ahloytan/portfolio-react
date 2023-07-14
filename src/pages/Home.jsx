import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header.jsx';
import Typewriter from 'typewriter-effect';
import { showLoadingScreen, fontColor } from '../mixins/helper.jsx';


const Home = ({ clickScroll }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const font = fontColor(isDarkMode);
  const imageRef = useRef(null);

  useEffect(() => {
    const landscapeCheck = () => {
      if (window.innerHeight < window.innerWidth && window.innerHeight < 421) {
        const nameJobElements = document.querySelectorAll('.nameJob, .scrollHolder');
        nameJobElements.forEach((element) => (element.style.display = 'none'));
      }
    };
    landscapeCheck();

    window.addEventListener('resize', landscapeCheck);
    return () => window.removeEventListener('resize', landscapeCheck);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.addEventListener('load', handleImageLoad);
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener('load', handleImageLoad);

      }
    };
  }, []);

  const handleImageLoad = () => {
    document.documentElement.style.overflowY = 'scroll'; // Re-enable scrolling
    return showLoadingScreen(dispatch);
  };

  const homeBgStyle = {
    height: window.innerHeight + 'px',
    backgroundImage: `url('assets/background/${isDarkMode ? 'bali' : 'swissland'}.jpg')`,
  };

  return (
    <div className="home backgroundImage" style={homeBgStyle}>
      <Header clickScroll={clickScroll} />
      <div id="container"></div>
      <div className={`tagLine mt-16 font-m-light ${font}`}>
        <div>
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(85)
                .typeString("See and you'll forget.<br>")
                .typeString("Do and you'll remember.<br>")
                .typeString("Teach and you'll understand.")
                .pauseFor(2250)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </div>
      <div className="nameJob mt-32 md:mt-48 w-auto md:w-100">
        <div className={`text-3xl md:text-5xl py-2.5 ${font}`}>ALOYSIUS TAN</div>
        <div className={`text-base md:text-2xl pb-2.5 font-m-light ${font}`}>WEB DEVELOPER</div>
      </div>
      <div className="scrollHolder">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
      <img
        ref={imageRef}
        src={`assets/background/${isDarkMode ? 'bali' : 'swissland'}.jpg`}
        alt={isDarkMode ? 'Bali' : 'Swissland'}
        style={{ display: 'none' }} // Optional: Hide the image from the DOM
      />
    </div>
  );
};

export default Home;
