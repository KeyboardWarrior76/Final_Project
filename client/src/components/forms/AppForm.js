import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';

export default class AppForm extends Component {

  state = { size: undefined, ui_level: undefined }

  selectSmall = () => {
    this.setState({ size: 'small' })
  }

  selectMedium = () => {
    this.setState({ size: 'medium' })
  }

  selectLarge = () => {
    this.setState({ size: 'large' })
  }

  selectMvp = () => {
    this.setState({ ui_level: 'mvp' })
  }

  selectBasic = () => {
    this.setState({ ui_level: 'basic' })
  }

  selectPolished = () => {
    this.setState({ ui_level: 'polished' })
  }

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
