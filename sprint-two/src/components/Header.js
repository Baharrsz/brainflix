import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo/Logo-brainflix.svg";
import avatar from "../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo"></img>
      </Link>
      <input className="header__input input" placeholder="Search"></input>
      <Link to="/upload">
        <button className="header__btn btn">UPLOAD</button>
      </Link>
      <img className="header__avatar avatar" src={avatar} alt="avatar"></img>
    </header>
  );
}

export default Header;
