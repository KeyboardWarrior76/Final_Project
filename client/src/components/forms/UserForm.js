import React, {Component} from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";




class UserForm extends Component{
  state = {email: '', password: '', first_name:'' , last_name: ''};
component
 handleSubmit = (e) => {
   e.preventDefault();
   this.props.auth.updateUser(this.state);
 }




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
  
    
  



