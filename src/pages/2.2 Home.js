import React from 'react';
import $ from 'jquery';
import Header from './2.2.1. Header.js'
import Typewriter from 'typewriter-effect';

class Home extends React.Component {
  landscapeCheck(){
    $(document).ready(() =>{
      if (window.innerHeight < window.innerWidth && window.innerHeight < 421){
          $('.nameJob, .scrollHolder').hide();
      }
    })
  }
  render() {
    const homeBgHeight = $(window).height() + "px";
    const homeBgStyle = {
      height: homeBgHeight
    };

    this.landscapeCheck()

    return (<div className="home backgroundImage" style={homeBgStyle}>
    <Header clickScroll={this.props.clickScroll} activate={this.activate}/>
    <div id="container"></div>
    <div className="tagLine">
      <div className="tagLineBorderHolder">
       <span className="tagLineBorder"></span>
       &nbsp;
     </div>
     <div>
       {/*https://www.npmjs.com/package/typewriter-effect*/}
       <Typewriter
          options={{
            loop: true
          }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(85)
              .typeString("See and you'll forget.<br>")
              .typeString("Do and you'll remember.<br>")
              .typeString("Teach and you'll understand.")
              .pauseFor(2250)
              .deleteAll()
              .start();
          }}
        />
     </div>
    </div>
    <div className="nameJob">
      <div>ALOYSIUS TAN</div>
      <div>WEB DEVELOPER</div>
    </div>
    {/*https://stackoverflow.com/questions/40109698/react-call-parent-method-in-child-component*/}
    <div className="scrollHolder">
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
    </div>
    </div>);
  }
}

export default Home;
