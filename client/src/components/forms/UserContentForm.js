import React, {Component} from 'react';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class UserContentForm extends Component {

  state = { button: {
    one: 'estimatorButton', two: 'estimatorButton', three: 'estimatorButton',
    four: 'estimatorButton', five: 'estimatorButton', six: 'estimatorButton',
    seven: 'estimatorButton', eight: 'estimatorButton', nine: 'estimatorButton'
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
    const { button: {one, two, three, four, five, six, seven, eight, nine} } = this.state

  return(
    <div id="userContent" align='center'>
      <h1>User Generated Content</h1>
      <button className={one} onClick={() => {toggleCategoryItem('user_content', 'dashboard'); this.toggle(one, 'one');}}>
        Dashboard
      </button>
      <button className={two} onClick={() => {toggleCategoryItem('user_content', 'activity_feed'); this.toggle(two, 'two');}}>
        Activity Feed
      </button>
      <button className={three} onClick={() => {toggleCategoryItem('user_content', 'uploading'); this.toggle(three, 'three');}}>
        File Uploading
      </button>
      <button className={four} onClick={() => {toggleCategoryItem('user_content', 'profile'); this.toggle(four, 'four');}}>
        User Profile
      </button>
      <br/>
      <button className={five} onClick={() => {toggleCategoryItem('user_content', 'transactional_email'); this.toggle(five, 'five');}}>
        Transactional Emails
      </button>
      <button className={six} onClick={() => {toggleCategoryItem('user_content', 'tags'); this.toggle(six, 'six');}}>
        Tags
      </button>
      <button className={seven} onClick={() => {toggleCategoryItem('user_content', 'rating'); this.toggle(seven, 'seven');}}>
        Ratings or Reviews
      </button>
      <button className={eight} onClick={() => {toggleCategoryItem('user_content', 'audio_video'); this.toggle(eight, 'eight');}}>
        Audio/Video Proccessing
      </button>
      <button className={nine} onClick={() => {toggleCategoryItem('user_content', 'searching'); this.toggle(nine, 'nine');}}>
        Free Text Searching
      </button>
    </div>
    )
  }
}

export default class ConnectedUserContentForm extends React.Component {
  render() {
    return (
      <ProjectConsumer>
        { value => <UserContentForm {...this.props} value={value}/>}
      </ProjectConsumer>
    )
  }
}
