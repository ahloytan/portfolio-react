import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

const Bio = () => {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const vidLink = "https://youtu.be/0hdJsfbxzTU";
  const font = isDarkMode ? 'text-white' : 'text-black';
  const bg = isDarkMode ? 'bg-dark' : 'bg-light';
  const bioRef = useRef(null);
  const descBoxRef = useRef(null);

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
    <div key={d} className="bioBox text-left md:text-center">
      <div className="catHolder style_prevu_kit">
        <a href={links[i]} rel="noreferrer" target="_blank">
          <img className={d} src={bioDir + d + ".svg"} title={d} alt={d} />
        </a>
      </div>
      <div className="top2">
        {top2Cat.map((data, index) => <li key={index}>{data[i]}</li>)}
      </div>
    </div>
  ));

  return (
    <div id="bio" className={`bio text-sm md:text-base ${bg} ${font}`} ref={bioRef}>
      <div className="descBox descBioBox" ref={descBoxRef}>
        <span className="pageTitle">MY BIO</span>
        <div className="description">
          Yo! I'm a 26-year-old final year student at SMU, majoring in Information Systems. Btw, those cool background images you see were actually taken by me! I'm really into sports, piano, and games –
          they're my passions! I'm also super grateful to be featured on{' '}           
          <a href={vidLink} rel="noreferrer" target="_blank">
            MINDEF
          </a>
          !
        </div>
        <div className="whatILove text-center">{doLoop}</div>
      </div>
    </div>
  );
};

export default Bio;
