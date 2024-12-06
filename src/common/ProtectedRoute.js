import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to="/login" />)}
    />
  );
};

export default ProtectedRoute;
