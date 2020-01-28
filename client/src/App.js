import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import NoMatch from './components/shared/NoMatch';
import Estimator from './components/shared/Estimator';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import Profile from './components/shared/Profile';
import Contact from './components/shared/About';
import { initMiddleware, } from 'devise-axios';
import Sidebar from './components/shared/Sidebar';

initMiddleware();

const App = () => (

    <div style={{
      display: "flex",
      height: "100vh",
      width: "100vw",
    }} >
      <FetchUser>
        <Sidebar/>
        <Switch>
          <Route exact path='/' component={Estimator}/>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NoMatch}/>
        </Switch>
      </FetchUser>
    </div>
)

export default App;
