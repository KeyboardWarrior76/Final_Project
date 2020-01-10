import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NoMatch from './components/NoMatch';
import Estimator from './components/Estimator';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import Container from '@material-ui/core/Container';

const App = () => (

    <>
      <Navbar/>
      <FetchUser>
        <Switch>
          <Route exact path='/' component={Estimator}/>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch}/>
        </Switch>
      </FetchUser>
    </>
)

export default App;
