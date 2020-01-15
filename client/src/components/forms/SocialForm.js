import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

export default class SocialForm extends Component {

state = { messaging: false, forums: false, sharing: false, facebook_graph: false }


  toggleMessaging = () => {
    this.setState({ messaging: !this.state.messaging })
  }

  toggleForums = () => {
    this.setState({ forums: !this.state.forums })
  }

  toggleSharing = () => {
    this.setState({ sharing: !this.state.sharing })
  }

  toggleFacebookGraph = () => {
    this.setState({ facebook_graph: !this.state.facebook_graph })
  }

render() {

return(
    <div align='center'>
      <h3><p>Social</p></h3>
      <Button onClick={this.toggleMessaging}><Avatar>M</Avatar></Button>
      <Button onClick={this.toggleForums}><Avatar>Fo</Avatar></Button>
      <Button onClick={this.toggleSharing}><Avatar>Sh</Avatar></Button>
      <Button onClick={this.toggleFacebookGraph}><Avatar>Fa</Avatar></Button>
    </div>
    )
  }
}
