import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleInput } from '../store/index.jsx';

const Header = ({ clickScroll }) => {
  const [count, setCount] = useState(1);
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  const dispatch = useDispatch();
  const textColor = isDarkMode ? 'text-white' : 'text-custom-grey';

  const handleToggleInput = () => {
    dispatch(toggleInput(!isDarkMode));
  };

  const activate = () => {
    setCount((prevCount) => prevCount + parseInt(import.meta.env.VITE_S));

    if (count === parseInt(import.meta.env.VITE_S)) {
      window.open("https://sentx.io/nft-marketplace/0.0.878200/2633");
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
    <div className={`mx-8 xl:mx-12 navLinks font-m-bold ${textColor}`} key={i} onClick={() => clickScroll(d)}>
      {d}
    </div>
  ));

  return (
    <div className="header flex justify-between">
      <div className="navBar">
        <img className="headerLogo m-4" src="assets/logo/logo.jpg" onClick={activate} alt="headerLogo" />
      </div>
      <div className="text-sm hidden md:inline-flex items-center text-sm md:text-lg xl:text-xl uppercase">
        <a className={`mx-8 xl:mx-12 navLinks font-m-bold ${textColor}`} target="_blank" href="https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/resume/ba9c26afb676a3841f6586bf4c167ad0.pdf" rel="noreferrer">
          <div>Résumé</div>
        </a>
        {doLoop}
        
        <label className="relative inline-flex items-center mx-12">
          <input type="checkbox" value="" className="sr-only peer" checked={isDarkMode} onChange={handleToggleInput}/>
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
};

export default Header;