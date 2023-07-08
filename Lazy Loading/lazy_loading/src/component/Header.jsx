import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#myPage">
              Logo
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
            <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/services">SERVICES</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
    </div>
  );
}

export default Header;
