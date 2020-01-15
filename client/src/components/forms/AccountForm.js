import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class AccountForm extends Component {

  render() {
    const{ categories, toggle } = this.props
  return(
    <div align='center'>
      <p>Accounts & Users</p>
      <Button onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.email_pass)
      }>
        Email & Password
      </Button>
      <Button onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.facebook)
      }>
        Facebook
      </Button>
      <Button onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.twitter)
      }>
        Twitter
      </Button>
      <Button onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.twitter)
      }>
        Google
      </Button>
      <Button onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.linkedin)
      }>
        Linkedin
      </Button>
      <Button onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.github)
      }>
        GitHub
      </Button>
      <Button onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.invitation)
      }>
        Invitation
      </Button>
      <Button onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.multi_account)
      }>
        Multiple Accounts
      </Button>
      <Button onClick={() => this.props.project.toggleCategoryItem(
        this.props.state.categories.account,
        this.props.state.categories.account.subdomain)
      }>
        Subdomain
      </Button>
      <Button onClick={() => this.props.toggle(
        categories.account,
        categories.account.custom)
      }>
        Custom
      </Button>
    </div>
    )
  }
}

export default class ConnectedAccountForm extends React.Component {
  render() {
    return (
      <ProjectConsumer>
        { value => <AccountForm {...this.props} toggle={value.toggleCategoryItem} categories={value.categories} />}
      </ProjectConsumer>
    )
  }
}
