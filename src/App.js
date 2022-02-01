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
      $(".menuOverlay").toggleClass("visible");
      $('.cd-menu-icon').toggleClass('is-clicked');
      // $('body').toggleClass("hideExcess");
    }

    render() {
      return (
        <main className = "siteContainer">
        <HBGMenu overlay={this.showOverlay}/>
        <SlideIn/>
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
