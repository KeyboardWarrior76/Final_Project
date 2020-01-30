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
    <>
      <h1 id="accounts" style={{paddingTop: '60px'}}>Accounts & Users</h1>
      <div align='center' className='grid-container'>

        <fieldset>
          <legend>Email & Password</legend>
          <button className={one} onClick={() => { toggleCategoryItem("account", "email_pass"); this.toggle(one, 'one');}}>

          </button>
        </fieldset>

        <fieldset>
          <legend>Facebook</legend>
          <button className={two} onClick={() => {toggleCategoryItem("account", "facebook"); this.toggle(two, 'two');}}>

          </button>
        </fieldset>

        <fieldset>
          <legend>Twitter</legend>
          <button className={three} onClick={() => {toggleCategoryItem('account', 'twitter'); this.toggle(three, 'three');}}>

          </button>
        </fieldset>

        <fieldset>
          <legend>Google</legend>
          <button className={four} onClick={() => {toggleCategoryItem('account', 'google'); this.toggle(four, 'four');}}>

          </button>
        </fieldset>

        <fieldset>
          <legend>LinkedIn</legend>
          <button className={five} onClick={() => {toggleCategoryItem('account', 'linkedin'); this.toggle(five, 'five');}}>

          </button>
        </fieldset>

        <fieldset>
          <legend>GitHub</legend>
          <button className={six} onClick={() => {toggleCategoryItem('account', 'github'); this.toggle(six, 'six');}}>

          </button>
        </fieldset>

        <fieldset>
          <legend>Invitation</legend>
          <button className={seven} onClick={() => {toggleCategoryItem('account', 'invitation'); this.toggle(seven, 'seven');}}>

          </button>
        </fieldset>

        <fieldset>
          <legend>Multiple Accounts</legend>
          <button className={eight} onClick={() => {toggleCategoryItem('account', 'multi_account'); this.toggle(eight, 'eight');}}>

          </button>
        </fieldset>

        <fieldset>
          <legend>Subdomain</legend>
          <button className={nine} onClick={() => {toggleCategoryItem('account', 'subdomain'); this.toggle(nine, 'nine');}}>

          </button>
        </fieldset>

        <fieldset>
          <legend>Custom</legend>
          <button className={ten} onClick={() => {toggleCategoryItem('account', 'custom'); this.toggle(ten, 'ten');}}>

          </button>
        </fieldset>
        
      </div>
    </>
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
