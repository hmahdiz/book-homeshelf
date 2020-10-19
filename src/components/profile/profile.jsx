import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import ProtectedRoute from "../../routes/protected-route";
import ProfileBooks from "./profile-books";
import ProfileAccount from "./profile-account";
import ProfileInformation from "./profile-information";
import "./profile.css";

class Profile extends React.Component {
  render() {
    const { firstName, lastName } = this.props.currentUser;
    return (
      <div>
        <h1>Profile {firstName + " " + lastName}</h1>
        <ul className="navbar-nav profile-navbar">
          <li>
            <NavLink className="nav-link" to="/profile/my-books">
              My Books
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/profile/my-account">
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/profile/my-info">
              My Information
            </NavLink>
          </li>
        </ul>
        <switch>
          <ProtectedRoute path={`/profile/my-books`}>
            <ProfileBooks />
          </ProtectedRoute>
          <ProtectedRoute path={`/profile/my-account`}>
            <ProfileAccount />
          </ProtectedRoute>
          <ProtectedRoute path={`/profile/my-info`}>
            <ProfileInformation />
          </ProtectedRoute>
        </switch>
      </div>
    );
  }
}

const mapPropToState = (state) => ({ currentUser: state.authentication.user });

export default connect(mapPropToState)(Profile);
