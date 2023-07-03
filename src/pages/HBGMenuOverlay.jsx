import React from 'react';

const HBGMenuOverlay = ({ clickScroll, overlay }) => {
  const pages = ["Portfolio", "Bio", "About", "Contact"];
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
        <div className="divHold">
          <a className="resume" target="_blank" href="https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/resume/ba9c26afb676a3841f6586bf4c167ad0.pdf">
            <div className="overlayPages">Résumé</div>
            <div className="liner"></div>
          </a>
        </div>
        {doLoop}
      </div>
    </div>
  );
};

export default HBGMenuOverlay;