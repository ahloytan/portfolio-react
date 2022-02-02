import React from 'react';
import $ from 'jquery';
import HBGMenu from './pages/1. HBGMenu.js'
import SlideIn from './pages/2. SlideIn.js'
import Portfolio from './pages/3. Portfolio.js'
import Bio from './pages/4. Bio.js'
import About from './pages/5. About.js'
import Contact from './pages/6. Contact.js'
import BackgroundImage from './pages/BackgroundImage.js'
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-122351635-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

class App extends React.Component {
  //https://stackoverflow.com/questions/49398355/google-analytics-on-react-app-doesnt-work
  componentDidMount  = () => ReactGA.pageview(window.location.pathname + window.location.search);
  componentDidUpdate = () => ReactGA.pageview(window.location.pathname + window.location.search);
    constructor(props) {
      super(props);

      this.state = {
        "flaticon": "https://www.flaticon.com/"
      }
    }
    showOverlay() {
      //https://stackoverflow.com/questions/22749979/is-there-a-way-to-prevent-all-actions-while-css-transition-takes-place
      $('body').addClass('freeze');
      $('.menuOverlay').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
          $('body').removeClass('freeze')
      });

      $('.cd-menu-icon').toggleClass('is-clicked');

      if(parseInt($('.menuOverlay').css("marginLeft")) === 0){
        $('.menuOverlay').css('margin-left', '-' + $(window).width() + 'px');
      } else {
        $('.menuOverlay').css('margin-left', '0');
      }
    }

    render() {
      return (
        <main className = "siteContainer">
        <HBGMenu overlay={this.showOverlay}/>
        <SlideIn overlay={this.showOverlay}/>
        <Portfolio/>
        <BackgroundImage input="paris"/>
        <Bio title = {this.state.flaticon}/>
        <BackgroundImage input="rome"/>
        <About/>
        <BackgroundImage input="hongkong"/>
        <Contact/>
        </main>);
      }
    }

export default App;
