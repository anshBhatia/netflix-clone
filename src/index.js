import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { GlobalStyle } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase'

import App from './App';

ReactDOM.render(  
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle/>
      <App/>
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);