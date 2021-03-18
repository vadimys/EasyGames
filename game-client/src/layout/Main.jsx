import React, { useEffect } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import history from '../History';
import alertActions from './../modules/alert/actions/AlertActions';
import home from './../modules/pages/Home';
import login from './../modules/pages/Login';
import registration from './../modules/pages/Registration';
import PrivateRoute from './PrivateRoute';

export default function Main() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => history.listen(() => {
      dispatch(alertActions.clear());
    }), []);

  return (
    <div className='jumbotron'>
      <div className='col-md-8 offset-md-2'>
        {alert.message &&
        <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path='/' component={home} />
            <Route path='/login' component={login} />
            <Route path='/register' component={registration} />
            <Redirect from='*' to='/' />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
