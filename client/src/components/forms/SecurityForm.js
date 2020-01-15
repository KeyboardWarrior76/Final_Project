import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

export default class SecurityForm extends Component {

state = { certificate: false, factor_authentication: false, dos_protection: false }


  toggleCertificate = () => {
    this.setState({ certificate: !this.state.certificate })
  }

  toggleFactor = () => {
    this.setState({ factor_authentication: !this.state.factor_authentication })
  }

  toggleDos = () => {
    this.setState({ dos_protection: !this.state.dos_protection })
  }

render() {

return(
    <div align='center'>
      <p>Security</p>
      <Button onClick={this.toggleCertificate}><Avatar label='c'>C</Avatar></Button>
      <Button onClick={this.toggleFactor}><Avatar>F</Avatar></Button>
      <Button onClick={this.toggleDos}><Avatar>D</Avatar></Button>
    </div>
    )
  }
}
