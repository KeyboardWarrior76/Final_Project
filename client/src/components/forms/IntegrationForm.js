import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class IntegrationForm extends Component {

  state = { button: {
    one: 'default', two: 'default', three: 'default', four: 'default'
    }
  }

  toggle = (unique, item) => {
    const{ button } = this.state
    if (unique === 'default') {
      this.setState({ button: {...button, [item]: 'primary'} })
    }
    else if (unique === 'primary') {
      this.setState({ button: {...button, [item]: 'default'} })
    }
  }

  render() {

    const{value: {toggleCategoryItem}} = this.props
    const { button: {one, two, three, four} } = this.state

  return(
      <div align='center'>
        <h3><p>External APIs & Integrations</p></h3>
        <Fab variant="extended" color={one} onClick={() => {toggleCategoryItem('integration', 'third_party'); this.toggle(one, 'one');}}>
          Third Party Services
        </Fab>
        <Fab variant="extended" color={two} onClick={() => {toggleCategoryItem('integration', 'api_integrate'); this.toggle(two, 'two');}}>
          API Integration
        </Fab>
        <Fab variant="extended" color={three} onClick={() => {toggleCategoryItem('integration', 'messaging'); this.toggle(three, 'three');}}>
          SMS Messaging
        </Fab>
        <Fab variant="extended" color={four} onClick={() => {toggleCategoryItem('integration', 'phone_number'); this.toggle(four, 'four');}}>
          Phone Number Masking
        </Fab>
      </div>
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
