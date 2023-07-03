import React, { useEffect } from 'react';
import Header from './Header.jsx';
import Typewriter from 'typewriter-effect';

const Home = ({ clickScroll }) => {
  useEffect(() => {
    const landscapeCheck = () => {
      if (window.innerHeight < window.innerWidth && window.innerHeight < 421) {
        const nameJobElements = document.querySelectorAll('.nameJob, .scrollHolder');
        nameJobElements.forEach((element) => {
          element.style.display = 'none';
        });
      }
    };
    landscapeCheck();

    window.addEventListener('resize', landscapeCheck);
    return () => {
      window.removeEventListener('resize', landscapeCheck);
    };
  }, []);

  const homeBgHeight = window.innerHeight + 'px';
  const homeBgStyle = {
    height: homeBgHeight,
  };

  return (
    <div className="home backgroundImage" style={homeBgStyle}>
      <Header clickScroll={clickScroll}/>
      <div id="container"></div>
      <div className="tagLine">
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
      <div className="nameJob">
        <div>ALOYSIUS TAN</div>
        <div>WEB DEVELOPER</div>
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