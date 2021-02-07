import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import * as Routes from './constants';
import { Home, SignIn, SignUp, Browse } from './pages';
import { IsUserRedirect, ProtectedRoute} from './helpers/routes'
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();
  console.log(user);
  return( 
    <>
      <Router>
          <IsUserRedirect exact user={user} loggedInPath={Routes.BROWSE} path={Routes.HOME}>
            <Home/>  
          </IsUserRedirect>
          <IsUserRedirect exact user={user} loggedInPath={Routes.BROWSE} path={Routes.SIGN_IN}>
            <SignIn/>  
          </IsUserRedirect>
          <IsUserRedirect exact user={user} loggedInPath={Routes.BROWSE} path={Routes.SIGN_UP}>
            <SignUp/>  
          </IsUserRedirect>
          <ProtectedRoute exact user={user} path={Routes.BROWSE}>
            <Browse/>
          </ProtectedRoute>
          </Router>  
    </>
  );
}