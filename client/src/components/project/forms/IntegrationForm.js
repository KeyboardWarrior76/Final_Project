import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

export default class IntegrationForm extends Component {

state = { third_party: false, api_integrate:false, messaging:false, phone_number:false }


  toggleThird = () => {
    this.setState({ third_party: !this.state.third_party })
  }

  toggleApi = () => {
    this.setState({ api_integrate: !this.state.api_integrate })
  }

  toggleMessaging = () => {
    this.setState({ messaging: !this.state.messaging })
  }

  togglePhone = () => {
    this.setState({ phone_number: !this.state.phone_number })
  }

render() {

return(
    <div align='center'>
      <p>Integration</p>
      <Button onClick={this.toggleThird}><Avatar>T</Avatar></Button>
      <Button onClick={this.toggleApi}><Avatar>A</Avatar></Button>
      <Button onClick={this.toggleMessaging}><Avatar>M</Avatar></Button>
      <Button onClick={this.togglePhone}><Avatar>Ph</Avatar></Button>
    </div>
    )
  }
}
