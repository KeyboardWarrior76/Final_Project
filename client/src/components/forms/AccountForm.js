import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class AccountForm extends Component {

  render() {

    const{value: {toggleCategoryItem}} = this.props

  return(
    <div align='center'>
      <h3><p>Users & Accounts</p></h3>
      <Fab variant="extended" onClick={() => toggleCategoryItem("account", "email_pass")}>
        Email/Password Login
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem("account", "facebook")}>
        Facebook Login
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'twitter')}>
        Twitter Login
      </Fab>
      <br/>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'google')}>
        Google Login
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'linkedin')}>
        Linkedin Login
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'github')}>
        GitHub Login
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'invitation')}>
        User Invitation Emails
      </Fab>
      <br/>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'multi_account')}>
        Multi-tenant Accounts
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'subdomain')}>
        Subdomains
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'custom')}>
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
