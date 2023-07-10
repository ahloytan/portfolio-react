import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const font = isDarkMode ? 'text-white' : 'text-black';
  const bg = isDarkMode ? 'bg-dark' : 'bg-light';
  const backToTop = () => {
    console.log("?");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const contactDir = 'assets/social_media/';
  const links = [
    'https://www.instagram.com/ahloytan/',
    'https://www.linkedin.com/in/aloytan/',
    'mailto:chewinggum222@hotmail.com',
    'https://www.youtube.com/channel/UCcl5vpu_9N6vspUF_AtMRuQ',
    'https://www.facebook.com/ATJH4',
    'https://github.com/ahloytan?tab=repositories',
  ];
  const socialMedia = ['instagram', 'linkedin', 'gmail', 'youtube', 'facebook', 'github'];

  const doLoop = links.map((d, i) => (
    <a key={i} href={d} rel="noreferrer" target="_blank">
      <img className="style_prevu_kit" src={contactDir + socialMedia[i] + '.svg'} alt={socialMedia[i]} title={d} />
    </a>
  ));

  return (
    <div className={`contact ${font} ${bg}`}>
      <span className="pageTitle">CONTACT ME</span>
      <div className="socialMediaHolder">{doLoop}</div>

      <div className={`copyRight ${font}`}>Coded in Singapore | &copy;2023 Aloysius Tan | All Rights Reserved</div>
      <div className="backToTop" onClick={backToTop} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="-27 -27 860.00001 860.00001" width="40px">
          <g>
            <path d="m403.207031 806.332031c-222.285156 0-403.1249998-180.839843-403.1249998-403.125 0-222.285156 180.8398438-403.1249998 403.1249998-403.1249998 222.285157 0 403.125 180.8398438 403.125 403.1249998 0 222.285157-180.839843 403.125-403.125 403.125zm0-779.375c-207.464843 0-376.25 168.785157-376.25 376.25 0 207.46875 168.785157 376.25 376.25 376.25 207.46875 0 376.25-168.78125 376.25-376.25 0-207.464843-168.78125-376.25-376.25-376.25zm0 0" data-original="#000000" className="active-path" data-old_color="#48B9F0" fill="#49BAF0"/>
            <path d="m604.769531 497.269531c-3.4375 0-6.875-1.3125-9.5-3.933593l-192.0625-192.066407-192.058593 192.066407c-5.25 5.25-13.753907 5.25-19.003907 0s-5.25-13.753907 0-19.003907l201.5625-201.5625c5.25-5.25 13.753907-5.25 19.003907 0l201.5625 201.5625c5.25 5.25 5.25 13.753907 0 19.003907-2.628907 2.621093-6.066407 3.933593-9.503907 3.933593zm0 0" data-original="#000000" className="active-path" data-old_color="#48B9F0" fill="#49BAF0"/>
          </g> 
        </svg>
      </div>
    </div>
  );
};

export default Contact;