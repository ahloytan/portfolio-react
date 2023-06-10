import React from 'react';
import $ from 'jquery';

class Bio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vidLink: "https://youtu.be/0hdJsfbxzTU",
      sportsLink:"https://twitter.com/AloysiusTanJunH/status/1013065995856965632" ,
      gamesLink: "https://twitter.com/AloysiusTanJunH/status/1198536389207289857"
    }

    /*
    $(document).ready(function(){
      if($(window).width() > 420){
        $('#iFrame').removeAttr('srcDoc');
      }
    })
    */


    $.fn.isInViewport = function() {
      const elementTop = $(this).offset().top - ($(".descBox").height() / 2);
      const elementBottom = elementTop + $(this).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on("resize scroll", function() {
      if ($(".bio").isInViewport()) $(".bio").css({ "visibility": "visible", "opacity": "1" })
    });

  }

  render() {
    const twitterPF = "https://twitter.com/"
    const links = [twitterPF + "AloysiusTanJunH/status/1013065995856965632", twitterPF + "itsmeahloy/status/1421638975781969922"]
    const bioDir = "images_doc/whatILove/";
    const categories = ["sports", "games"];
    const top2Cat = [
      ["Basketball", "League of Legends"],
      ["Bowling","Hearthstone"],
      ["Badminton","CS GO"]
    ];
    const doLoop = categories.map((d, i) => {
      return <div key={d} className="bioBox">
        <div className="catHolder style_prevu_kit">
          <a href={links[i]} rel="noreferrer" target="_blank">
          <img className={d} src={bioDir + d + ".svg"} title={this.props.title} alt={d}/>
          </a>
        </div>
        <div className="top2">
          {top2Cat.map((data, index) => {
              return <li key={index}>{data[i]}</li>;
          })}
        </div>
      </div>;
    })

    return (<div className="bio">
    <div className="descBox descBioBox">
    <span className="pageTitle">MY BIO</span>
    <div className="description"> Currently a Year 3 SMU Information Systems undergraduate. 25 years old. These background images were photographed by me! Love me some sports, piano & games. Grateful to be featured on <a href={this.state.vidLink} rel="noreferrer" target="_blank">MINDEF</a>!</div>
    <div className="whatILove">
    {doLoop}
      {/*
      css-tricks.com/lazy-load-embedded-youtube-videos/
      stackoverflow.com/questions/34763547/youtube-maxresdefault-thumbnails

      <iframe
      id="iFrame"
      className="featVid"
      src="https://www.youtube.com/embed/0hdJsfbxzTU"
      srcDoc="<style>body{margin:0;overflow:hidden}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/0hdJsfbxzTU?autoplay=1><img src=https://img.youtube.com/vi/0hdJsfbxzTU/hqdefault.jpg alt='114/18 Officer Cadet Course Commissioning Parade: 2LT Aloysius Tan'><span>▶</span></a>"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>
      </iframe>
      */}
    </div>
    </div>
    </div>);
  }
}

export default Bio;
