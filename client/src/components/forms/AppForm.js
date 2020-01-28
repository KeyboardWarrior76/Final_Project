import React, {Component} from 'react';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class AppForm extends Component {

  state = {
    size: {small: 'selectedButton', medium: 'estimatorButton', large: 'estimatorButton'},
    ui_level: {simple: 'selectedButton', detailed: 'estimatorButton', soph: 'estimatorButton'}
  }

  toggle = (item, string) => {
    const { size, ui_level } = this.state
    if (item === size) {
        this.setState({ size: {small: 'estimatorButton', medium: 'estimatorButton', large: 'estimatorButton',
        [string]: 'selectedButton'}
      })
    }
    else if (item === ui_level) {
      this.setState({ ui_level: {simple: 'estimatorButton', detailed: 'estimatorButton', soph: 'estimatorButton',
        [string]: 'selectedButton'}
      })
    }
  }

  render() {

    const{uiSet, sizeSet} = this.props.value
    const { size, ui_level, size: {small, medium, large}, ui_level: {simple, detailed, soph} } = this.state

  return(
    <>
      <div style={{paddingTop: '60px'}} align='center'>
        <h2>Application Size</h2>
        <button className={small} onClick={() => {sizeSet('small'); this.toggle(size, 'small');}} style={{color: "#85F0D6"}}>S</button>
        <button className={medium} onClick={() => {sizeSet('medium'); this.toggle(size, 'medium');}} style={{color: "#859DF0"}}>M</button>
        <button className={large} onClick={() => {sizeSet('large'); this.toggle(size, 'large');}} style={{color: "#DE412E"}}>L</button>
      </div>
      <div align='center'>
        <h2>UI Level</h2>
        <button className={simple} onClick={() => {uiSet('simple'); this.toggle(ui_level, 'simple');}}>simple</button>
        <button className={detailed} onClick={() => {uiSet('detailed'); this.toggle(ui_level, 'detailed');}}>detailed</button>
        <button className={soph} onClick={() => {uiSet('sophisticated'); this.toggle(ui_level, 'soph');}}>sophisticated</button>
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
