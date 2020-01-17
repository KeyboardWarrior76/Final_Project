import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class AppForm extends Component {

  render() {

  return(
    <>
      <div align='center'>
        <h3><p>App Size</p></h3>
        <Fab onClick={this.selectSmall} variant="extended">Small</Fab>
        <Fab onClick={this.selectMedium} variant="extended">Medium</Fab>
        <Fab onClick={this.selectLarge} variant="extended">Large</Fab>
      </div>
      <div align='center'>
        <h3><p>UI Level</p></h3>
        <Fab onClick={this.selectMvp} variant="extended">MVP</Fab>
        <Fab onClick={this.selectBasic} variant="extended">Basic</Fab>
        <Fab onClick={this.selectPolished} variant="extended">Polished</Fab>
      </div>
    </>
    )
  }
}

export default class ConnectedAppForm extends React.Component {
  render() {
    return (
      <ProjectConsumer>
        { value => <AppForm {...this.props} value={value}/>}
      </ProjectConsumer>
    )
  }
}
