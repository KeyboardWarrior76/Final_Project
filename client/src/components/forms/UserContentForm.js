import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class UserContentForm extends Component {

  state = { button: {
    one: 'default', two: 'default', three: 'default',
    four: 'default', five: 'default', six: 'default',
    seven: 'default', eight: 'default', nine: 'default'
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
    const { button: {one, two, three, four, five, six, seven, eight, nine} } = this.state

  return(
    <div align='center'>
      <h3><p>User Generated Content</p></h3>
      <Fab variant="extended" color={one} onClick={() => {toggleCategoryItem('user_content', 'dashboard'); this.toggle(one, 'one');}}>
        Dashboard
      </Fab>
      <Fab variant="extended" color={two} onClick={() => {toggleCategoryItem('user_content', 'activity_feed'); this.toggle(two, 'two');}}>
        Activity Feed
      </Fab>
      <Fab variant="extended" color={three} onClick={() => {toggleCategoryItem('user_content', 'uploading'); this.toggle(three, 'three');}}>
        File Uploading
      </Fab>
      <br/>
      <Fab variant="extended" color={four} onClick={() => {toggleCategoryItem('user_content', 'profile'); this.toggle(four, 'four');}}>
        User Profile
      </Fab>
      <Fab variant="extended" color={five} onClick={() => {toggleCategoryItem('user_content', 'transactional_email'); this.toggle(five, 'five');}}>
        Transactional Emails
      </Fab>
      <Fab variant="extended" color={six} onClick={() => {toggleCategoryItem('user_content', 'tags'); this.toggle(six, 'six');}}>
        Tags
      </Fab>
      <br/>
      <Fab variant="extended" color={seven} onClick={() => {toggleCategoryItem('user_content', 'rating'); this.toggle(seven, 'seven');}}>
        Ratings or Reviews
      </Fab>
      <Fab variant="extended" color={eight} onClick={() => {toggleCategoryItem('user_content', 'audio_video'); this.toggle(eight, 'eight');}}>
        Audio/Video Proccessing
      </Fab>
      <Fab variant="extended" color={nine} onClick={() => {toggleCategoryItem('user_content', 'searching'); this.toggle(nine, 'nine');}}>
        Free Text Searching
      </Fab>
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
