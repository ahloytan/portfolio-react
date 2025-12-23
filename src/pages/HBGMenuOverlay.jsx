const HBGMenuOverlay = ({ clickScroll, overlay }) => {
  const pages = [
    {
      title: 'Portfolio',
      image: 'gamcheon'
    },
    {
      title: 'Bio',
      image: 'huinnyeoul'
    },
    {
      title: 'About',
      image: 'coto'
    },
    {
      title: 'Contact',
      image: 'woljeonggyo'
    }
  ];
  const doLoop = pages.map((d, i) => {
    const smallCaps = d.title.toLowerCase();
    return (
      <div 
        key={i} 
        className="divHold" 
        style={{backgroundImage: `url('assets/background/${d.image}.webp`}}
        onClick={() => {
          clickScroll(smallCaps);
          overlay();
        }}
      >
        <div className="overlayPages">
          {d.title}
        </div>
      </div>
    );
  });

  return (
    <div className="menuOverlay">
      <div className="overlayContent">
        <a className="resume" target="_blank" href={import.meta.env.VITE_RESUME} rel="noreferrer">
          <div className="divHold" style={{backgroundImage: `url('assets/background/daereungwon.webp`}}>
              <div className="overlayPages">Résumé</div>

          </div>
        </a>
        {doLoop}
      </div>
    </div>
  );
};

export default HBGMenuOverlay;