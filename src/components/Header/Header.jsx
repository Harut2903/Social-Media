import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CcItUvweN-dG6da66F4RcamBGWeRZDpSHg&s"  />
      </div>
      <nav className="header__nav">
        <li className="header__nav-item">
            <NavLink className='header__nav-link' to="/">Home Page</NavLink>
        </li>
        <li className="header__nav-item">
            <NavLink className='header__nav-link' to="users">Users Page</NavLink>
        </li>
      </nav>
    </header>
  );
};

export default Header;
