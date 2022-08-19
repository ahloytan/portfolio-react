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
    $("#readMore").remove();
    $(".aboutDesc").append("Working towards my goal as a competent software engineer, I've been picking up frontend skills such as Vue.Js, React.Js, D3.Js, Gulp.Js, Bootstrap, and SASS. For backend, I'm still learning the ropes on C#, ASP.NET Core, and Java.<br/><br/>", "A start was to create a personal website from scratch using what I've learnt and I hope to showcase more learnings in future projects!")
  }
  render() {
    return (<div className="about">
      <div className="descBox">
        <span className="pageTitle">ABOUT ME</span>
        <div className="aboutDesc description">
          <div>
            I'm an aspiring full-stack developer that enjoys coding! Recently interned at&nbsp;
            <a href="https://surer.sg/" target="_blank" >Surer</a>
            &nbsp;as a Backend Web Developer in 2022 Summer and at&nbsp;
            <a href="https://www.straitstimes.com/tags/interactive-graphics" target="_blank">The Straits Times</a>
            &nbsp;as a Frontend Web Developer back in 2018. Hmu if you need help with websites!&nbsp;
            <a id="readMore" onClick={() => this.readMore()} href="#/">Read More</a>
          </div>
          <br/>
        </div>
      </div>
    </div>);
  }
}

export default About;
