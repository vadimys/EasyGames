import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import history from './helpers/history';
import alertActions from './redux/actions/AlertActions';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'

export default function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => history.listen(() => {
        dispatch(alertActions.clear());
    }), []);

    return (
        <>
            <Header/>
            <div className='jumbotron'>
                <div className='col-md-8 offset-md-2'>
                    {alert.message ?
                        <div className={`alert ${alert.type}`}>{alert.message}</div> : null}
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Registration}/>
                    </Switch>
                </div>
            </div>
            <Footer/>
        </>
    );
}
