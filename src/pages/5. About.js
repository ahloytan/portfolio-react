import React from 'react';
import $ from 'jquery';

class About extends React.Component {
  constructor(props) {
    super(props)
    $(window).on("resize scroll", function() {
      if ($(".about").isInViewport()){
        $(".about").css({
          "visibility": "visible",
          "opacity": "1"
        })
      }
    });
  }
  readMore() {
    $(".aboutDesc a").remove();
    $(".aboutDesc").append("To fuel my passion, I've been picking up skills such as Vue.Js, D3.Js, Gulp.Js, React.Js, Bootstrap & SASS. I've been mastering ways to create sustainable & reusable projects, and what better platform to show my interests than to create a personal website from scratch?!<br/><br/>", "I've also been improving on my core basics like HTML, CSS & Javascript by figuring out new and more efficient methods.<br/><br/>", "Totalling about 8 months, I was given opportunities to showcase my skills in 10 projects which you can browse through in the next section!")
  }
  render() {
    return (<div className="about">
      <div className="descBox">
        <span className="pageTitle">ABOUT ME</span>
        <div className="aboutDesc description">
          <div>I love coding dood. I even extended my internship at Singapore Press Holdings as a Web Developer. Hmu if you need help with websites!&nbsp;
            <a onClick={() => this.readMore()} href="#/">Read More</a>
          </div>
          <br/>
        </div>
      </div>
    </div>);
  }
}

export default About;
