import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as Routes from './constants';
import { Home, SignIn, SignUp, Browse } from './pages';

export default function App() {
  return( 
    <>
      <Router>
        <Route path={Routes.HOME} exact >
          <Home/>
        </Route>
        <Route path={Routes.SIGN_IN} exact >
          <SignIn/>
        </Route>
        <Route path={Routes.SIGN_UP} exact >
          <SignUp/>
        </Route>
        <Route path={Routes.BROWSE} exact >
          <Browse/>
        </Route>
    </Router>  
    </>
  );
}