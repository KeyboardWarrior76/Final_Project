import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NoMatch from './components/shared/NoMatch';
import Estimator from './components/shared/Estimator';
import Sidebar from './components/shared/Sidebar'
/*import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import Profile from './components/shared/Profile';*/
import Contact from './components/shared/Contact';

const App = () => (

  <>
    <div className='mainDiv'>
      <Sidebar/>
      {/*<FetchUser>*/}
        <Switch>
          <Route exact path='/' component={Estimator}/>
          {/*
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/profile' component={Profile} />
          */}
          <Route exact path='/contact' component={Contact} />
          <Route component={NoMatch}/>
        </Switch>
      {/*<FetchUser>*/}
    </div>
    <div className='waterdiv' align='center'>
      <p className='watermark'>
        DevPoint Studios ®
        <br/>
        370 S 300 E Church & State
        <br/>
        Salt Lake City, UT 84111
        <br/>
        <br/>
        contact@devpointstudios.com
      </p>
    </div>
  </>
)

export default App;
