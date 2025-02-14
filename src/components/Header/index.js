import React from "react";
import logo from "../../assets/logo/long-logo.png";
import "./styles.css";

const Header = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-text">Any where</div>
        <div className="search-bar-text">Any week</div>
        <div className="search-bar-text2">Add Guests</div>
      </div>
      <div className="profile-container"></div>
    </div>
  );
};

export default Header;
