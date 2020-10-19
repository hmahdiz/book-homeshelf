import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ user, component: Component, ...rest }) => {
  return user ? <Route component={Component} {...rest} /> : <Redirect to="/signin" />;
};

const mapPropsToState = (state) => ({ user: state.authentication.user });

export default connect(mapPropsToState)(ProtectedRoute);
