import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/shared/navbar/Navbar';
import NoMatch from './components/shared/NoMatch';
import Estimator from './components/shared/Estimator';

const App = () => (

    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Estimator}/>
        <Route component={NoMatch}/>
      </Switch>
    </>
)

export default App;
