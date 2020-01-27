import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class SecurityForm extends Component {

  state = { button: {
    one: 'default', two: 'default', three: 'default'
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
    const { button: {one, two, three} } = this.state

  return(
      <div align='center'>
        <h3><p>Security</p></h3>
        <Fab variant="extended" color={one} onClick={() => {toggleCategoryItem('security', 'certificate'); this.toggle(one, 'one');}}>
          SSL Certificate Based Security
        </Fab>
        <Fab variant="extended" color={two} onClick={() => {toggleCategoryItem('security', 'factor_authentication'); this.toggle(two, 'two');}}>
          Two-Factor Authentication
        </Fab>
        <Fab variant="extended" color={three} onClick={() => {toggleCategoryItem('security', 'dos_protection'); this.toggle(three, 'three');}}>
          DoS Protection
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
