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
      <div key={i} className="divHold" style={{backgroundImage: `url('assets/background/${d.image}.webp`}}>
        <div
          className="overlayPages"
          onClick={() => {
            clickScroll(smallCaps);
            overlay();
          }}
        >
          {d.title}
        </div>
      </div>
    );
  });

  return (
    <div className="menuOverlay">
      <div className="overlayContent">
        <div className="divHold" style={{backgroundImage: `url('assets/background/daereungwon.webp`}}>
          <a className="resume" target="_blank" href={import.meta.env.VITE_RESUME} rel="noreferrer">
            <div className="overlayPages">Résumé</div>
          </a>
        </div>
        {doLoop}
      </div>
    </div>
  );
};

export default HBGMenuOverlay;