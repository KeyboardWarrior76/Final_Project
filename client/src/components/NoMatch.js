import React from 'react';
import {NavLink} from 'react-router-dom';

const NoMatch = () => (

    <>
      <h1>Oops! Page not found! 404</h1>
      <NavLink to='/'>Go back home</NavLink>
    </>
)

export default NoMatch;
