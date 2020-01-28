import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import devpointLogo from '../../images/DevpointLogo.png';

const Sidebar = () => {


  return(
   <div className="sidebarClearFix">
   
    <div className="sidebar">
      <div className="sidebar-top">
         <img src={devpointLogo} height="18%" width="auto" alt="Italian Trulli"></img>
      </div>
      <div className="sidebar-middle">
       
          <a href="#size">
            Size
          </a>
          <a href="#userInterface">
            User Interface
          </a>
          <a href="#accounts">
            Accounts
          </a>
          <a href="#userContent">
            User Content
          </a>
          <a href="#dateLocation">
            Dates & Locations
          </a>
          <a href="#engagment">
            Engagment
          </a>
          <a href="#ecommerce">
            Ecommerce
          </a>
          <a href="#analytics">
            Analytics
          </a>
          <a href="#integrations">
            Integrations
          </a>
          <a href="#security">
            Security
          </a>
          <a href="#estimate">
            Estimate
          </a>
    
      </div>
      <div className="sidebar-bottom">
           <Navbar/>
      </div>
    </div>
  </div>
  )
}

export default Sidebar;