import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class AppForm extends Component {

  state = { size: {small: 'primary', medium: 'default', large: 'default'},
    ui_level: {simple: 'primary', detailed: 'default', soph: 'default'}
  }

  toggle = (item, string) => {
    const { size, ui_level } = this.state
    if (item === size) {
      this.setState({ size: {[string]: 'primary'} })
    }
    else if (item === ui_level) {
      this.setState({ ui_level: {[string]: 'primary'} })
    }
  }

  render() {

    const{uiSet, sizeSet} = this.props.value
    const { size, ui_level,
      size: {small, medium, large},
      ui_level: {simple, detailed, soph} } = this.state

  return(
    <>
      <div align='center'>
        <h3><p>App Size</p></h3>
        <Fab color={small} onClick={()=> {sizeSet('small'); this.toggle(size, 'small');}} variant="extended">
          Small
        </Fab>
        <Fab color={medium} onClick={()=> {sizeSet('medium'); this.toggle(size, 'medium');}} variant="extended">
          Medium
        </Fab>
        <Fab color={large} onClick={()=> {sizeSet('large'); this.toggle(size, 'large');}} variant="extended">
          Large
        </Fab>
      </div>
      <div align='center'>
        <h3><p>UI Level</p></h3>
        <Fab color={simple} onClick={()=> {uiSet('simple'); this.toggle(ui_level, 'simple');}} variant="extended">
          Simple
        </Fab>
        <Fab color={detailed} onClick={()=> {uiSet('detailed'); this.toggle(ui_level, 'detailed');}} variant="extended">
          Detailed
        </Fab>
        <Fab color={soph} onClick={()=> {uiSet('sophisticated'); this.toggle(ui_level, 'soph');}} variant="extended">
          Sophisticated
        </Fab>
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
