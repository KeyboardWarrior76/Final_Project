import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class AppForm extends Component {

  render() {
    const{uiSet, sizeSet} = this.props.value
  return(
    <>
      <div id="size" align='center'>
        <h3><p>App Size</p></h3>
        <Fab onClick={()=>sizeSet('small')} variant="extended">Small</Fab>
        <Fab onClick={()=>sizeSet('medium')} variant="extended">Medium</Fab>
        <Fab onClick={()=>sizeSet('large')} variant="extended">Large</Fab>
      </div>
      <div id="userInterface" align='center'>
        <h3><p>UI Level</p></h3>
        <Fab onClick={()=>uiSet('simple')} variant="extended">simple</Fab>
        <Fab onClick={()=>uiSet('detailed')} variant="extended">detailed</Fab>
        <Fab onClick={()=>uiSet('sophisticated')} variant="extended">sophisticated</Fab>
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
