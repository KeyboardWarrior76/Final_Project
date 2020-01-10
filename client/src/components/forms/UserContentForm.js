import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

export default class UserContentForm extends Component {

state = { dashboard: false,
  activity_feed: false,
  uploading: false,
  profiles: false,
  transactional_emails: false,
  tags: false,
  ratings: false,
  audio_video: false,
  searching: false }

  toggleDashboard = () => {
    this.setState({ dashboard: !this.state.dashboard })
  }

  toggleActivityFeed = () => {
    this.setState({ activity_feed: !this.state.activity_feed })
  }

  toggleUploading = () => {
    this.setState({ uploading: !this.state.uploading })
  }

  toggleProfiles = () => {
    this.setState({ profiles: !this.state.profiles })
  }

  toggleTransactional = () => {
    this.setState({ transactional_emails: !this.state.transactional_emails })
  }

  toggleTags = () => {
    this.setState({ tags: !this.state.tags })
  }

  toggleRatings = () => {
    this.setState({ ratings: !this.state.ratings })
  }

  toggleAudioVideo = () => {
    this.setState({ audio_video: !this.state.audio_video })
  }

  toggleSearching = () => {
    this.setState({ searching: !this.state.searching })
  }

render() {

return(
    <div align='center'>
      <p>User Content</p>
      <Button onClick={this.toggleDashboard}><Avatar>Da</Avatar></Button>
      <Button onClick={this.toggleActivityFeed}><Avatar>AF</Avatar></Button>
      <Button onClick={this.toggleUploading}><Avatar>Up</Avatar></Button>
      <Button onClick={this.toggleProfiles}><Avatar>Pr</Avatar></Button>
      <Button onClick={this.toggleTransactional}><Avatar>Tr</Avatar></Button>
      <Button onClick={this.toggleTags}><Avatar>Ta</Avatar></Button>
      <Button onClick={this.toggleRatings}><Avatar>R</Avatar></Button>
      <Button onClick={this.toggleAudioVideo}><Avatar>AV</Avatar></Button>
      <Button onClick={this.toggleSearching}><Avatar>S</Avatar></Button>
    </div>
    )
  }
}
