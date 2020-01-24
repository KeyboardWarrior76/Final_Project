import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Estimator from './components/shared/Estimator';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import Profile from './components/shared/Profile';

const App = () => (

    <>
      <Navbar/>
      <FetchUser>
        <Switch>
          <Route exact path='/' component={Estimator}/>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/profile' component={Profile} />
          <Route component={NoMatch}/>
        </Switch>
      </FetchUser>
    </>
)

export default App;
