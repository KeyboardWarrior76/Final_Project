import React from 'react';
import {NavLink} from 'react-router-dom';

const NoMatch = () => (

    <div align='center'>
      <h1>Oops! Page not found!</h1>
      <h2>Error 404</h2>
      <NavLink to='/'>Go back home</NavLink>
    </div>
)

export default NoMatch;
