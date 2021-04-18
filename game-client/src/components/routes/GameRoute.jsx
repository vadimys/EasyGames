import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function GameRoute({ component: Component, ...rest }) {
  const { started } = useSelector(state => state.game);
  const { isLoggedIn } = useSelector(state => state.login);

  return (
    <Route {...rest} render={props => {
      if (started) {
        return <Component {...props} />;
      } else {
        if (isLoggedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: "/games", state: { from: props.location } }} />;
        }
      }
    }} />
  );
}
