import React, {Component} from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";




class UserForm extends Component{
  render(){
    return (
      <>
      </>
    )
  }
}    



export default class ConnectedUserForm extends React.Component {
  render(){
    return (
     <AuthConsumer>
      {value => <UserForm auth={value} />}
     </AuthConsumer>
    )
  }
}
  
    
  



