import React, { useEffect, useRef } from 'react';

const isInViewport = (element) => {
  const elementTop = element.offsetTop - (window.innerHeight / 2);
  const elementBottom = elementTop + element.offsetHeight;
  const viewportTop = window.scrollY;
  const viewportBottom = viewportTop + window.innerHeight;
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

const Bio = () => {
  const vidLink = "https://youtu.be/0hdJsfbxzTU";
  // const sportsLink = "https://twitter.com/AloysiusTanJunH/status/1013065995856965632";
  // const gamesLink = "https://twitter.com/AloysiusTanJunH/status/1198536389207289857";

  const bioRef = useRef(null);
  const descBoxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isInViewport(bioRef.current)) {
        bioRef.current.style.visibility = "visible";
        bioRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const twitterPF = "https://twitter.com/";
  const links = [twitterPF + "AloysiusTanJunH/status/1013065995856965632", twitterPF + "itsmeahloy/status/1421638975781969922"];
  const bioDir = "assets/whatILove/";
  const categories = ["sports", "games"];
  const top2Cat = [
    ["Basketball", "League of Legends"],
    ["Bowling", "Hearthstone"],
    ["Badminton", "CS GO"]
  ];

  const doLoop = categories.map((d, i) => (
    <div key={d} className="bioBox">
      <div className="catHolder style_prevu_kit">
        <a href={links[i]} rel="noreferrer" target="_blank">
          <img className={d} src={bioDir + d + ".svg"} title={d} alt={d} />
        </a>
      </div>
      <div className="top2">
        {top2Cat.map((data, index) => (
          <li key={index}>{data[i]}</li>
        ))}
      </div>
    </div>
  ));

  useEffect(() => {
    const handleScroll = () => {
      if (bioRef.current && isInViewport(bioRef.current)) {
        bioRef.current.style.visibility = 'visible';
        bioRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('resize', handleScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bio" ref={bioRef}>
      <div className="descBox descBioBox" ref={descBoxRef}>
        <span className="pageTitle">MY BIO</span>
        <div className="description">
          Currently a Year 3 SMU Information Systems undergraduate. 25 years old. These background images were
          photographed by me! Love me some sports, piano & games. Grateful to be featured on{' '}
          <a href={vidLink} rel="noreferrer" target="_blank">
            MINDEF
          </a>
          !
        </div>
        <div className="whatILove">{doLoop}</div>
      </div>
    </div>
  );
};

export default Bio;
