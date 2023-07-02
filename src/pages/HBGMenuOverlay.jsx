import React from 'react';

const HBGMenuOverlay = ({ clickScroll, overlay }) => {
  const pages = ["Home", "Portfolio", "Bio", "About", "Contact"];
  const doLoop = pages.map((d, i) => {
    const smallCaps = d.toLowerCase();
    return (
      <div key={i} className="divHold">
        <div
          className="overlayPages"
          onClick={() => {
            clickScroll(smallCaps);
            overlay();
          }}
        >
          {d}
        </div>
        <div className="liner"></div>
      </div>
    );
  });

  return (
    <div className="menuOverlay">
      <div className="overlayContent">
        <div className="divHold"></div>
        {doLoop}
      </div>
    </div>
  );
};

export default HBGMenuOverlay;