import React, {Component} from 'react';
import {ProjectConsumer} from "../../providers/ProjectProvider";

  class Profile extends Component {








     render () {
       return (
         <>
         </>
       )
     }


  }





export default class ConnectedProfile extends React.Component {
  render () {
    return (
       <ProjectConsumer>
         <Profile/>
       </ProjectConsumer>
    )
  }
}