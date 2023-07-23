import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleExpanded } from '../store/index';

const Portfolio = () => {
  const expanded = useSelector((state) => state.app.expanded);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const font = isDarkMode ? 'text-white' : 'text-black';
  const bg = isDarkMode ? 'bg-dark' : 'bg-light';
  const pfDir = 'assets/carousel/';
  const linkDir = 'https://';
  const straitsTimes = 'graphics.straitstimes.com/STI/STIMEDIA/Interactives/';

  const projects = [
    {
      title: 'Twitter Retweet Bot',
      link: 'https://github.com/ahloytan/twitter-retweet-bot#demonstration',
      desc: 'A simple bot (automation) used to retweet/unretweet NFT giveaway tweets from Twitter. No more manual clicking!',
      img: 'twitter-giveaway',
      icons: [
        { icon: 'github', link: 'github.com/ahloytan/twitter-retweet-bot' },
        { icon: 'robot-framework' },
        { icon: 'python' },
        { icon: 'batch' }
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      title: 'In Between',
      link: 'inbetween2.web.app',
      desc: 'Made a web application of the popular card game “in-between” to calculate the probability of winning, losing, and drawing when shown 2 cards (Based on the standard 52-card deck)',
      img: 'in-between',
      icons: [
        { icon: 'github', link: 'inbetween2.web.app' },
        { icon: 'vue' },
        { icon: 'firebase' },
        { icon: 'scss' }
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      title: 'Corny Cohbs',
      link: `www.youtube.com/watch?v=fcZXfoB2f70`,
      desc: 'Corny Cohbs Web3 NFT project. Web3 Hedera Hashgraph NFT customer front facing website built using Vue 3 + Tailwind CSS in 1.5days',
      img: 'corny-cobhs',
      icons: [
        { icon: 'github', link: `www.youtube.com/watch?v=fcZXfoB2f70` },
        { icon: 'vue' },
        { icon: 'tailwind' },
        { icon: 'firebase' }
      ]
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
      ]
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
      ]
    },
    {
      title: 'Portfolio',
      link: 'ahloytan.netlify.app',
      desc: '3rd iteration of my personal portfolio website. Building and upgrading my portfolio website using React JS, Redux, Vite, and Netlify!',
      img: 'portfolio',
      icons: [
        { icon: 'github', link: 'github.com/ahloytan/portfolio-react' },
        { icon: 'react' },
        { icon: 'tailwind' },
        { icon: 'netlify' }
      ]
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
      ]
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
      ]
    },
    {
      title: 'SRC x Locomole',
      link: 'youtu.be/KBd7YxGKDiA',
      desc: 'A short promotional film on the various attractions along the Singapore River with LocoMole! Scenery was dope and I tried my best to capture it all!',
      img: 'src',
      icons: [
        { icon: 'youtube', link: 'youtu.be/KBd7YxGKDiA' },
        { icon: 'premiere-pro' },
        { icon: 'locomole' },
        { icon: 'canva' }
      ]
    }
  ];

  const expandPortfolio = () => {
    dispatch(toggleExpanded());
    document.getElementById('portfolio').style.maxHeight = '10000px';
  };

  useEffect(() => {
    const portfolioDiv = document.getElementById('portfolio');
    portfolioDiv.classList.toggle('expanded', expanded);
    portfolioDiv.classList.toggle('dark-shadow', isDarkMode);
  }, [expanded, isDarkMode]);

  const doLoop = projects.map((project, index) => (
    <div className="pb-8 rounded" key={index}>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="overflow-auto">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
            <a href={linkDir + project.link} rel="noreferrer" target="_blank">
              <img className="w-full" src={pfDir + project.img + '.jpg'} />
            </a>
            <p className="text-justify text-gray-700 dark:text-gray-400 mt-4">{project.desc}</p>
            {project.icons.map((icon, index) => (
              icon.link ? (
                <a href={linkDir + icon.link} key={icon.icon + index} rel="noreferrer" target="_blank">
                  <img className="portfolioIcons" src={`assets/icons/${icon.icon}.svg`} alt={icon.icon} title={icon.icon} />
                </a>
              ) : (
                <img className="portfolioIcons" src={`assets/icons/${icon.icon}.svg`} alt={icon.icon} key={icon.icon + index} title={icon.icon} />
              )
            ))}
          </div>
      </div>
    </div>
  ));

  return (
    <div id="portfolio" className={`portfolio ${font} ${bg}`}>
      <span className="pageTitle">PORTFOLIO</span>
      <p className="text-sm md:text-base">Click on the images to find out more!</p>
      <div id="theColumn" className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 mt-6">
        {doLoop}
      </div>
      {!expanded && <div id="viewMore" onClick={expandPortfolio}>View More</div>}
    </div>
  );
};

export default Portfolio;
