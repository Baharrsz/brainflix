import React from "react";
import logo from "../assets/logo/Logo-brainflix.svg";
import avatar from "../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo"></img>
      <input className="header__input input" placeholder="search"></input>
      <button className="header__btn btn">UPLOAD</button>
      <img
        className="header__avatar avatar"
        src={avatar}
        alt="avatar"
        width="50px"
        height="50px"
      ></img>
    </header>
  );
}

export default Header;
