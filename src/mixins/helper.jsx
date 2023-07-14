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
    dispatch(toggleLoadingScreen(false));
};

const isMobile = window.innerWidth <= 768;
  
export {isInViewport, fontColor, showLoadingScreen, isMobile}
  