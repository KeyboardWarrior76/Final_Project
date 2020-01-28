import React, {Component} from 'react';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class SocialForm extends Component {

  state = { button: {
    one: 'estimatorButton', two: 'estimatorButton', three: 'estimatorButton', four: 'estimatorButton'
    }
  }

  toggle = (unique, item) => {
    const{ button } = this.state
    if (unique === 'estimatorButton') {
      this.setState({ button: {...button, [item]: 'selectedButton'} })
    }
    else if (unique === 'selectedButton') {
      this.setState({ button: {...button, [item]: 'estimatorButton'} })
    }
  }

  render() {

    const{value: {toggleCategoryItem}} = this.props
    const { button: {one, two, three, four} } = this.state

  return(
      <div id='engagment' align='center'>
        <h2>Social & Engagement</h2>
        <button className={one} onClick={() => {toggleCategoryItem('social', 'facebook_graph'); this.toggle(one, 'one');}}>
          Push to Facebook Graph
        </button>
        <button className={two} onClick={() => {toggleCategoryItem('social', 'sharing'); this.toggle(two, 'two');}}>
          Social Sharing
        </button>
        <button className={three} onClick={() => {toggleCategoryItem('social', 'forums'); this.toggle(three, 'three');}}>
          Forums or Commenting
        </button>
        <button className={four} onClick={() => {toggleCategoryItem('social', 'messaging'); this.toggle(four, 'four');}}>
          Messaging
        </button>
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
