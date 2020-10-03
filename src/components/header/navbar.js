import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-top">Welcom to your library</div>
    <div className="navbar-bottom">
      <Link to="/home" className="navbar-brand">
        Home Bookshelf
      </Link>
      <div className="navbar-collapse">
        <ul className="navbar-nav"></ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/hm">
              Singin
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/hi">
              Singup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
