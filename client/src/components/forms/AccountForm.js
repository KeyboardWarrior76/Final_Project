import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

export default class AccountForm extends Component {

state = { email_pass: false,
  facebook: false,
  twitter: false,
  google: false,
  linkedin: false,
  github: false,
  invitation: false,
  multi_account: false,
  subdomain: false,
  custom: false }

  toggleEmail = () => {
    this.setState({ email_pass: !this.state.email_pass })
  }

  toggleFacebook = () => {
    this.setState({ facebook: !this.state.facebook })
  }

  toggleTwitter = () => {
    this.setState({ twitter: !this.state.twitter })
  }

  toggleGoogle = () => {
    this.setState({ google: !this.state.google })
  }

  toggleLinkedin = () => {
    this.setState({ linkedin: !this.state.linkedin })
  }

  toggleGithub = () => {
    this.setState({ github: !this.state.github })
  }

  toggleInvitation = () => {
    this.setState({ invitation: !this.state.invitation })
  }

  toggleMulti = () => {
    this.setState({ multi_account: !this.state.multi_account })
  }

  toggleSubdomain = () => {
    this.setState({ subdomain: !this.state.subdomain })
  }

  toggleCustom = () => {
    this.setState({ custom: !this.state.custom })
  }

render() {

return(
    <div align='center'>
      <p>Accounts & Users</p>
      <Button onClick={this.toggleEmail}><Avatar>Em</Avatar></Button>
      <Button onClick={this.toggleFacebook}><Avatar>Fa</Avatar></Button>
      <Button onClick={this.toggleTwitter}><Avatar>Tw</Avatar></Button>
      <Button onClick={this.toggleGoogle}><Avatar>Go</Avatar></Button>
      <Button onClick={this.toggleLinkedin}><Avatar>Li</Avatar></Button>
      <Button onClick={this.toggleGithub}><Avatar>Gi</Avatar></Button>
      <Button onClick={this.toggleInvitation}><Avatar>In</Avatar></Button>
      <Button onClick={this.toggleMulti}><Avatar>ML</Avatar></Button>
      <Button onClick={this.toggleSubdomain}><Avatar>Su</Avatar></Button>
      <Button onClick={this.toggleCustom}><Avatar>Cu</Avatar></Button>
    </div>
    )
  }
}
