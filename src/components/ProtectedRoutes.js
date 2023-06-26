import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");

  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          // Render the component if a valid token is present
          return <Component {...props} />;
        } else {
          // Redirect the user to the landing page if no valid token is present
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location // Save the location the user was trying to access
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoutes;
