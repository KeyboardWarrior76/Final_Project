import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NoMatch from './components/NoMatch';
import Estimator from './components/Estimator';

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
