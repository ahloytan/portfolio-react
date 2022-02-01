import React from 'react';
import $ from 'jquery';
import HBGMenu from './pages/1. HBGMenu.js'
import SlideIn from './pages/2. SlideIn.js'
import Portfolio from './pages/3. Portfolio.js'
import Bio from './pages/4. Bio.js'
import About from './pages/5. About.js'
import Contact from './pages/6. Contact.js'
import BackgroundImage from './pages/BackgroundImage.js'

class App extends React.Component {
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
