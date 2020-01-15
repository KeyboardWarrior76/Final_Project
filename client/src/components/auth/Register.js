import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

class Register extends React.Component {

  state = { email: '', password: '', passwordConfirmation: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, passwordConfirmation, } = this.state;

    return (
      <Container>
        <Typography variant='h2'>Register</Typography>
        <form onSubmit={this.handleSubmit}>

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
            <InputLabel htmlFor="confInput">Password Confirmation</InputLabel>
            <OutlinedInput
              id="confInput"
              name='passwordConfirmation'
              value={passwordConfirmation}
              type='password'
              onChange={this.handleChange} />
            <FormHelperText>Passwords must match</FormHelperText>
          </FormControl>

          <Button color='primary' type='submit'>Submit</Button>

        </form>
      </Container>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}
