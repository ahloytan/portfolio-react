export const isInViewport = (element) => {
    const elementTop = element.offsetTop - (window.innerHeight / 2);
    const elementBottom = elementTop + element.offsetHeight;
    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight;
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
  
