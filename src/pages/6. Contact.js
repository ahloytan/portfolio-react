import React from 'react';
import $ from 'jquery';

//https://www.tutorialspoint.com/reactjs/reactjs_components.htm
class Contact extends React.Component {
  backToTop(){
    $("html, body").animate({scrollTop: 0}, 1500);
  }
  render() {
    const contactDir = "images_doc/social_media/";
    const links = [
      "https://www.instagram.com/ahloytan/",
      "https://www.linkedin.com/in/aloytan/",
      "mailto:chewinggum222@hotmail.com",
      "https://www.youtube.com/channel/UCcl5vpu_9N6vspUF_AtMRuQ",
      "https://www.facebook.com/ATJH4",
      "https://github.com/ahloytan?tab=repositories"
    ]
    const socialMedia = ["instagram","linkedin","gmail","youtube","facebook","github"];
    const doLoop = links.map((d, i) => {
      /* https://stackoverflow.com/questions/21668025/react-jsx-access-props-in-quotes */
      return <a key={i} href={d} rel="noreferrer" target="_blank">
      <img className="style_prevu_kit" src={contactDir + socialMedia[i] + ".svg"} alt={socialMedia[i]} title={d}/></a>;
    });

    return (<div className="contact">
    <span className="pageTitle">CONTACT ME</span>
    <div className="socialMediaHolder">
      {doLoop}
    </div>
    <div className="copyRight">Coded in Singapore | &copy;2022 Aloysius Tan | All Rights Reserved.</div>
    <img onClick={() => this.backToTop()} className="backToTop" src="images_doc/backToTop.svg" alt="backToTop"/>
    </div>);
  }
}

export default Contact;
