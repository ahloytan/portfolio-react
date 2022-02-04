import React from 'react';

class HBGMenuOverlay extends React.Component {
  render() {
    var pages = ["Home", "Portfolio", "Bio", "About",  "Contact"];
    var doLoop = pages.map((d, i) => {
      var smallCaps = d.toLowerCase();
      return <div key={i} className="divHold">
      <div className="overlayPages" onClick={() => {
        //https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs
        this.props.clickScroll(smallCaps);
        this.props.overlay()
      }}>{d}</div><div className="liner"></div></div>;
    });

    return (<div className="menuOverlay">
      <div className="overlayContent">
        <div className="divHold">
        </div>
        {doLoop}
      </div>
    </div>)
  }
}

export default HBGMenuOverlay;
