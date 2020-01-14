import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

export default class AnalyticForm extends Component {

state = { cms: false,
  admin: false,
  moderation: false,
  intercom: false,
  usage: false,
  crash_report: false,
  performance: false,
  multilingual: false }

  toggleCms = () => {
    this.setState({ cms: !this.state.cms })
  }

  toggleAdmin = () => {
    this.setState({ admin: !this.state.admin })
  }

  toggleModeration = () => {
    this.setState({ moderation: !this.state.moderation })
  }

  toggleIntercom = () => {
    this.setState({ intercom: !this.state.intercom })
  }

  toggleUsage = () => {
    this.setState({ usage: !this.state.usage })
  }

  toggleCrash = () => {
    this.setState({ crash_report: !this.state.crash_report })
  }

  togglePerformance = () => {
    this.setState({ performance: !this.state.performance })
  }

  toggleMulti = () => {
    this.setState({ multilingual: !this.state.multilingual })
  }

render() {

return(
    <div align='center'>
      <p>Analytics</p>
      <Button onClick={this.toggleCms}><Avatar>C</Avatar></Button>
      <Button onClick={this.toggleAdmin}><Avatar>Ad</Avatar></Button>
      <Button onClick={this.toggleModeration}><Avatar>Mo</Avatar></Button>
      <Button onClick={this.toggleIntercom}><Avatar>In</Avatar></Button>
      <Button onClick={this.toggleUsage}><Avatar>Us</Avatar></Button>
      <Button onClick={this.toggleCrash}><Avatar>Cr</Avatar></Button>
      <Button onClick={this.togglePerformance}><Avatar>Pm</Avatar></Button>
      <Button onClick={this.toggleMulti}><Avatar>Mu</Avatar></Button>
    </div>
    )
  }
}
