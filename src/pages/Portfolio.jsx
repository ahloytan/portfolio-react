import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoadingScreen } from '../store/index';
import { isMobile } from './../mixins/helper.jsx';

import SkeletonLoader from '../components/SkeletonLoader.jsx';

const Portfolio = () => {
  const [portfolioMaxHeight, setPortfolioMaxHeight] = useState(1000);
  const [portfolioHeight, setPortfolioHeight] = useState(1000);
  const isLoading = useSelector((state) => state.app.loading);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const [hoveredNFT, setHoveredNFT] = useState(null);
  const font = isDarkMode ? 'text-white' : 'text-black';
  const bg = isDarkMode ? 'bg-dark' : 'bg-light';
  const pfDir = 'assets/carousel/';
  const linkDir = 'https://';
  const straitsTimes = 'graphics.straitstimes.com/STI/STIMEDIA/Interactives/';

  const nft = [
    {
      img: 'khk',
      text: 'Styling',
      children: [
        {
          img: 'tailwind',
          text: 'Tailwind'
        },
        {
          img: 'vuetify',
          text: 'Vuetify'
        },
        {
          img: 'buefy',
          text: 'Buefy'
        },
        {
          img: 'bootstrap',
          text: 'Bootstrap'
        },
      ]
    },
    {
      img: 'dpgc',
      text: 'Frontend',
      children: [
        {
          img: 'vue',
          text: 'Vue'
        },
        {
          img: 'angular',
          text: 'Angular'
        },
        {
          img: 'react',
          text: 'React'
        },
      ]
    },
    {
      img: 'hedera-monkey',
      text: 'Backend',
      children: [
        {
          img: 'nodejs',
          text: 'NodeJs'
        },
        {
          img: 'javascript',
          text: 'Express'
        },
        {
          img: 'flask',
          text: 'Flask'
        }
      ]      
    },
    {
      img: 'herd',
      text: 'Database',
      children: [
        {
          img: 'mysql',
          text: 'MySQL'
        },
        {
          img: 'postgres',
          text: 'Postgres'
        },  
      ]   
    },
    {
      img: 'boon',
      text: 'Deploy',
      children: [
        {
          img: 'firebase',
          text: 'Firebase'
        },
        {
          img: 'vercel',
          text: 'Vercel'
        },
        {
          img: 'netlify',
          text: 'Netlify'
        }, 
      ]   
    },
    {
      img: 'skult',
      text: 'Others',
      children: [
        {
          img: 'robot-framework',
          text: 'Robot'
        },
        {
          img: 'python',
          text: 'Python'
        },  
        {
          img: 'github',
          text: 'Github'
        },
        {
          img: 'vite',
          text: 'Vite'
        },  
      ]   
    },
  ]

  const projects = [
    {
      title: 'Twitter Retweet Bot',
      link: 'github.com/ahloytan/twitter-retweet-bot#demonstration',
      desc: 'A simple bot (automation) used to retweet/unretweet NFT giveaway tweets from Twitter. No more manual clicking!',
      img: 'twitter-giveaway',
      icons: [
        { icon: 'github', link: 'github.com/ahloytan/twitter-retweet-bot' },
        { icon: 'robot-framework' },
        { icon: 'python' },
        { icon: 'batch' }
      ],
      order: 1
    },
    {
      title: 'Angular Lab',
      link: 'ng-obs.vercel.app',
      desc: 'A space where I quickly build and test proof-of-concept ideas that I implement into actual features as part of my software engineering work at DBS.',
      img: 'angular-lab',
      icons: [
        { icon: 'github', link: 'https://github.com/ahloytan/angular-lab' },
        { icon: 'angular' },
        { icon: 'tailwind' },
        { icon: 'vercel' }
      ],
      order: 4
    },
    {
      title: 'The Next Big Hit',
      link: `is428-va.vercel.app`,
      desc: 'Visualised using D3.js and integrated with Spotify API, this project aims to unravel the complexities behind chart-toppers on Spotify, shedding light on the multifaceted dynamics driving music trends.',
      img: 'is428',
      icons: [
        { icon: 'github', link: `github.com/sophiaaachow/is428-g2t1` },
        { icon: 'react' },
        { icon: 'd3' },
        { icon: 'spotify' }
      ],
      order: 5
    },

    {
      title: 'Hongbao Draw 2018',
      link: `${straitsTimes}2018/02/toto-hongbao-historical/index.html`,
      desc: 'Data backed statistics of past winnings to show "places" with higher win rates. Quite informative if you want to win the next TOTO prize!',
      img: 'hongbao',
      icons: [
        { icon: 'the-straits-times', link: `${straitsTimes}2018/02/toto-hongbao-historical/index.html` },
        { icon: 'vue' },
        { icon: 'google-maps' },
        { icon: 'javascript' }
      ],
      order: 6
    },
    {
      title: 'CakeDeFi Masternode',
      link: `themasternode.vercel.app`,
      desc: 'Simple web application to track the masternodes (DefiChain) on CakeDefi and to convert the total sums into various currencies. Deployed on Vercel!',
      img: 'cakedefi-masternode',
      icons: [
        { icon: 'github', link: `github.com/ahloytan/cakedefi-masternode` },
        { icon: 'react' },
        { icon: 'nodejs' },
        { icon: 'vercel' }
      ],
      order: 10
    },
    {
      title: 'SG Public Holidays 2018',
      link: `${straitsTimes}2018/04/data-story-public-holidays/index.html`,
      desc: 'Utilised D3.Js with JQuery & css effects to visualise the various holidays in Singapore back in 2018',
      img: 'holidays',
      icons: [
        { icon: 'the-straits-times', link: `${straitsTimes}2018/04/data-story-public-holidays/index.html` },
        { icon: 'vue' },
        { icon: 'd3' },
        { icon: 'jquery' }
      ],
      order: 19
    },
    {
      title: 'Mini Yahoo Finance',
      link: 'mini-yfinance.vercel.app',
      desc: 'Built a minified version of Yahoo Finance to serve my brother\'s needs for specific & centralised financial data for his investment planning',
      img: 'mini-yfinance',
      icons: [
        { icon: 'github', link: 'github.com/ahloytan/mini-yfinance' },
        { icon: 'vue' },
        { icon: 'flask' },
        { icon: 'vercel' }
      ],
      order: 3
    },
    {
      title: 'Corny Cohbs',
      link: `corny-cohbs-dev.web.app/`,
      desc: 'Corny Cohbs Web3 NFT project. Web3 Hedera Hashgraph NFT customer front facing website built using Vue 3 + Tailwind CSS in 1.5days',
      img: 'corny-cobhs',
      icons: [
        { icon: 'github', link: `github.com/ahloytan/Corny-Cohbs` },
        { icon: 'vue' },
        { icon: 'tailwind' },
        { icon: 'firebase' }
      ],
      order: 7
    },
    {
      title: 'Budget Breakdown 2018',
      link: `${straitsTimes}2018/02/singapore-budget-revenue-and-spending-breakdown-2018/index.html`,
      desc: 'Visualised the 2018 Singapore revenue & spending with D3.js. Filters include year comparison and sector breakdown by spending',
      img: 'budget',
      icons: [
        { icon: 'the-straits-times', link: `${straitsTimes}2018/02/singapore-budget-revenue-and-spending-breakdown-2018/index.html` },
        { icon: 'vue' },
        { icon: 'd3' },
        { icon: 'javascript' }
      ],
      order: 21
    },
    {
      title: 'Christmas Lights On or Off?',
      link: `${straitsTimes}2017/12/christmas-light-up/index.html`,
      desc: 'My 1st interactive project as an intern that showcased the "highlights" in Orchard Road during 2018 Christmas, represented as a quiz! Was really proud because it turned out pretty!',
      img: 'christmas',
      icons: [
        { icon: 'the-straits-times', link: `${straitsTimes}2017/12/christmas-light-up/index.html` },
        { icon: 'vue' },
        { icon: 'javascript' },
        { icon: 'scss' }
      ],
      order: 8
    },
    {
      title: 'Trump vs Kim: Who Said What',
      link: `${straitsTimes}2018/06/guess-what-Kim-Trump-said/index.html`,
      desc: 'A short quiz about identifying a phrase and guessing which leader said it. Users get to view their results against other players\' guesses',
      img: 'whosaywhat',
      icons: [
        { icon: 'the-straits-times', link: `${straitsTimes}2018/06/guess-what-Kim-Trump-said/index.html` },
        { icon: 'vue' },
        { icon: 'firebase' },
        { icon: 'axios' }
      ],
      order: 9
    },
    {
      title: 'DBS TechTrek Hackathon 2024',
      link: 'dbs-t10.vercel.app/auth/login',
      desc: 'A proof of concept full-stack web application. Additional features include: Supabase, Telegram bot, and LLM integration',
      img: 'dbs',
      icons: [
        { icon: 'github', link: 'github.com/ahloytan/dbs-techtrek' },
        { icon: 'next-js' },
        { icon: 'nodejs' },
        { icon: 'supabase' }
      ],
      order: 2
    },
    {
      title: 'Corporate Pass Application',
      link: `github.com/chewyixin99/is442-oop-22`,
      desc: 'An automated system for Singapore Sports School to manage their corporate pass bookings, replacing the manual and labor-intensive process currently used by the staff. The system aims to streamline operations, reduce workload, and minimize the potential for human errors in the booking process.',
      img: 'oop',
      icons: [
        { icon: 'vue', link: `github.com/chewyixin99/is442-oop-22` },
        { icon: 'springboot' },
        { icon: 'mysql' },
        { icon: 'bootstrap' }
      ],
      order: 11
    },
    {
      title: 'Spot On English School',
      link: 'spotonenglishschool.net',
      desc: 'SPA built for a tuition center using Nuxt.js and Tailwind. Focus is on delivering a clean UI to showcase classes, schedules, and key information for students and parents.',
      img: 'spot-on-eng-sch',
      icons: [
        { icon: 'nuxt'},
        { icon: 'tailwind' },
        { icon: 'vercel' }
      ],
      order: 12
    },
    {
      title: 'World Cup 2018',
      link: `${straitsTimes}2018/06/ST-World-Cup-VRGame/index.html`,
      desc: 'One of a kind project that I\'m proud to work on. We used WebGL as an interactive for users to "play" in the 2018 world cup.',
      img: 'worldcup',
      icons: [
        { icon: 'the-straits-times', link: `${straitsTimes}2018/06/ST-World-Cup-VRGame/index.html` },
        { icon: 'vue' },
        { icon: 'unity' },
        { icon: 'javascript' }
      ],
      order: 13
    },
    {
      title: 'Sun Hung Kai Properties',
      link: `www.shkp.com/en-US/about-us`,
      desc: 'Developed transaction query page for a prominent property developer in Hong Kong within 2 weeks. Closely involved with the development and deployment of the UAT.',
      img: 'shkp',
      icons: [
        { icon: 'postgres' },
        { icon: 'vuetify' },
        { icon: 'vue' },
        { icon: 'nodejs' }
      ],
      order: 14
    },
    {
      title: 'Saltine Web Application Platform (SWAP)',
      link: `swap-teamI.vercel.app`,
      desc: 'Developed prototype for Saltine Communications, a public relations start-up as part of their digital transformation strategy. Integrated with ChatGPT 4 + Telegram Bot API. Emerged champion among 5 teams, earning a $400 Amazon gift card.',
      img: 'saltine',
      icons: [
        { icon: 'github', link: `github.com/ahloytan/is425-saltine` },
        { icon: 'vue' },
        { icon: 'bootstrap' },
        { icon: 'vercel' }
      ],
      order: 15
    },
    {
      title: 'In Between',
      link: 'inbetween2.web.app',
      desc: 'Made a web application of the popular card game “in-between” to calculate the probability of winning, losing, and drawing when shown 2 cards (Based on the standard 52-card deck)',
      img: 'in-between',
      icons: [
        { icon: 'github', link: 'github.com/ahloytan/in-between' },
        { icon: 'vue' },
        { icon: 'firebase' },
        { icon: 'scss' }
      ],
      order: 16
    },
    {
      title: 'Taskucci',
      link: `github.com/karissekjw/wad2-G8T1-frontend`,
      desc: 'A web application project and spin-off based on 2 popular project management tool, Jira & Trello. Integrated with Slack!',
      img: 'taskucci',
      icons: [
        { icon: 'vue', link: `github.com/karissekjw/wad2-G8T1-frontend` },
        { icon: 'buefy' },
        { icon: 'flask' },
        { icon: 'mysql' }
      ],
      order: 17
    },
    {
      title: 'Orange Dolphin',
      link: 'https://orangedolphin.web.app/',
      desc: 'Revamped Orange Dolphin\'s website from their wordpress blog using Vue + Bootstrap. Hosted on Firebase ',
      img: 'od',
      icons: [
        { icon: 'github', link: 'https://github.com/ahloytan/od-revamp' },
        { icon: 'vue' },
        { icon: 'bootstrap' },
        { icon: 'firebase' }
      ],
      order: 18
    },
    {
      title: 'Gender Paygap',
      link: `${straitsTimes}2018/03/dataSTories-gender-pay-gap/index.html`,
      desc: 'Data-fueled interactive that shows the average pay difference between male and female across different industries!',
      img: 'gendergap',
      icons: [
        { icon: 'the-straits-times', link: `${straitsTimes}2018/03/dataSTories-gender-pay-gap/index.html` },
        { icon: 'vue' },
        { icon: 'd3' },
        { icon: 'css' }
      ],
      order: 20
    },
  ];

  const viewMore = () => {
    document.getElementById('portfolio').style.maxHeight = portfolioHeight + (portfolioMaxHeight / 4) + 'px';
    setPortfolioHeight((prev) => prev + (portfolioMaxHeight / 4));
  };

  useEffect(() => {
    dispatch(toggleLoadingScreen(false));
    setPortfolioMaxHeight(document.getElementById('theColumn')?.offsetHeight);
    if (portfolioHeight > portfolioMaxHeight) document.getElementById('portfolio').classList.add('expanded');
  }, [projects])

  useEffect(() => {
    document.getElementById('portfolio').classList.toggle('dark-shadow', isDarkMode);
  }, [isDarkMode]);

  const nfts = nft.map((cat, index) => (
    <div key={index} 
      className={hoveredNFT === cat.img || hoveredNFT == null ? '' : 'notHovered'} 
      onMouseEnter={() => setHoveredNFT(cat.img)} 
    >
      <div>
        <img className="nft" src={`assets/icons/tab/${cat.img}.webp`} alt="" />
        <span className="text-sm font-bold">{cat.text}</span>
      </div>

      <div className={`portfolioIconHolder ${hoveredNFT === cat.img ? 'hovered': 'notHovered'}`}>
        {
          cat.children.map((lang, index1) => (
            <div key={index1}>
              <img className="portfolioIcon" src={`assets/icons/${lang.img}.svg`} alt="" />
              <span className="text-sm">{lang.text}</span>
            </div>
          ))
        }
      </div>
    </div>
  ))

  const sortedProjects = useMemo(() => {
    if (isMobile) {
      return [...projects].sort((a, b) => a.order - b.order);
    }

    return projects
  }, [projects, isMobile]);

  const doLoop = sortedProjects.map((project, index) => (
    <div className="pb-8 rounded" key={index}>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="overflow-auto">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
            <a href={linkDir + project.link} rel="noreferrer" target="_blank" alt={project.img}>
              <img className="w-full" src={pfDir + project.img + '.webp'} alt={project.img} width="450" height="350" />
            </a>
            <p className="text-justify text-gray-700 dark:text-gray-400 mt-4">{project.desc}</p>
            {project.icons.map((icon, index) => (
              icon.link ? (
                <a href={linkDir + icon.link} key={icon.icon + index} rel="noreferrer" target="_blank" alt={project.img}>
                  <img className="portfolioIcons" src={`assets/icons/${icon.icon}.svg`} alt={icon.icon} title={icon.icon} width="40" height="40"/>
                </a>
              ) : (
                <img className="portfolioIcons" src={`assets/icons/${icon.icon}.svg`} alt={icon.icon} key={icon.icon + index} title={icon.icon} width="40" height="40"/>
              )
            ))}
          </div>
      </div>
    </div>
  ));

  return (
    <div id="portfolio" className={`portfolio ${font} ${bg}`}>
      <h1 className="pageTitle">PORTFOLIO</h1>
      <p className="text-sm md:text-base">Hover and click on the images to find out more!</p>
      <div className="nftsContainer" onMouseLeave={() => setHoveredNFT(null)} >{nfts}</div>
      {isLoading && <SkeletonLoader/>}
      {!isLoading && <div id="theColumn" className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 mt-6">{doLoop}</div>}
      {(portfolioHeight < portfolioMaxHeight) && <div id="viewMore" onClick={viewMore}>View More</div>}
    </div>
  );
};

export default Portfolio;
