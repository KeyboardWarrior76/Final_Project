import React, {Component} from 'react';
import Navbar from './Navbar';
import DevpointLogo from '../../images/DevpointLogo.png';
import EstimatorNav from './EstimatorNav';
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
          <img src={DevpointLogo} style={{width: "100%"}} alt="Italian Trulli"></img>
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
