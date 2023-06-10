import React from 'react';
import $ from 'jquery';
import HBGMenu from './pages/1. HBGMenu.js'
import SlideIn from './pages/2. SlideIn.js'
import Portfolio from './pages/3. Portfolio.js'
import Bio from './pages/4. Bio.js'
import About from './pages/5. About.js'
import Contact from './pages/6. Contact.js'
import BackgroundImage from './pages/BackgroundImage.js'
import ReactGA from 'react-ga4';

ReactGA.initialize(process.env.REACT_APP_GTAG); // YOUR_OWN_TRACKING_ID

class App extends React.Component {
  //https://stackoverflow.com/questions/49398355/google-analytics-on-react-app-doesnt-work
  componentDidMount  = () => ReactGA.send("pageview");
  componentDidUpdate = () => ReactGA.send("pageview");
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
      $('.menuOverlay, .home').toggleClass('visible');
    }

    render() {
      return (
        <main className = "siteContainer">
        <HBGMenu overlay={this.showOverlay}/>
        <SlideIn overlay={this.showOverlay}/>
        <Portfolio/>
        <BackgroundImage input="paris"/>
        <About/>
        <BackgroundImage input="rome"/>
        <Bio title = {this.state.flaticon}/>
        <BackgroundImage input="hongkong"/>
        <Contact/>
        </main>);
      }
    }

export default App;
