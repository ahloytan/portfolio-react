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
    $(".aboutDesc").append("Working towards my goal as a competent software engineer, I've been picking up frontend skills such as Vue.Js, React.Js, D3.Js, Gulp.Js, Bootstrap, Tailwind, and SSS. For backend, I'm still learning the ropes on Node.js, Express.js, C#, ASP.NET Core, and Java.<br/><br/>", "A start was to create a personal website from scratch using what I've learnt and I hope to showcase more learnings in future projects!")
  }
  render() {
    const data = [
      {
        image: "aimazing.jpg",
        role: "Full-stack Developer",
        link: "https://www.linkedin.com/company/aimazing/",
      },
      {
        image: "surer.png",
        role: "Backend Developer",
        link: "https://www.linkedin.com/company/surersg/",
      },
      {
        image: "straitstimes.png",
        role: "Frontend Developer",
        link: "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/06/ST-World-Cup-VRGame/index.html",
      }
    ]
    return (<div className="about">
      <div className="descBox">
        <span className="pageTitle">EXPERIENCE</span>
        <div className="aboutDesc description">
          <div className="experienceBox">
            {data.map((d, index) => {
                return <div className="experience" key={index}>
                  <a href={d.link} target="_blank" rel="noreferrer">
                    <img src={"images_doc/experience/" + d.image} alt={d.image}/>
                  </a>
                  <div className="role">{d.role}</div>
                </div>;
            })}
          </div>
          <div>
            I'm an aspiring full-stack software engineer that enjoys coding! Currently interning at 
            <a href="https://www.aimazing.co/#gref" target="_blank" rel="noreferrer"> AImazing</a> as a Fullstack Developer. Interned at
            <a href="https://surer.sg/" target="_blank" rel="noreferrer"> Surer</a>
            &nbsp;as a Backend Developer in 2022 Summer & at
            <a href="https://www.straitstimes.com/tags/interactive-graphics" target="_blank" rel="noreferrer"> The Straits Times</a>
            &nbsp;as a Frontend Developer back in 2018.
            <a id="readMore" onClick={() => this.readMore()} href="#/"> Read More</a>
          </div>
          <br/>
        </div>
      </div>
    </div>);
  }
}

export default About;
