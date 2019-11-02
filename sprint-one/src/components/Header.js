import React from "react";
import logo from "../assets/logo/Logo-brainflix.svg";
import avatar from "../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo"></img>
      <div className="header__user">
        <input
          className="header__user-search input"
          placeholder="search"
        ></input>
        <div className="header__user-container">
          <button className="header__user-container-btn btn">UPLOAD</button>
          <img
            className="header__user-container-avatar avatar"
            src={avatar}
            alt="avatar"
          ></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
