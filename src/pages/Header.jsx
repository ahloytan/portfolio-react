import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleInput, toggleLoadingScreen } from '../store/index.jsx';
import LightModeIcon  from '../components/LightModeIcon.jsx'; // Adjust the file path if necessary
import DarkModeIcon  from '../components/DarkModeIcon.jsx'; // Adjust the file path if necessary
import { fontColor, showLoadingScreen } from '../mixins/helper.jsx';


const Header = ({ clickScroll }) => {
  const [count, setCount] = useState(1);
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const isLoading = useSelector((state) => state.app.loading);
  const dispatch = useDispatch();
  const font = fontColor(isDarkMode);
  const handleToggleInput = () => {
    dispatch(toggleInput(!isDarkMode)); 
    // dispatch(toggleLoadingScreen(true));
    // showLoadingScreen(dispatch);
  };

  const activate = () => {
    setCount((prevCount) => prevCount + parseInt(import.meta.env.VITE_S));

    if (count === parseInt(import.meta.env.VITE_S)) {
      window.open("https://zuse.market/item-details/64ab765c2520fc1d132995f2");
    } else if (count === parseInt(import.meta.env.VITE_NUM)) {
      alert("One day you won't be an athlete anymore. You won't have that routine you do before every game. You won't have those long bus rides with your teammates. You won't have those bruises all over your body. Your teammates will become distant and your laughs will become limited. Eventually, the one thing you looked forward to will come to an end. The one thing you relied on to relieve your stress and allow you to escape your problems won't always be there. One day, you won't be an athlete anymore, you will just have the memories of one. -Anonymous");
      document.querySelectorAll(".paraH").forEach((element) => element.remove());
      const text = import.meta.env.VITE_TEXT.split("|");

      text.forEach((s) => {
        const paraH = document.createElement("div");
        paraH.classList.add("paraH", "activeM");
        paraH.textContent = s;
        document.querySelector(".descBioBox").appendChild(paraH);
      });
    } else {
      document.querySelectorAll(".paraH").forEach((element) => element.remove());
    }
  };

  const pages = ["portfolio", "bio", "about", "contact"];
  const doLoop = pages.map((d, i) => (
    <div className={`mx-4 lg:mx-6 xl:mx-12 navLinks font-m-bold ${font}`} key={i} onClick={() => clickScroll(d)}>
      {d}
    </div>
  ));

  return (
    <div className="header flex justify-between">
      <div className="navBar">
        <img className="headerLogo m-4" src="assets/logo/logo.jpg" onClick={activate} alt="headerLogo" />
      </div>
      <div className="text-sm hidden md:inline-flex items-center text-sm uppercase">
        <a className={`mx-4 lg:mx-6 xl:mx-12 navLinks font-m-bold ${font}`} target="_blank" href="https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/resume/ba9c26afb676a3841f6586bf4c167ad0.pdf" rel="noreferrer">
          <div>Résumé</div>
        </a>
        {doLoop}
        <div className="flex items-center mx-4 lg:mx-6 ">
          <div>  
            <LightModeIcon />
          </div>
          <label className="relative inline-flex mx-1">
            <input type="checkbox" value="" className="sr-only peer" checked={isDarkMode} onChange={handleToggleInput}/>
            <div className="w-11 h-6 bg-light peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dark"></div>
          </label>
          <div>  
            <DarkModeIcon />
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Header;