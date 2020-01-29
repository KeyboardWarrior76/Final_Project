import React, {Component} from 'react';
import Navbar from './Navbar';
import { Link, Route, Switch } from 'react-router-dom'
import devpointLogo from '../../images/DevpointLogo.png';
import EstimatorNav from './EstimatorNav';
import Estimator from './Estimator';
import AboutNav from './AboutNav';
import { withRouter } from "react-router-dom";

class Sidebar extends Component{
   
    
  sidebarNav = () => {
    const path = this.props.location.pathname;
    if (path === '/')  {
      return(
        <EstimatorNav/>
      )
    } else {
      return(
        <AboutNav/>
      )
    }
  }
   render(){

  return(
    <>
      <div className="sidebar-clearfix" />
      <div className="sidebar">
        <div className="sidebar-top">
          <img src={devpointLogo} style={{width: "100%"}} alt="Italian Trulli"></img>
        </div>

        <div className="sidebar-middle">
          { this.sidebarNav() }
        </div>
        
        <div className="sidebar-bottom">
            <Navbar/>
        </div>
      </div>
    </>
  )
   }
}

export default withRouter(Sidebar);
