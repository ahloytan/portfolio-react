import React from 'react';
import $ from 'jquery';

class Header extends React.Component {
  constructor(props) {
    super(props);
    //https://reactjs.org/docs/faq-functions.html
    this.dir =  "images_doc/logo/";
    this.state = {
      imgSrc: ($(window).width() < 769) ? this.dir + "logoM.png" : this.dir + "logo.png",
      count: 1
    };
  }

  activate() {
    this.setState({
      count: this.state.count + 1
    })
    if (this.state.count === 1) {
      alert("One day you won't be an athlete anymore. You won't have that routine you do before every game. You won't have those long bus rides with your teammates. You won't have those bruises all over your body. Your teammates will become distant and your laughs will become limited. Eventually, the one thing you looked forward to will come to an end. The one thing you relied on to relieve your stress and allow you to escape your problems won't always be there. One day, you won't be an athlete anymore, you will just have the memories of one. -Anonymous");
      
    } else if (this.state.count === parseInt(process.env.REACT_APP_NUM)) {
      $(".paraH").remove();
      var text = process.env.REACT_APP_TEXT.split("|");

      text.forEach((s) => {
        $(".descBioBox").append("<div class='paraH activeM'>" + s + "</div>");
      })

    } else {
      $(".paraH").remove();
    }
  }
  checkChangeImg(dir){
    $(window).resize(function() {
      ($(window).width() < 768) ? $('.headerLogo').attr('src', dir + 'logoM.png') : $('.headerLogo').attr('src', dir + 'logo.png');
    });
  }
  render() {
    var pages = ["home", "portfolio", "bio", "about", "contact"]
    var doLoop = pages.map((d, i) => {
      return <div key={i} onClick={() => this.props.clickScroll(d)}>{d}</div>;
    });

    this.checkChangeImg(this.dir)

    return (<div className="header">
    <div className="navBar">
      {/*https://snowball.digital/blog/responsive-images-in-react-with-srcset*/}
        <img className="headerLogo" src={this.state.imgSrc} onClick={() => this.activate()} alt="headerLogo"/> {doLoop}
      </div>
    </div>);
  }
}

export default Header;
