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
      this.setState({ size: {[string]: 'selectedButton'} })
    }
    else if (item === ui_level) {
      this.setState({ ui_level: {[string]: 'selectedButton'} })
    }
  }

  render() {

    const{uiSet, sizeSet} = this.props.value
    const { size, ui_level,
      size: {small, medium, large},
      ui_level: {simple, detailed, soph} } = this.state

  return(
    <>
      <div style={{paddingTop: '60px'}} align='center'>
        <h1>Application Size</h1>
        <button className={small} onClick={() => {sizeSet('small'); this.toggle(small, 'small');}} style={{color: "#85F0D6"}}>S</button>
        <button className={medium} onClick={() => {sizeSet('medium'); this.toggle(medium, 'medium');}} style={{color: "#859DF0"}}>M</button>
        <button className={large} onClick={() => {sizeSet('large'); this.toggle(large, 'large');}} style={{color: "#DE412E"}}>L</button>
      </div>
      <div align='center'>
        <h1>UI Level</h1>
        <button className={simple} onClick={() => {sizeSet('simple'); this.toggle(simple, 'simple');}}>simple</button>
        <button className={detailed} onClick={() => {sizeSet('detailed'); this.toggle(detailed, 'detailed');}}>detailed</button>
        <button className={soph} onClick={() => {sizeSet('sophisticated'); this.toggle(soph, 'soph');}}>sophisticated</button>
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
