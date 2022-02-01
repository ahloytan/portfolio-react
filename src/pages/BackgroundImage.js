import React from 'react';
import $ from 'jquery';

//http://jsfiddle.net/QN9cH/1/
class BackgroundImage extends React.Component {
  render() {
    var bgDir = "images_doc/background/"
    var bgImageStyle = {
      backgroundImage: ($(window).width() < 1400) ? "url(" + bgDir + this.props.input + "M.jpg)" : "url(" + bgDir + this.props.input + ".jpg)"
    };

    return (<div className= {"bgHolder" + this.props.input}><div className="backgroundImage" style={bgImageStyle}></div></div>);
  }
}

export default BackgroundImage;
