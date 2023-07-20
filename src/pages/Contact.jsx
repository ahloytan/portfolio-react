import React from 'react';
import { useSelector } from 'react-redux';
import { isMobile } from '../mixins/helper.jsx';
import RightNavBar from '../components/RightNavBar.jsx';


const Contact = () => {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const isLoading = useSelector((state) => state.app.loading);
  const font = isDarkMode ? 'text-white' : 'text-black';
  const bg = isDarkMode ? 'bg-dark' : 'bg-light';

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
    <a className="socialMediaIcons" key={i} href={d} rel="noreferrer" target="_blank">
      <img className="style_prevu_kit" src={contactDir + socialMedia[i] + '.svg'} alt={socialMedia[i]} title={d} />
    </a>
  ));

  return (
    <div id="contact" className={`contact ${font} ${bg}`}>
      <span className="pageTitle">CONTACT ME</span>
      <div className="socialMediaHolder">{doLoop}</div>
      <div className={`copyRight ${font}`}>Coded in Singapore | &copy;2023 Aloysius Tan | All Rights Reserved</div>
      { !isLoading && !isMobile && <RightNavBar key="RightNavBar"/> }
    </div>
  );
};

export default Contact;