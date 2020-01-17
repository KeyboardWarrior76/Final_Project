import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

class Login extends React.Component {

  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.auth.handleLogin(this.state, this.props.history);
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, } = this.state;

    return (
      <Container>
        <Typography variant='h2'>Login</Typography>
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

            <Button color='primary' type='submit'>Submit</Button>
          </FormGroup>

        </form>
      </Container>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}
