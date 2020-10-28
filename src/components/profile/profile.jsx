import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, Switch } from "react-router-dom";
import ProtectedRoute from "../../routes/protected-route";
import ProfileBooks from "./profile-books";
import ProfileAccount from "./profile-account";
import ProfileInformation from "./profile-information";
import "./profile.css";

const Profile = (props) => {
  const { firstName, lastName } = props.currentUser;

  useEffect(() => {
    props.history.push("/profile/my-books");
  }, []);

  return (
    <div className="dark-container">
      <div className="title-bar">Profile {firstName + " " + lastName}</div>
      <div className="navbar-nav profile-navbar">
        <NavLink className="nav-link profile-li" activeClassName="profile-selected" to="/profile/my-books">
          My Books
        </NavLink>
        <NavLink className="nav-link profile-li" activeClassName="profile-selected" to="/profile/my-account">
          My Account (soon)
        </NavLink>
        <NavLink className="nav-link profile-li" activeClassName="profile-selected" to="/profile/my-info">
          My Information
        </NavLink>
      </div>
      <Switch>
        <ProtectedRoute path={`/profile/my-books`}>
          <ProfileBooks className="profile-item-container" />
        </ProtectedRoute>
        <ProtectedRoute path={`/profile/my-account`}>
          <ProfileAccount className="profile-item-container" />
        </ProtectedRoute>
        <ProtectedRoute path={`/profile/my-info`}>
          <ProfileInformation className="profile-item-container" />
        </ProtectedRoute>
      </Switch>
    </div>
  );
};

const mapPropToState = (state) => ({ currentUser: state.authentication.user });

export default connect(mapPropToState)(Profile);
