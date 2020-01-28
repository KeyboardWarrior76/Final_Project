import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class SocialForm extends Component {

  state = { button: {
    one: 'default', two: 'default', three: 'default', four: 'default'
    }
  }

  toggle = (unique, item) => {
    const{ button } = this.state
    if (unique === 'default') {
      this.setState({ button: {...button, [item]: 'primary'} })
    }
    else if (unique === 'primary') {
      this.setState({ button: {...button, [item]: 'default'} })
    }
  }

  render() {

    const{value: {toggleCategoryItem}} = this.props
    const { button: {one, two, three, four} } = this.state

  return(
      <div id='engagment' align='center'>
        <h3><p>Social & Engagement</p></h3>
        <Fab variant="extended" color={one} onClick={() => {toggleCategoryItem('social', 'facebook_graph'); this.toggle(one, 'one');}}>
          Push to Facebook Graph
        </Fab>
        <Fab variant="extended" color={two} onClick={() => {toggleCategoryItem('social', 'sharing'); this.toggle(two, 'two');}}>
          Social Sharing
        </Fab>
        <Fab variant="extended" color={three} onClick={() => {toggleCategoryItem('social', 'forums'); this.toggle(three, 'three');}}>
          Forums or Commenting
        </Fab>
        <Fab variant="extended" color={four} onClick={() => {toggleCategoryItem('social', 'messaging'); this.toggle(four, 'four');}}>
          Messaging
        </Fab>
      </div>
    )
  }
}

export default class ConnectedSocialForm extends React.Component {
  render() {
    return (
      <ProjectConsumer>
        { value => <SocialForm {...this.props} value={value}/>}
      </ProjectConsumer>
    )
  }
}
