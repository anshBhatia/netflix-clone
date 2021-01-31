import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { GlobalStyle } from './global-styles';

import App from './App';

ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
    <App/>
  </Fragment>,
  document.getElementById('root')
);