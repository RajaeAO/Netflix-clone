import React from "react";
import { useState } from "react";
import "./Nav.scss";
import MenuIcon from "@material-ui/icons/Menu"; // to import Materiel UI / what we will use from MUI
import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Nav() {
  const [navBlack, setNavblack] = useState(false);
  const [toggleMenu, settoggleMenu] = useState(false);
  const transitionNav = () => {
    window.scrollY > 100 ? setNavblack(true) : setNavblack(false);
  };
  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  const handleClick = () => {
    console.log(toggleMenu);
    toggleMenu ? settoggleMenu(false) : settoggleMenu(true);
  };

  return (
    <div
      className={`nav ${
        navBlack || toggleMenu ? "nav--black" : "nav--transparent"
      } ${toggleMenu && "show"}`}
    >
      <button className="nav__burger" onClick={handleClick}>
        <MenuIcon />
      </button>
      <img src="./images/logo.png" className="nav__logo" alt="Netflix" />
      <nav className="nav__links">
        <a href="/" className="nav__link">
          Home
        </a>
        <a href="/" className="nav__link">
          Series
        </a>
        <a href="/" className="nav__link">
          Movies
        </a>
      </nav>
      <div className="nav__actions">
        <a href="/" className="nav__action">
          <SearchIcon />
        </a>
        <a href="/" className="nav__action">
          DIRECT
        </a>
        <a href="/" className="nav__action">
          <CardGiftcardIcon />
        </a>
        <a href="/" className="nav__action">
          <NotificationsIcon />
        </a>
        <a href="/" className="nav__action">
          <img src="./images/avatar.png" alt="avatar" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
