import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRouter({ component: Component, ...rest }) {
  const { isLoggedIn } = useSelector(state => state.login);

  return (
    <Route {...rest} render={props => (
      isLoggedIn
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/games', state: { from: props.location } }} />
    )} />
  );
}
