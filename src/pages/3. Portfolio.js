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
      speed: 500,
      infinite: true,
      autoplay: true,
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
    var endLinkDir = "/index.html";
    var straitsTimes = "graphics.straitstimes.com/STI/STIMEDIA/Interactives/";
    var title = [
      "SRC x Locomole",
      "Gender Paygap",
      "Christmas Lights On or Off?",
      "World Cup 2018",
      "Hongbao Draw 2018",
      "Budget Breakdown 2018",
      "Straits Times Premium Page",
      "Trump Kim A to Z Guide",
      "Uncle, who you calling Auntie?",
      "Singapore Public Holidays 2018",
      "Trump vs Kim : Who Said What",
      "FCP x Locomole",
      "LPS x Locomole"
    ];
    var links = [
      "youtu.be/KBd7YxGKDiA",
      straitsTimes + "2018/03/dataSTories-gender-pay-gap",
      straitsTimes + "2017/12/christmas-light-up",
      straitsTimes + "2018/06/ST-World-Cup-VRGame",
      straitsTimes + "2018/02/toto-hongbao-historical",
      straitsTimes + "2018/06/Trump-Kim-A-to-Z",
      straitsTimes + "2018/02/singapore-budget-revenue-and-spending-breakdown-2018",
      straitsTimes + "2018/02/st-premium",
      straitsTimes + "2018/03/uncle-who-are-you-calling-auntie",
      straitsTimes + "2018/04/data-story-public-holidays",
      straitsTimes + "2018/06/guess-what-Kim-Trump-said",
      "youtu.be/j0_UulNoNFQ",
      "youtu.be/qnF8DtiqDrA"
    ];
    var desc =[
      "Did a short film on the various attractions along the Singapore River as a project with LocoMole! Scenery was pretty dope and I tried my best to capture it all! Part of the SMU-X initiative",
      "Data-fueled interactive that shows the average pay difference between male and female across different industries! Quite cool because it's new knowledge and it involved me using D3.Js in it!",
      "My true 1st interactive project as an intern that showcased the 'highlights' in Orchard Road during the 2018 Christmas, represented as a quiz! Was really proud because it turned out very pretty!",
      "One of a kind project that I'm proud to work on. We used WebGL as an interactive for users to 'play' along in the 2018 world cup. Explore it out! It's honestly something different",
      "Quite fun to use API and statistics of past winnings to show 'places' with higher win rates. Quite informative if you want to try and win the next TOTO prize!",
      "I still remember staying very late after working hours to finish a series of Trump-Kim interactives because it was drawing a lot of attention and Singaporeans were very interested in both leaders",
      "Tried my best to understand the orginal code because it was reused for 2016 & 2017 but it was very complicated. I learned a lot thou, it helped when I was doing other data visualisation interactives",
      "This one's not very complicated in terms of code. Quite manageable, but the css changes were substaintial and it really trained my foundation. Well, I made this page that people would see before deciding to pay $0.99 so..",
      "Short quiz just to see how uncle or auntie you are!",
      "First time using D3.Js extensively with some jquery/css effects. Well after it went live then I realised I made some mistakes in the code.. That's why if you look at it long enough, you'll see that it's a little buggy. Welp",
      "Just 1 of the quizzes during the Trump-Kim Summit back in 2018 to increase traffic flow to Straits Times!",
      "Fort Canning was pretty nice and very warm. All of us had to sweat our ass off to get good film, then proceed to rush to Clarke Quay to film the shots for SRC! Tiring day indeed, but extremely fun",
      "Honestly, the food was meh but it was the people that made it fun! This location wasn't planned, but our proposed plan got cancelled because of COVID so.. Here we are eating satays and stuff!"
    ]
    var image = ["src","gendergap","christmas","worldcup","hongbao","a-to-z","budget","premium","funquiz","holidays","whosaywhat","fcp","lps"];
    var doLoop = title.map((d, i) => {
      return <div className="carouselHolder" key={i}>
      <div className="carouselTitle">{d}</div>
      <a href={linkDir + links[i] + endLinkDir} rel="noreferrer" target="_blank">
      <div className="itemHolder">
        <img id={i} src={pfDir + image[i] + ".jpg"} rel="noreferrer" onMouseEnter={() => this.onHover(i)} alt={image[i]}/>
        <div id={"d" +i} className="desc" onMouseLeave={() => this.onHover(i)}>{desc[i]}</div>
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
