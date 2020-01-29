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
        <h1 style={{paddingTop: '60px'}}>External APIs & Integrations</h1>
        <div id="integrations" align='center' className='grid-container'>
          <button className={one} onClick={() => {toggleCategoryItem('integration', 'third_party'); this.toggle(one, 'one');}}>
            Third Party Services
          </button>
          <button className={two} onClick={() => {toggleCategoryItem('integration', 'api_integrate'); this.toggle(two, 'two');}}>
            API Integration
          </button>
          <button className={three} onClick={() => {toggleCategoryItem('integration', 'messaging'); this.toggle(three, 'three');}}>
            SMS Messaging
          </button>
          <button className={four} onClick={() => {toggleCategoryItem('integration', 'phone_number'); this.toggle(four, 'four');}}>
            Phone Number Masking
          </button>
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
