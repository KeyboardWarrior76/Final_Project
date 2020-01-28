import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class SecurityForm extends Component {

  render() {

    const{value: {toggleCategoryItem}} = this.props

  return(
      <div id="security" align='center'>
        <h3><p>Security</p></h3>
        <Fab variant="extended" onClick={() => toggleCategoryItem('security', 'certificate')}>
          Certificate
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('security', 'factor_authentication')}>
          Factor Authentication
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('security', 'dos_protection')}>
          DOS Protection
        </Fab>
      </div>
    )
  }
}

export default class ConnectedSecurityForm extends React.Component {
  render() {
    return (
      <ProjectConsumer>
        { value => <SecurityForm {...this.props} value={value}/>}
      </ProjectConsumer>
    )
  }
}
