import React from 'react';
import $ from 'jquery';

//http://jsfiddle.net/QN9cH/1/
class BackgroundImage extends React.Component {
  render() {
    const bgDir = "images_doc/background/"
    const bgImageStyle = {
      backgroundImage: ($(window).width() < 1400) ? "url(" + bgDir + this.props.input + "M.jpg)" : "url(" + bgDir + this.props.input + ".jpg)"
    };

    return (<div className= {"bgHolder" + this.props.input}><div className="backgroundImage" style={bgImageStyle}></div></div>);
  }
}

export default BackgroundImage;
