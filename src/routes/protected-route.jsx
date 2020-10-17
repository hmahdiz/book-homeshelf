import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ user }) => {
  user ? <Route /> : <Redirect />;
};

export default ProtectedRoute;
