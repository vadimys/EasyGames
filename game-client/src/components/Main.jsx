import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import alertActions from './../redux/actions/AlertActions';
import { Route, Switch, useHistory } from 'react-router-dom';
import pages from './../pages';

export default function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => history.listen((data) => {
    dispatch(alertActions.clear());
  }), []);

  return (
    <div className='easy-game-main'>
      <div>
        <Switch>
          <Route exact path='/' component={pages.home} />
          <Route path='/games' component={pages.games} />
          <Route path='/history' component={pages.history} />
          <Route path='/favorites' component={pages.favorites} />
        </Switch>
      </div>
    </div>
  );
}
