import React from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const font = isDarkMode ? 'text-white' : 'text-black';
  const bg = isDarkMode ? 'bg-dark' : 'bg-light';

  const contactDir = 'assets/social_media/';

  const data = [
    {
      link: 'https://www.instagram.com/ahloytan/',
      icon: 'instagram',
    },
    {
      link: 'https://www.linkedin.com/in/aloytan/',
      icon: 'linkedin', 
    },
    {
      link: 'mailto:chewinggum222@hotmail.com',
      icon: 'gmail', 
    },
    {
      link: 'https://github.com/ahloytan?tab=repositories',
      icon: 'github'
    }
  ];

  const doLoop = data.map((d, i) => (
    <a className="socialMediaIcons" key={i} href={d.link} rel="noreferrer" target="_blank">
      <img className="style_prevu_kit" src={contactDir + d.icon + '.svg'} alt={d.icon} title={d.icon} />
    </a>
  ));

  return (
    <div id="contact" className={`contact ${font} ${bg}`}>
      <span className="pageTitle">CONTACT ME</span>
      <div className="socialMediaHolder">{doLoop}</div>
      <div className={`copyRight ${font}`}>Coded in Singapore | &copy;2023 Aloysius Tan | All Rights Reserved</div>
    </div>
  );
};

export default Contact;