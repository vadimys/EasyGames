import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from "react-redux";

export default function PrivateRouter ({ component: Component, ...rest }) {
    // const loggingIn = useSelector(state => state.login.loggingIn);

    return (<></>
        /*<Route {...rest} render={props => (
            loggingIn
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )} />*/
    );
}
