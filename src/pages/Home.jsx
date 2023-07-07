import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header.jsx';
import Typewriter from 'typewriter-effect';

const Home = ({ clickScroll }) => {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);

  useEffect(() => {
    const landscapeCheck = () => {
      if (window.innerHeight < window.innerWidth && window.innerHeight < 421) {
        const nameJobElements = document.querySelectorAll('.nameJob, .scrollHolder');
        nameJobElements.forEach((element) => element.style.display = 'none');
      }
    };
    landscapeCheck();

    window.addEventListener('resize', landscapeCheck);
    return () => window.removeEventListener('resize', landscapeCheck);
  }, []);

  const homeBgHeight = window.innerHeight + 'px';
  const homeBgStyle = {
    height: homeBgHeight,
    backgroundImage: `url('../assets/background/${isDarkMode ? 'bali' : 'swissland'}.jpg')`,
  };

  return (
    <div className="home backgroundImage" style={homeBgStyle}>
      <Header clickScroll={clickScroll}/>
      <div id="container"></div>
      <div className="tagLine font-m-light">
        <div className="tagLineBorderHolder">
          <span className="tagLineBorder"></span>&nbsp;
        </div>
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
      <div className="nameJob mt-32 md:mt-64 w-auto md:w-100">
        <div className="text-3xl md:text-5xl py-2.5">ALOYSIUS TAN</div>
        <div className="text-base md:text-2xl pb-2.5 font-m-light">WEB DEVELOPER</div>
      </div>
      <div className="scrollHolder">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
    </div>
  );
};

export default Home;
