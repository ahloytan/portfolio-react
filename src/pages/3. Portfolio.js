import React from 'react';
import $ from 'jquery';
import Slider from "react-slick";

//https://react-slick.neostack.com/docs/example/auto-play-methods/
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }
  onHover(input) {
    $('#d' + input).toggle();
  }
  play() {
   this.slider.slickPlay();
  }
  render() {
    var settings = {
      dots: true,
      speed: 750,
      infinite: true,
      // autoplay: true,
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
            swipeToSlide: true
          }
        }, {
          breakpoint: 1150,
          settings: {
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            swipeToSlide: true
          }
        }, {
          breakpoint: 1550,
          settings: {
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            swipeToSlide: true
          }
        }
      ]
    };

    var pfDir = "images_doc/carousel/";
    var linkDir = "https://";
    var straitsTimes = "graphics.straitstimes.com/STI/STIMEDIA/Interactives/";
    var title = [
      "In Between",
      "Twitter Retweet Bot",
      "Gender Paygap",
      "Christmas Lights On or Off?",
      "World Cup 2018",
      "Hongbao Draw 2018",
      "Budget Breakdown 2018",
      "Trump Kim A to Z Guide",
      "Uncle, who you calling Auntie?",
      "Singapore Public Holidays 2018",
      "Trump vs Kim : Who Said What",
      "SRC x Locomole",
    ];
    var links = [
      "inbetween2.web.app",
      "github.com/ahloytan/twitter-retweet-bot",
      straitsTimes + "2018/03/dataSTories-gender-pay-gap/index.html",
      straitsTimes + "2017/12/christmas-light-up/index.html",
      straitsTimes + "2018/06/ST-World-Cup-VRGame/index.html",
      straitsTimes + "2018/02/toto-hongbao-historical/index.html",
      straitsTimes + "2018/06/Trump-Kim-A-to-Z/index.html",
      straitsTimes + "2018/02/singapore-budget-revenue-and-spending-breakdown-2018/index.html",
      straitsTimes + "2018/03/uncle-who-are-you-calling-auntie/index.html",
      straitsTimes + "2018/04/data-story-public-holidays/index.html",
      straitsTimes + "2018/06/guess-what-Kim-Trump-said/index.html",
      "youtu.be/KBd7YxGKDiA",
    ];
    var desc =[
      "Made a web application of the popular card game “in-between” to calculate the probability of winning, losing, and drawing when shown 2 cards (Based on the standard 52-card deck)",
      "A simple bot (automation) used to retweet/unretweet NFT giveaway tweets from Twitter. Built with Python and RobotFramework",
      "Data-fueled interactive that shows the average pay difference between male and female across different industries! Quite cool because it's new knowledge and it involved me using D3.Js!",
      "My 1st interactive project as an intern that showcased the 'highlights' in Orchard Road during the 2018 Christmas, represented as a quiz! Was really proud because it turned out very pretty!",
      "One of a kind project that I'm proud to work on. We used WebGL as an interactive for users to 'play' in the 2018 world cup.",
      "Quite fun to use statistics of past winnings to show 'places' with higher win rates. Quite informative if you want to try and win the next TOTO prize!",
      "I still remember staying very late after working hours to finish a series of Trump-Kim interactives because it was drawing a lot of attention and Singaporeans were very interested in both leaders",
      "Tried my best to understand the orginal code because it was reused for 2016 & 2017 but it was very complicated. I learned a lot thou, it helped when I was doing other data visualisation interactives",
      "Short quiz just to see how uncle or auntie you are!",
      "First time using D3.Js extensively with some jquery/css effects. Well after it went live then I realised I made some mistakes in the code.. That's why if you look at it long enough, you'll see that it's a little buggy. Welp",
      "Just 1 of the quizzes during the Trump-Kim Summit back in 2018",
      "A short promotional film on the various attractions along the Singapore River with LocoMole! Scenery was dope and I tried my best to capture it all!",
    ]
    var image = ["inbetween", "retweet", "gendergap","christmas","worldcup","hongbao","a-to-z","budget","funquiz","holidays","whosaywhat","src"];
    var doLoop = title.map((d, i) => {
      return <div className="carouselHolder" key={i}>
      <div className="carouselTitle">{d}</div>
      <a href={linkDir + links[i]} rel="noreferrer" target="_blank">
      <div className="itemHolder">
        <img id={i} src={pfDir + image[i] + ".jpg"} rel="noreferrer" onMouseEnter={() => this.onHover(i)} alt={image[i]}/>
        <div id={"d" + i} className="desc" onMouseLeave={() => this.onHover(i)}>
          <p>{desc[i]}</p>
        </div>
      </div>
      </a>
      </div>
    });

    return (<div className="portfolio">
    <span className="pageTitle">PORTFOLIO</span>
    <p>Click on the images to find out more!</p>
    <Slider ref={slider => (this.slider = slider)} {...settings}>
    {doLoop}
    </Slider>
    </div>);
  }
}

export default Portfolio;
