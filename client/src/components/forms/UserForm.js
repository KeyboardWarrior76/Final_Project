import React, {Component} from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';




class UserForm extends Component {
  state = {email: '', password: '', first_name:'' , last_name: ''};

  componentDidMount() {
    const { user } = this.props.auth;
    this.setState({ ...user });
  }

 handleSubmit = (e) => {
   e.preventDefault();
   this.props.auth.updateUser(this.state);
 }

 handleChange = (e) => {
  const { name, value, } = e.target;
  this.setState({ [name]: value, });
}


  render(){
    const {email, password,first_name, last_name} = this.state;
    return (
      <>
      <form onSubmit={this.handleSubmit}>

<FormGroup>

  <FormControl>
    <InputLabel htmlFor="emailInput">Email</InputLabel>
    <OutlinedInput
      id="emailInput"
      name='email'
      value={email}
      onChange={this.handleChange} />
  </FormControl>

  <FormControl>
    <InputLabel htmlFor="passInput">Password</InputLabel>
    <OutlinedInput
      id="passInput"
      name='password'
      value={password}
      type='password'
      onChange={this.handleChange} />
  </FormControl>

  <FormControl>
    <InputLabel htmlFor="firstInput">First Name</InputLabel>
    <OutlinedInput
      id="firstInput"
      name='first_name'
      value={first_name}
      onChange={this.handleChange} />
  </FormControl>

  <FormControl>
    <InputLabel htmlFor="lastInput">Last Name</InputLabel>
    <OutlinedInput
      id="lastInput"
      name='last_name'
      value={last_name}
      onChange={this.handleChange} />
  </FormControl>

  <Button color='primary' type='submit'>Update</Button>
</FormGroup>

</form>
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
  
    
  



