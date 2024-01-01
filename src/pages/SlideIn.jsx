import HBGMenuOverlay from './HBGMenuOverlay.jsx';
import Home from './Home.jsx';
import { isMobile } from '../mixins/helper.jsx';

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

    document.body.classList.remove("hideExcess");
  };

  return (
    <div className="slideInHolder">
      <Home clickScroll={clickScrollTop} />
      {isMobile && <HBGMenuOverlay clickScroll={clickScrollTop} overlay={overlay} />}
    </div>
  );
};

export default SlideIn;
