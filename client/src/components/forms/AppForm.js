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
      <h1 id='size' style={{paddingTop: '60px'}}>Application Size</h1>
      <div align='center' className='grid-container'>

        <fieldset>
          <legend>Small</legend>
          <button className={small} onClick={() => {sizeSet('small'); this.toggle(size, 'small');}} style={{color: "#85F0D6", fontSize: 50}}>S</button>
        </fieldset>

        <fieldset>
          <legend>Medium</legend>
          <button className={medium} onClick={() => {sizeSet('medium'); this.toggle(size, 'medium');}} style={{color: "#859DF0", fontSize: 50}}>M</button>
        </fieldset>

        <fieldset>
          <legend>Large</legend>
          <button className={large} onClick={() => {sizeSet('large'); this.toggle(size, 'large');}} style={{color: "#DE412E", fontSize: 50}}>L</button>
        </fieldset>

      </div>

      <h1 id='UI' style={{paddingTop: '60px'}}>UI Level</h1>
      <div align='center' className='grid-container'>

        <fieldset>
          <legend>Simple</legend>
          <button className={simple} onClick={() => {uiSet('simple'); this.toggle(ui_level, 'simple');}}></button>
        </fieldset>

        <fieldset>
          <legend>Detailed</legend>
          <button className={detailed} onClick={() => {uiSet('detailed'); this.toggle(ui_level, 'detailed');}}></button>
        </fieldset>

        <fieldset>
          <legend>Sophisticated</legend>
          <button className={soph} onClick={() => {uiSet('sophisticated'); this.toggle(ui_level, 'soph');}}></button>
        </fieldset>

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
