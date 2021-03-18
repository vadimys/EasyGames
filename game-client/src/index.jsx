import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/Store';
import App from './layout/App';
import history from './History';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';
import { Router } from 'react-router-dom';

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
