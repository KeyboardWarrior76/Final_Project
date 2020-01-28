import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import NoMatch from './components/shared/NoMatch';
import Estimator from './components/shared/Estimator';
import Sidebar from './components/shared/Sidebar'
/*import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import Profile from './components/shared/Profile';*/
import About from './components/shared/About';

const App = () => (

  <>
    <Sidebar/>
    {/*<FetchUser>*/}
      <Switch>
        <Route exact path='/' component={Estimator}/>
        {/*
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/profile' component={Profile} />
        */}
        <Route exact path='/about' component={About} />
        <Route component={NoMatch}/>
      </Switch>
    {/*<FetchUser>*/}
  </>
)

export default App;
