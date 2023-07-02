import React from 'react';

const Contact = () => {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div className="contact">
      <span className="pageTitle">CONTACT ME</span>
      <div className="socialMediaHolder">{doLoop}</div>
      <div className="copyRight">Coded in Singapore | &copy;2023 Aloysius Tan | All Rights Reserved.</div>
      <img onClick={backToTop} className="backToTop" src="assets/backToTop.svg" alt="backToTop" />
    </div>
  );
};

export default Contact;