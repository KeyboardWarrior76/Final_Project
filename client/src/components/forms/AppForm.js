import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

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
        <Button onClick={this.selectSmall}><Avatar>Sm</Avatar></Button>
        <Button onClick={this.selectMedium}><Avatar>Md</Avatar></Button>
        <Button onClick={this.selectLarge}><Avatar>Lg</Avatar></Button>
      </div>
      <div align='center'>
        <h3><p>UI Level</p></h3>
        <Button onClick={this.selectMvp}><Avatar>MV</Avatar></Button>
        <Button onClick={this.selectBasic}><Avatar>Bs</Avatar></Button>
        <Button onClick={this.selectPolished}><Avatar>Pl</Avatar></Button>
      </div>
    </>
    )
  }
}
