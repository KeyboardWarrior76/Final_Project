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
    <>
      <h1 id='security' style={{paddingTop: '60px'}}>Security</h1>
      <div align='center' className='grid-container'>

        <fieldset>
          <legend>SSL Certificate</legend>
          <button className={one} onClick={() => {toggleCategoryItem('security', 'certificate'); this.toggle(one, 'one');}}>
            <img className='estimatorIcons' alt='Button Icon' src={require("../../images/certificate.svg")}/>
          </button>
        </fieldset>

        <fieldset>
          <legend>Two-Factor Authentication</legend>
          <button className={two} onClick={() => {toggleCategoryItem('security', 'factor_authentication'); this.toggle(two, 'two');}}>
            <img className='estimatorIcons' alt='Button Icon' src={require("../../images/factor_authentication.svg")}/>
          </button>
        </fieldset>

        <fieldset>
          <legend>DoS Protection</legend>
          <button className={three} onClick={() => {toggleCategoryItem('security', 'dos_protection'); this.toggle(three, 'three');}}>
            <img className='estimatorIcons' alt='Button Icon' src={require("../../images/dos_protection.svg")}/>
          </button>
        </fieldset>

      </div>
    </>
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
