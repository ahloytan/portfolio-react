import React, { useState } from 'react';

const Header = ({ clickScroll }) => {
  const [count, setCount] = useState(1);

  const activate = () => {
    setCount((prevCount) => prevCount + parseInt(import.meta.env.VITE_S));

    if (count === parseInt(import.meta.env.VITE_S)) {
      window.open("https://sentx.io/nft-marketplace/0.0.878200/2633");
    } else if (count === parseInt(import.meta.env.VITE_NUM)) {
      alert("One day you won't be an athlete anymore. You won't have that routine you do before every game. You won't have those long bus rides with your teammates. You won't have those bruises all over your body. Your teammates will become distant and your laughs will become limited. Eventually, the one thing you looked forward to will come to an end. The one thing you relied on to relieve your stress and allow you to escape your problems won't always be there. One day, you won't be an athlete anymore, you will just have the memories of one. -Anonymous");
      document.querySelectorAll(".paraH").forEach((element) => {
        element.remove();
      });
      const text = import.meta.env.VITE_TEXT.split("|");

      text.forEach((s) => {
        const paraH = document.createElement("div");
        paraH.classList.add("paraH", "activeM");
        paraH.textContent = s;
        document.querySelector(".descBioBox").appendChild(paraH);
      });
    } else {
      document.querySelectorAll(".paraH").forEach((element) => {
        element.remove();
      });
    }
  };

  const pages = ["home", "portfolio", "bio", "about", "contact"];
  const doLoop = pages.map((d, i) => (
    <div key={i} onClick={() => clickScroll(d)}>
      {d}
    </div>
  ));

  return (
    <div className="header">
      <div className="navBar">
        <img
          className="headerLogo"
          src="assets/logo/logo.jpg"
          onClick={activate}
          alt="headerLogo"
        />
        {doLoop}
      </div>
    </div>
  );
};

export default Header;