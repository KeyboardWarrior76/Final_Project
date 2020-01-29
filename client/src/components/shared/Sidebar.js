import React, {Component} from 'react';
import Navbar from './Navbar';
import { Link, Route, Switch } from 'react-router-dom'
import devpointLogo from '../../images/DevpointLogo.png';
import EstimatorNav from './EstimatorNav';
import Estimator from './Estimator';
import AboutNav from './AboutNav';

class Sidebar extends Component{
   switchEstimator = () => {
   
     <Route exact path='/' component={Estimator}/>
   
   }
   switchContact = () => {
    
      <Route exact path='/about' component={About}/>
    
    }
    
  sidebarNav = () => {
    const {switchEstimator, switchContact} = this.props;
   if (switchEstimator) {
     return(
       <EstimatorNav/>
     )
   }
   if (aboutContact) {
    return(
      <aboutNav/>
    )
  }
  }
   render(){

  return(
   <div className="sidebarClearFix">
   
    <div className="sidebar">
      <div className="sidebar-top">
         <img src={devpointLogo} height="18%" width="auto" alt="Italian Trulli"></img>
      </div>
      
      <div className="sidebar-bottom">
           <Navbar/>
      </div>
    </div>
  </div>
  )
   }
}

export default Sidebar;