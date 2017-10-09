import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';

import routes from './routes';

/* global css */
import './index.css';

render(
  <Router history={hashHistory}>
    {routes}
  </Router>, document.getElementById('root'),
);
