import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class AccountForm extends Component {

  render() {

    const{value: {toggleCategoryItem}} = this.props

  return(
    <div align='center'>
      <h3><p>Accounts & Users</p></h3>
      <Fab variant="extended" onClick={() => toggleCategoryItem("account", "email_pass")}>
        Email & Password
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem("account", "facebook")}>
        Facebook
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'twitter')}>
        Twitter
      </Fab>
      <p></p>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'google')}>
        Google
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'linkedin')}>
        Linkedin
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'github')}>
        GitHub
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'invitation')}>
        Invitation
      </Fab>
      <p></p>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'multi_account')}>
        Multiple Accounts
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'subdomain')}>
        Subdomain
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('account', 'custom')}>
        Custom
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
