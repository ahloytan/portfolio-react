import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const font = isDarkMode ? 'text-white' : 'text-black';
  const bg = isDarkMode ? 'bg-dark' : 'bg-light';

  const data = [
    {
      image: 'aimazing.jpg',
      role: 'Full-stack Developer',
      link: 'https://www.linkedin.com/company/aimazing/',
    },
    {
      image: 'surer.png',
      role: 'Backend Developer',
      link: 'https://www.linkedin.com/company/surersg/',
    },
    {
      image: 'straitstimes.jpg',
      role: 'Frontend Developer',
      link: 'https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/06/ST-World-Cup-VRGame/index.html',
    },
  ];

  const readMore = () => {
    const readMoreElement = document.getElementById('readMore');
    const aboutDescElement = document.querySelector('.aboutDesc');
    if (readMoreElement && aboutDescElement) {
      readMoreElement.remove();
      aboutDescElement.insertAdjacentHTML(
        'beforeend',
        "Working towards my goal as a competent software engineer, I've been picking up frontend skills such as Vue.Js, React.Js, D3.Js, Gulp.Js, Bootstrap, Tailwind, and Vuetify. For backend, I'm still learning the ropes on Node.js, Express.js, C#, ASP.NET Core, and Java.<br/><br/>A start was to create a personal website from scratch using what I've learnt and I hope to showcase more learnings in future projects!"
      );
    }
  };

  return (
    <div className={`about ${font} ${bg}`}>
      <div className="descBox">
        <span className="pageTitle">EXPERIENCE</span>
        <div className="aboutDesc description">
          <div className="experienceBox flex justify-between mb-8">
            {data.map((d, index) => (
              <div className="experience text-center" key={index}>
                <a href={d.link} target="_blank" rel="noreferrer">
                  <img className="mx-auto h-20 w-20 rounded-full" src={'assets/experience/' + d.image} alt={d.image} />
                </a>
                <div className="role font-bold">{d.role}</div>
              </div>
            ))}
          </div>
          <div>
            I'm an aspiring full-stack software engineer that enjoys coding! Currently interning at{' '}
            <a href="https://www.aimazing.co/#gref" target="_blank" rel="noreferrer">
              AImazing
            </a>{' '}
            as a Fullstack Developer. Interned at{' '}
            <a href="https://surer.sg/" target="_blank" rel="noreferrer">
              Surer
            </a>{' '}
            as a Backend Developer in 2022 Summer & at{' '}
            <a href="https://www.straitstimes.com/tags/interactive-graphics" target="_blank" rel="noreferrer">
              The Straits Times
            </a>{' '}
            as a Frontend Developer back in 2018.
            <a id="readMore" onClick={readMore} href="#/">
              {' '}
              Read More
            </a>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
