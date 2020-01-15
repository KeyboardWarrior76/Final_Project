import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';

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
      <h3><p>Analytics</p></h3>
      <Fab onClick={this.toggleCms} variant="extended">CMS</Fab>
      <Fab onClick={this.toggleAdmin} variant="extended">Admin</Fab>
      <Fab onClick={this.toggleModeration} variant="extended">Moderation</Fab>
      <Fab onClick={this.toggleIntercom} variant="extended">Intercoms</Fab>
      <p></p>
      <Fab onClick={this.toggleUsage} variant="extended">Usage Data</Fab>
      <Fab onClick={this.toggleCrash} variant="extended">Crash Reports</Fab>
      <Fab onClick={this.togglePerformance} variant="extended">Performance</Fab>
      <Fab onClick={this.toggleMulti} variant="extended">Multi-lingual</Fab>
    </div>
    )
  }
}
