import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';

//https://react-slick.neostack.com/docs/example/auto-play-methods/
const Portfolio = () => {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const font = isDarkMode ? 'text-white' : 'text-black';
  const bg = isDarkMode ? 'bg-dark' : 'bg-light';
  const [hoveredItem, setHoveredItem] = useState(null);
  const sliderRef = useRef(null);

  const onHover = (index) => setHoveredItem(index === hoveredItem ? null : index);

  const settings = {
    dots: true,
    speed: 750,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 1550,
        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 2,
          swipeToSlide: true,
        },
      },
    ],
  };

  const pfDir = 'assets/carousel/';
  const linkDir = 'https://';
  const straitsTimes = 'graphics.straitstimes.com/STI/STIMEDIA/Interactives/';
  const data = [
    {
      title: 'Twitter Retweet Bot',
      link: 'github.com/ahloytan/twitter-retweet-bot',
      desc: 'A simple bot (automation) used to retweet/unretweet NFT giveaway tweets from Twitter. Built with Python and RobotFramework',
      img: 'retweet',
    },
    {
      title: 'In Between',
      link: 'inbetween2.web.app',
      desc: 'Made a web application of the popular card game “in-between” to calculate the probability of winning, losing, and drawing when shown 2 cards (Based on the standard 52-card deck)',
      img: 'inbetween',
    },
    {
      title: 'Gender Paygap',
      link: `${straitsTimes}2018/03/dataSTories-gender-pay-gap/index.html`,
      desc: "Data-fueled interactive that shows the average pay difference between male and female across different industries! Quite cool because it's new knowledge and it involved me using D3.Js!",
      img: 'gendergap',
    },
    {
      title: 'World Cup 2018',
      link: `${straitsTimes}2018/06/ST-World-Cup-VRGame/index.html`,
      desc: 'One of a kind project that I\'m proud to work on. We used WebGL as an interactive for users to "play" in the 2018 world cup.',
      img: 'worldcup',
    },
    {
      title: 'Christmas Lights On or Off?',
      link: `${straitsTimes}2017/12/christmas-light-up/index.html`,
      desc: 'My 1st interactive project as an intern that showcased the "highlights" in Orchard Road during the 2018 Christmas, represented as a quiz! Was really proud because it turned out very pretty!',
      img: 'christmas',
    },
    {
      title: 'Hongbao Draw 2018',
      link: `${straitsTimes}2018/02/toto-hongbao-historical/index.html`,
      desc: 'Quite fun to use statistics of past winnings to show "places" with higher win rates. Quite informative if you want to try and win the next TOTO prize!',
      img: 'hongbao',
    },
    {
      title: 'Trump Kim A to Z Guide',
      link: `${straitsTimes}2018/06/Trump-Kim-A-to-Z/index.html`,
      desc: 'I still remember staying very late after working hours to finish a series of Trump-Kim interactives because it was drawing a lot of attention and Singaporeans were very interested in both leaders',
      img: 'a-to-z',
    },
    {
      title: 'Budget Breakdown 2018',
      link: `${straitsTimes}2018/02/singapore-budget-revenue-and-spending-breakdown-2018/index.html`,
      desc: 'Tried my best to understand the orginal code because it was reused for 2016 & 2017 but it was very complicated. I learned a lot thou, it helped when I was doing other data visualisation interactives',
      img: 'budget',
    },
    {
      title: 'Uncle, who you calling Auntie?',
      link: `${straitsTimes}2018/03/uncle-who-are-you-calling-auntie/index.html`,
      desc: 'Short quiz just to see how uncle or auntie you are!',
      img: 'funquiz',
    },
    {
      title: 'Singapore Public Holidays 2018',
      link: `${straitsTimes}2018/04/data-story-public-holidays/index.html`,
      desc: 'First time using D3.Js with some jquery/css effects. Well after it went live then I realised I made some mistakes in the code.. That\'s why if you look at it long enough, you\'ll see that it\'s a little buggy. Welp',
      img: 'holidays',
    },
    {
      title: 'Trump vs Kim : Who Said What',
      link: `${straitsTimes}2018/06/guess-what-Kim-Trump-said/index.html`,
      desc: 'Just 1 of the quizzes during the Trump-Kim Summit back in 2018',
      img: 'whosaywhat',
    },
    {
      title: 'SRC x Locomole',
      link: 'youtu.be/KBd7YxGKDiA',
      desc: 'A short promotional film on the various attractions along the Singapore River with LocoMole! Scenery was dope and I tried my best to capture it all!',
      img: 'src',
    },
  ];

  const doLoop = data.map((d, i) => (
    <div className="relative" key={i}>
      <div className="text-base p-1.5">{d.title}</div>
      <a href={linkDir + d.link} rel="noreferrer" target="_blank">
        <div className="relative">
          <img
            id={i}
            src={pfDir + d.img + '.jpg'}
            rel="noreferrer"
            onMouseEnter={() => onHover(i)}
            onMouseLeave={() => onHover(null)}
            alt={d.img}
          />
          {hoveredItem === i && (
            <div className="desc">
              <p>{d.desc}</p>
            </div>
          )}
        </div>
      </a>
    </div>
  ));

  return (
    <div id="portfolio" className={`portfolio ${font} ${bg}`}>
      <span className="pageTitle">PORTFOLIO</span>
      <p>Click on the images to find out more!</p>
      <Slider ref={sliderRef} {...settings}>
        {doLoop}
      </Slider>
    </div>
  );
};

export default Portfolio;
