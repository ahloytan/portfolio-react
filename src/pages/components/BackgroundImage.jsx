import React, { useEffect, useRef } from 'react';
//http://jsfiddle.net/QN9cH/1/
const BackgroundImage = ({ input }) => {
  const backgroundImageRef = useRef(null);

  useEffect(() => {
    const bgDir = "../assets/background/";
    const bgImageStyle = `url(${window.innerWidth < 1400 ? bgDir + input + "M.jpg" : bgDir + input + ".jpg"})`;

    if (backgroundImageRef.current) {
      backgroundImageRef.current.style.backgroundImage = bgImageStyle;
    }
  }, [input]);

  return (
    <div className={`bgHolder ${input}`}>
      <div className="backgroundImage" ref={backgroundImageRef}></div>
    </div>
  );
};

export default BackgroundImage;