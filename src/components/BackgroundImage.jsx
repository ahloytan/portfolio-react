import { useEffect, useRef } from 'react';
//http://jsfiddle.net/QN9cH/1/
const BackgroundImage = ({ input }) => {
  const backgroundImageRef = useRef(null);

  useEffect(() => {
    const bgDir = "assets/background/";

    if (backgroundImageRef.current) backgroundImageRef.current.style.backgroundImage = `url(${bgDir}${input}.webp)`;
    
  }, [input]);

  return (
    <div className={`bgHolder ${input}`}>
      <div className="backgroundImage" ref={backgroundImageRef}></div>
    </div>
  );
};

export default BackgroundImage;