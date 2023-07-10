import { toggleLoadingScreen } from '../store/index.jsx';

const isInViewport = (element) => {
    const elementTop = element.offsetTop - (window.innerHeight / 2);
    const elementBottom = elementTop + element.offsetHeight;
    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight;
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

const fontColor = (isDarkMode) => {
    return isDarkMode ? 'text-white' : 'text-custom-grey';
};

const showLoadingScreen = (dispatch) => {
    document.body.style.overflowY = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflowY = 'scroll'; // Re-enable scrolling
      dispatch(toggleLoadingScreen(false));
    }, 1000);
  
    return () => clearTimeout(timer);
};
  
export {isInViewport, fontColor, showLoadingScreen}
  