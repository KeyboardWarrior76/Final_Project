import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class AccountForm extends Component {

  state = { dumb: {
    one: 'default', two: 'default', three: 'default',
    four: 'default', five: 'default', six: 'default',
    seven: 'default', eight: 'default', nine: 'default', ten: 'default'
    }
  }

  toggle = (unique, item) => {
    const{ dumb } = this.state
    if (unique === 'default') {
      this.setState({ dumb: {...dumb, [item]: 'primary'} })
    }
    else if (unique === 'primary') {
      this.setState({ dumb: {...dumb, [item]: 'default'} })
    }
  }

  render() {

    const { value: {toggleCategoryItem} } = this.props
    const { dumb: {one, two, three, four, five, six, seven, eight, nine, ten} } = this.state

    return(
      <div align='center'>
        <h3><p>Users & Accounts</p></h3>
        <Fab variant="extended" color={one}
          onClick={() => {toggleCategoryItem('account', 'email_pass'); this.toggle(one, 'one');} }
        >
          Email/Password Login
        </Fab>
        <Fab variant="extended" color={two}
          onChange={() => this.toggleActive()}
          onClick={() => {toggleCategoryItem('account', 'facebook'); this.toggle(two, 'two');} }
        >
          Facebook Login
        </Fab>
        <Fab variant="extended" color={three}
          onChange={() => this.toggleActive()}
          onClick={() => {toggleCategoryItem('account', 'twitter'); this.toggle(three, 'three');} }
        >
          Twitter Login
        </Fab>
        <br/>
        <Fab variant="extended" color={four}
          onChange={() => this.toggleActive()}
          onClick={() => {toggleCategoryItem('account', 'google'); this.toggle(four, 'four');} }
        >
          Google Login
        </Fab>
        <Fab variant="extended" color={five}
          onChange={() => this.toggleActive()}
          onClick={() => {toggleCategoryItem('account', 'linkedin'); this.toggle(five, 'five');} }
        >
          Linkedin Login
        </Fab>
        <Fab variant="extended" color={six}
          onChange={() => this.toggleActive()}
          onClick={() => {toggleCategoryItem('account', 'github'); this.toggle(six, 'six');} }
        >
          GitHub Login
        </Fab>
        <Fab variant="extended" color={seven}
          onChange={() => this.toggleActive()}
          onClick={() => {toggleCategoryItem('account', 'invitation'); this.toggle(seven, 'seven');} }
        >
          User Invitation Emails
        </Fab>
        <br/>
        <Fab variant="extended" color={eight}
          onChange={() => this.toggleActive()}
          onClick={() => {toggleCategoryItem('account', 'multi_account'); this.toggle(eight, 'eight');} }
        >
          Multi-tenant Accounts
        </Fab>
        <Fab variant="extended" color={nine}
          onChange={() => this.toggleActive()}
          onClick={() => {toggleCategoryItem('account', 'subdomain'); this.toggle(nine, 'nine');} }
        >
          Subdomains
        </Fab>
        <Fab variant="extended" color={ten}
          onChange={() => this.toggleActive()}
          onClick={() => {toggleCategoryItem('account', 'custom'); this.toggle(ten, 'ten');} }
        >
          Custom Domains
        </Fab>
      </div>
    )
  }
}

export default class ConnectedAccountForm extends React.Component {
  render() {
    return (
      <ProjectConsumer>
        { value => <AccountForm {...this.props} value={value}/>}
      </ProjectConsumer>
    )
  }
}
