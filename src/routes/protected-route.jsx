import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ user, component: Component }) => {
  return user ? <Route component={Component} /> : <Redirect to="/signin" />;
};

const mapPropsToState = (state) => ({ user: state.authentication.user });

export default connect(mapPropsToState)(ProtectedRoute);
