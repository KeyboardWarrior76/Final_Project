import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class SocialForm extends Component {

  render() {

    const{value: {toggleCategoryItem}} = this.props

  return(
      <div align='center'>
        <h3><p>Social & Engagement</p></h3>
        <Fab variant="extended" onClick={() => toggleCategoryItem('social', 'facebook_graph')}>
          Push to Facebook Graph
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('social', 'sharing')}>
          Social Sharing
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('social', 'forums')}>
          Forums or Commenting
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('social', 'messaging')}>
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
