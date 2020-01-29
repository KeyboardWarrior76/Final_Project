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
    <>
      <h1 id='engagement' style={{paddingTop: '60px'}}>Social & Engagement</h1>
      <div align='center' className='grid-container'>

        <fieldset>
          <legend>Push to Facebook Graph</legend>
          <button className={one} onClick={() => {toggleCategoryItem('social', 'facebook_graph'); this.toggle(one, 'one');}}>

          </button>
        </fieldset>

        <fieldset>
          <legend>Social Sharing</legend>
          <button className={two} onClick={() => {toggleCategoryItem('social', 'sharing'); this.toggle(two, 'two');}}>

          </button>
        </fieldset>

        <fieldset>
          <legend>Forums or Commenting</legend>
          <button className={three} onClick={() => {toggleCategoryItem('social', 'forums'); this.toggle(three, 'three');}}>

          </button>
        </fieldset>

        <fieldset>
          <legend>Messaging</legend>
          <button className={four} onClick={() => {toggleCategoryItem('social', 'messaging'); this.toggle(four, 'four');}}>

          </button>
        </fieldset>

      </div>
    </>
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
