import React from 'react'
import { AuthConsumer, } from "../../providers/AuthProvider";
import Toolbar from '@material-ui/core/Toolbar';
import { Link, withRouter, } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: {user, handleLogout}, location: {pathname}, history } = this.props;

    if (user) {
      return (
        <Toolbar position='right'>
          <Button
            name='logout'
            onClick={ () => handleLogout(history) }>
            Logout
          </Button>
          <Link to='/profile'>
            <Button
              id='profile'
              name='profile'
              active={pathname ? '/profile' : undefined}>
              Profile
            </Button>
          </Link>
        </Toolbar>
      )
    } else {
      return (
        <Toolbar position='right'>
          <Link to='/login'>
            <Button
              id='login'
              name='login'
              active={pathname ? '/login' : undefined}>
              Login
            </Button>
          </Link>
          <Link to='/register'>
            <Button
              id='register'
              name='register'
              active={pathname ? '/register' : undefined}>
              Register
            </Button>
          </Link>
        </Toolbar>
      )
    }
  }

  render() {
    const{ location: {pathname} } = this.props
    return (
      <div>
        <AppBar position='static'>

          <Toolbar>
            <Link to='/'>
              <Button
                edge='start'
                name='home'
                id='home'
                active={pathname ? '/' : undefined}>
                Home
              </Button>
            </Link>
            <Link to='/about'>
              <Button
                edge='start'
                name='about'
                id='about'
                active={pathname ? '/about' : undefined}>
                About
              </Button>
            </Link>
          </Toolbar>

        </AppBar>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
