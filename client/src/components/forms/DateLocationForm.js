import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class DateLocationForm extends Component {

  render() {

    const{value: {toggleCategoryItem}} = this.props

  return(
      <div align='center'>
        <h3><p>Dates & Locations</p></h3>
        <Fab variant="extended" onClick={() => toggleCategoryItem('date_location', 'calendar')}>
          Calendaring
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('date_location', 'display')}>
          Custom Map
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('date_location', 'map_display')}>
          Geolocation
        </Fab>
        <Fab variant="extended" onClick={() => toggleCategoryItem('date_location', 'booking')}>
          Bookings
        </Fab>
      </div>
    )
  }
}

export default class ConnectedDateLocationForm extends React.Component {
  render() {
    return (
      <ProjectConsumer>
        { value => <DateLocationForm {...this.props} value={value}/>}
      </ProjectConsumer>
    )
  }
}
