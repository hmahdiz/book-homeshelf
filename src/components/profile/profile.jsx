import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
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
    <div>
      <h1>Profile {firstName + " " + lastName}</h1>
      <ul className="navbar-nav profile-navbar">
        <li>
          <NavLink className="nav-link" to="/profile/my-books">
            My Books
          </NavLink>
        </li>
        <li>
          {/* <NavLink className="nav-link" to="/profile/my-account"> */}
          My Account (soon)
          {/* </NavLink> */}
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
};

const mapPropToState = (state) => ({ currentUser: state.authentication.user });

export default connect(mapPropToState)(Profile);
