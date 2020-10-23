import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ user, onSignOut }) => (
  <div className="navbar">
    {/* <div className="navbar-top">Welcom to your library</div> */}
    <div className="navbar-bottom">
      <Link to="/home" className="navbar-brand">
        Home Bookshelf
      </Link>
      <div className="navbar-collapse">
        <ul className="navbar-nav"></ul>
        <ul className="navbar-nav">
          {user && user.username ? (
            <React.Fragment>
              <li>
                <Link className="nav-link" to="/profile">
                  {user.username}
                </Link>
              </li>
              <li onClick={onSignOut}>
                <Link className="nav-link">Sign Out</Link>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <Link className="nav-link" to="/signin">
                  Sing In
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/signup">
                  Sing Up
                </Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </div>
  </div>
);

const mapPropsToState = (state) => ({ user: state.authentication.user });

export default connect(mapPropsToState)(Navbar);
