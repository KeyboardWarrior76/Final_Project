import React, {Component} from 'react';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class AccountForm extends Component {

  state = { button: {
    one: 'estimatorButton', two: 'estimatorButton', three: 'estimatorButton',
    four: 'estimatorButton', five: 'estimatorButton', six: 'estimatorButton',
    seven: 'estimatorButton', eight: 'estimatorButton', nine: 'estimatorButton', ten: 'estimatorButton'
    }
  }

  toggle = (unique, item) => {
    const{ button } = this.state
    if (unique === 'estimatorButton') {
      this.setState({ button: {...button, [item]: 'selectedButton'} })
    }
    else if (unique === 'selectedButton') {
      this.setState({ button: {...button, [item]: 'estimatorButton'} })
    }
  }

  render() {

    const { value: {toggleCategoryItem} } = this.props
    const { button: {one, two, three, four, five, six, seven, eight, nine, ten} } = this.state

  return(
    <div id="accounts" align='center'>
      <h1>Accounts & Users</h1>
      <button className={one} onClick={() => { toggleCategoryItem("account", "email_pass"); this.toggle(one, 'one');}}>
        Email & Password
      </button>
      <button className={two} onClick={() => {toggleCategoryItem("account", "facebook"); this.toggle(two, 'two');}}>
        Facebook
      </button>
      <button className={three} onClick={() => {toggleCategoryItem('account', 'twitter'); this.toggle(three, 'three');}}>
        Twitter
      </button>
      <button className={four} onClick={() => {toggleCategoryItem('account', 'google'); this.toggle(four, 'four');}}>
        Google
      </button>
      <br/>
      <button className={five} onClick={() => {toggleCategoryItem('account', 'linkedin'); this.toggle(five, 'five');}}>
        Linkedin
      </button>
      <button className={six} onClick={() => {toggleCategoryItem('account', 'github'); this.toggle(six, 'six');}}>
        GitHub
      </button>
      <br/>
      <button className={seven} onClick={() => {toggleCategoryItem('account', 'invitation'); this.toggle(seven, 'seven');}}>
        Invitation
      </button>
      <button className={eight} onClick={() => {toggleCategoryItem('account', 'multi_account'); this.toggle(eight, 'eight');}}>
        Multiple Accounts
      </button>
      <button className={nine} onClick={() => {toggleCategoryItem('account', 'subdomain'); this.toggle(nine, 'nine');}}>
        Subdomain
      </button>
      <button className={ten} onClick={() => {toggleCategoryItem('account', 'custom'); this.toggle(ten, 'ten');}}>
        Custom
      </button>
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
