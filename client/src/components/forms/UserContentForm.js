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
    <>
      <h1 id='userContent' style={{paddingTop: '60px'}}>User Generated Content</h1>
      <div align='center' style={{marginBottom: 30}}  className='grid-container'>

        <fieldset>
          <legend>Dashboard</legend>
          <button className={one} onClick={() => {toggleCategoryItem('user_content', 'dashboard'); this.toggle(one, 'one');}}>
            <img className='estimatorIcons' alt='Button Icon' src={require("../../images/dashboard.svg")}/>
          </button>
        </fieldset>

        <fieldset>
          <legend>Activity Feed</legend>
          <button className={two} onClick={() => {toggleCategoryItem('user_content', 'activity_feed'); this.toggle(two, 'two');}}>
            <img className='estimatorIcons' alt='Button Icon' src={require("../../images/activity_feed.svg")}/>
          </button>
        </fieldset>

        <fieldset>
          <legend>File Uploading</legend>
          <button className={three} onClick={() => {toggleCategoryItem('user_content', 'uploading'); this.toggle(three, 'three');}}>
            <img className='estimatorIcons' alt='Button Icon' src={require("../../images/uploading.svg")}/>
          </button>
        </fieldset>

        <fieldset>
          <legend>User Profile</legend>
          <button className={four} onClick={() => {toggleCategoryItem('user_content', 'profile'); this.toggle(four, 'four');}}>
            <img className='estimatorIcons' alt='Button Icon' src={require("../../images/profile.svg")}/>
          </button>
        </fieldset>

        <fieldset>
          <legend>Transactional Emails</legend>
          <button className={five} onClick={() => {toggleCategoryItem('user_content', 'transactional_email'); this.toggle(five, 'five');}}>
            <img className='estimatorIcons' alt='Button Icon' src={require("../../images/transactional_email.svg")}/>
          </button>
        </fieldset>

        <fieldset>
          <legend>Tags</legend>
          <button className={six} onClick={() => {toggleCategoryItem('user_content', 'tags'); this.toggle(six, 'six');}}>
            <img className='estimatorIcons' alt='Button Icon' src={require("../../images/tags.svg")}/>
          </button>
        </fieldset>

        <fieldset>
          <legend>Rating or Reviews</legend>
          <button className={seven} onClick={() => {toggleCategoryItem('user_content', 'rating'); this.toggle(seven, 'seven');}}>
            <img className='estimatorIcons' alt='Button Icon' src={require("../../images/rating.svg")}/>
          </button>
        </fieldset>

        <fieldset>
          <legend>Audio/Video Processing</legend>
          <button className={eight} onClick={() => {toggleCategoryItem('user_content', 'audio_video'); this.toggle(eight, 'eight');}}>
            <img className='estimatorIcons' alt='Button Icon' src={require("../../images/audio_video.svg")}/>
          </button>
        </fieldset>

        <fieldset>
          <legend>Free Text Searching</legend>
          <button className={nine} onClick={() => {toggleCategoryItem('user_content', 'searching'); this.toggle(nine, 'nine');}}>
            <img className='estimatorIcons' alt='Button Icon' src={require("../../images/searching.svg")}/>
          </button>
        </fieldset>

      </div>
    </>
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
