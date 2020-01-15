import React from 'react'
import { AuthConsumer, } from "../../providers/AuthProvider";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <ToolBar position='right'>
          <Button
            name='logout'
            onClick={ () => handleLogout(this.props.history) }>
            Logout
          </Button>
        </ToolBar>
      )
    } else {
      return (
        <ToolBar position='right'>
          <Link to='/login'>
            <Button
              id='login'
              name='login'
              active={location.pathname ? '/login' : undefined}>
              Login
            </Button>
          </Link>
          <Link to='/register'>
            <Button
              id='register'
              name='register'
              active={location.pathname ? '/register' : undefined}>
              Register
            </Button>
          </Link>
        </ToolBar>
      )
    }
  }

  render() {
    return (
      <div>
        <AppBar position='static'>

          <ToolBar>
            <Link to='/'>
              <Button
                edge='start'
                name='home'
                id='home'
                active={this.props.location.pathname ? '/' : undefined}>
                Home
              </Button>
            </Link>
            { this.rightNavItems() }
          </ToolBar>

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
