import React, {Component} from 'react';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class IntegrationForm extends Component {

  state = { button: {
    one: 'estimatorButton', two: 'estimatorButton', three: 'estimatorButton', four: 'estimatorButton'
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

    const{value: {toggleCategoryItem}} = this.props
    const { button: {one, two, three, four} } = this.state

  return(
      <>
        <h1 id="integrations" style={{paddingTop: '60px'}}>External APIs & Integrations</h1>
        <div align='center' className='grid-container'>

          <fieldset>
            <legend>Third Party Services</legend>
            <button className={one} onClick={() => {toggleCategoryItem('integration', 'third_party'); this.toggle(one, 'one');}}>
              <img className='estimatorIcons' src={require("../../images/third_party.svg")}/>
            </button>
          </fieldset>

          <fieldset>
            <legend>API Integration</legend>
            <button className={two} onClick={() => {toggleCategoryItem('integration', 'api_integrate'); this.toggle(two, 'two');}}>
              <img className='estimatorIcons' src={require("../../images/api_integrate.svg")}/>
            </button>
          </fieldset>

          <fieldset>
            <legend>SMS Messaging</legend>
            <button className={three} onClick={() => {toggleCategoryItem('integration', 'messaging'); this.toggle(three, 'three');}}>
              <img className='estimatorIcons' src={require("../../images/messaging.svg")}/>
            </button>
          </fieldset>

          <fieldset>
            <legend>Phone Number Masking</legend>
            <button className={four} onClick={() => {toggleCategoryItem('integration', 'phone_number'); this.toggle(four, 'four');}}>
              <img className='estimatorIcons' src={require("../../images/phone_number.svg")}/>
            </button>
          </fieldset>

        </div>
      </>
    )
  }
}

export default class ConnectedIntegrationForm extends React.Component {
  render() {
    return (
      <ProjectConsumer>
        { value => <IntegrationForm {...this.props} value={value}/>}
      </ProjectConsumer>
    )
  }
}
