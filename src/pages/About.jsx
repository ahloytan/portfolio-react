import { useSelector } from 'react-redux';

const About = () => {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const font = isDarkMode ? 'text-white' : 'text-black';
  const bg = isDarkMode ? 'bg-dark' : 'bg-light';

  const data = [
    {
      image: 'dbs.png',
      role: 'Frontend Developer',
      link: 'https://www.dbs.com.sg/',
    },
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
        "Working towards my goal as a competent software engineer, I've been picking up frontend skills such as Vue.js, React.js, D3.js, Vite, Gulp.js, Bootstrap, Tailwind, and Vuetify. For backend, I'm still learning the ropes on Node.js, Express.js, Next.js, and Java.<br/><br/>A start was to create a personal website from scratch using what I've learnt and I will showcase more learnings in future projects!"
      );
    }
  };

  return (
    <div id="about" className={`about text-sm md:text-base ${font} ${bg}`}>
      <div className="descBox">
        <div className="pageTitle">EXPERIENCE</div>
        <div className="aboutDesc description">
          <div className="experienceBox flex justify-between mb-8">
            {data.map((d, index) => (
              <div className="experience text-center" key={index}>
                <a href={d.link} target="_blank" rel="noreferrer">
                  <img className="mx-auto h-16 w-16 rounded-full" src={'assets/experience/' + d.image} alt={d.image} width="80" height="80"/>
                </a>
                <div className="role font-bold">{d.role}</div>
              </div>
            ))}
          </div>
          <div>
            Here's my {' '}
            <a href={import.meta.env.VITE_RESUME} target="_blank" rel="noreferrer">
              Résumé!
            </a>{' '}
            I'm an aspiring full-stack software engineer that enjoys coding! Currently a SEEDer at{' '} 
            <a href="https://www.dbs.com.sg/" target="_blank" rel="noreferrer">
            DBS
            </a>
            ! Previously interned at{' '}
            <a href="https://www.aimazing.co/#gref" target="_blank" rel="noreferrer">
              AImazing
            </a>{' '}
            as a Fullstack dev (2023), at {' '}
            <a href="https://surer.sg/" target="_blank" rel="noreferrer">
              Surer
            </a>{' '}
            as a Backend dev (2022) & at{' '}
            <a href="https://www.straitstimes.com/tags/interactive-graphics" target="_blank" rel="noreferrer">
              The Straits Times
            </a>{' '}
            as a Frontend dev (2018).{' '}
            <a id="readMore" onClick={readMore} href="#/">
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
