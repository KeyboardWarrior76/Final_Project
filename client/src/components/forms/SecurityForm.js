import React, {Component} from 'react';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class SecurityForm extends Component {

  state = { button: {
    one: 'estimatorButton', two: 'estimatorButton', three: 'estimatorButton'
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
    const { button: {one, two, three} } = this.state

  return(
      <div id="security" align='center'>
        <h2>Security</h2>
        <button className={one} onClick={() => {toggleCategoryItem('security', 'certificate'); this.toggle(one, 'one');}}>
          SSL Certificate Based Security
        </button>
        <button className={two} onClick={() => {toggleCategoryItem('security', 'factor_authentication'); this.toggle(two, 'two');}}>
          Two-Factor Authentication
        </button>
        <button className={three} onClick={() => {toggleCategoryItem('security', 'dos_protection'); this.toggle(three, 'three');}}>
          DoS Protection
        </button>
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
