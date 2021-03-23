import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react';
import history from './helpers/history';
import alertActions from './redux/actions/AlertActions'
import {Redirect, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import pages from './pages'

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
                        <PrivateRoute exact path='/' component={pages.home}/>
                        <Route path='/login' component={pages.login}/>
                        <Route path='/register' component={pages.registration}/>
                        <Redirect from='*' to='/'/>
                    </Switch>
                </div>
            </div>
            <Footer/>
        </>
    );
}
