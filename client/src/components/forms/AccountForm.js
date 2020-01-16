import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class AccountForm extends Component {

  render() {

    const{value: {toggleCategoryItem}} = this.props

  return(
    <div align='center'>
      <h3><p>Accounts & Users</p></h3>
      <Fab onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.email_pass)
      } variant="extended">
        Email & Password
      </Fab>
      <Fab onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.facebook)
      } variant="extended">
        Facebook
      </Fab>
      <Fab onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.twitter)
      } variant="extended">
        Twitter
      </Fab>
      <p></p>
      <Fab onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.twitter)
      } variant="extended">
        Google
      </Fab>
      <Fab onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.linkedin)
      } variant="extended">
        Linkedin
      </Fab>
      <Fab onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.github)
      } variant="extended">
        GitHub
      </Fab>
      <Fab onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.invitation)
      } variant="extended">
        Invitation
      </Fab>
      <p></p>
      <Fab onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.multi_account)
      } variant="extended">
        Multiple Accounts
      </Fab>
      <Fab onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.subdomain)
      } variant="extended">
        Subdomain
      </Fab>
      <Fab onClick={() => toggleCategoryItem()} variant="extended">
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
