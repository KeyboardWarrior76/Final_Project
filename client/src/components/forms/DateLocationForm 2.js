import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

export default class DateLocationForm extends Component {

state = { calendar: false, display: false, map_display: false, booking: false }


  toggleCalendar = () => {
    this.setState({ calendar: !this.state.calendar })
  }

  toggleDisplay = () => {
    this.setState({ display: !this.state.display })
  }

  toggleMap = () => {
    this.setState({ map_display: !this.state.map_display })
  }

  toggleBooking = () => {
    this.setState({ booking: !this.state.booking })
  }

render() {

return(
    <div align='center'>
      <p>Date & Location</p>
      <Button onClick={this.toggleCalendar}><Avatar>Ca</Avatar></Button>
      <Button onClick={this.toggleDisplay}><Avatar>DC</Avatar></Button>
      <Button onClick={this.toggleMap}><Avatar>Ma</Avatar></Button>
      <Button onClick={this.toggleBooking}><Avatar>Bo</Avatar></Button>
    </div>
    )
  }
}
