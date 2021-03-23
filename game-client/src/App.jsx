import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import alertActions from './redux/actions/AlertActions';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';

export default function App() {
  const [showAlert, setShowAlert] = useState(false);
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => history.listen((data) => {
    console.log(data);
    dispatch(alertActions.clear());
  }), []);

  useEffect(() => {
    if (alert.message) {
      const timer = setTimeout(() => setShowAlert(false), 5000);

      setShowAlert(true)

      return () => clearTimeout(timer);
    }
  }, [alert.message]);

  return (
    <>
      <Header />
      <div className='jumbotron'>
        <div className='col-md-8 offset-md-2'>
          {showAlert && <div className={`alert ${alert.type}`}>{alert.message}</div>}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Registration} />
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );
}
