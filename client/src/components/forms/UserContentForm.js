import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class UserContentForm extends Component {

  render() {

    const{value: {toggleCategoryItem}} = this.props

  return(
    <div align='center'>
      <h3><p>User Generated Content</p></h3>
      <Fab variant="extended" onClick={() => toggleCategoryItem("user_content", "dashboard")}>
        Dashboard
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem("user_content", "activity_feed")}>
        Activity Feed
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('user_content', 'uploading')}>
        File Uploading
      </Fab>
      <br/>
      <Fab variant="extended" onClick={() => toggleCategoryItem('user_content', 'profile')}>
        User Profile
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('user_content', 'transactional_email')}>
        Transactional Emails
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('user_content', 'tags')}>
        Tags
      </Fab>
      <br/>
      <Fab variant="extended" onClick={() => toggleCategoryItem('user_content', 'rating')}>
        Ratings or Reviews
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('user_content', 'audio_video')}>
        Audio/Video Proccessing
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('user_content', 'searching')}>
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
