import HBGMenuOverlay from './HBGMenuOverlay.jsx';
import Home from './Home.jsx';

const SlideIn = ({ overlay }) => {
  const clickScrollTop = (whichPage) => {
    const element = document.querySelector("." + whichPage);
    if (element) {
      const offsetTop = element.offsetTop - window.innerHeight / 4;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }

  };

  return (
    <div className="slideInHolder">
      <Home clickScroll={clickScrollTop} />
      <HBGMenuOverlay clickScroll={clickScrollTop} overlay={overlay} />
    </div>
  );
};

export default SlideIn;
