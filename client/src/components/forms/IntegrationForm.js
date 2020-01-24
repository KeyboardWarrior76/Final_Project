import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class IntegrationForm extends Component {

  render() {

    const{value: {toggleCategoryItem}} = this.props

  return(
      <div align='center'>
        <h3><p>External APIs & Integrations</p></h3>
        <Fab variant="extended" onClick={() => toggleCategoryItem('integration', 'third_party')}>
          Third Party Services
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('integration', 'api_integrate')}>
          API Integration
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('integration', 'messaging')}>
          SMS Messaging
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('integration', 'phone_number')}>
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
