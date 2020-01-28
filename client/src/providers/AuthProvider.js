import React, { Component } from 'react';
import axios from 'axios';

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export default class AuthProvider extends Component {

  state = { user: null, edit:false}

  handleRegister = (user, history) => {
    axios.post('/api/auth', user)
      .then(res => {
        this.setState({ user: res.data.data })
        history.push('/')
      })
      .catch(err => console.log(err))
  }

  handleLogin = (user, history) => {
    axios.post('/api/auth/sign_in', user)
      .then(res => {
        this.setState({ user: res.data.data })
        history.push('/')
      })
      .catch(err => console.log(err))
  }

  handleLogout = (history) => {
    axios.delete('/api/auth/sign_out')
      .then(res => {
        this.setState({ user: null })
        history.push('/login')
      })
      .catch(err => console.log(err))
  }

  toggleEdit = () => {
    this.setState({edit:!this.setState.edit})

  }

  updateUser = (user) => {
    
    axios.put('/api/auth/', user)
    .then(res => {
      this.setState({user:res.data.data})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        authenticated: this.state.user !== null,
        toggleEdit: this.toggleEdit,
        updateUser: this.updateUser
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
