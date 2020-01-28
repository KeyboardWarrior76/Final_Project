import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class DateLocationForm extends Component {

  state = { button: {
    one: 'default', two: 'default', three: 'default', four: 'default'
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
    const { button: {one, two, three, four} } = this.state

  return(
      <div id='dateLocation' align='center'>
        <h3><p>Dates & Locations</p></h3>
        <Fab variant="extended" color={one} onClick={() => {toggleCategoryItem('date_location', 'calendar'); this.toggle(one, 'one');}}>
          Calendaring
        </Fab>
        <Fab variant="extended" color={two} onClick={() => {toggleCategoryItem('date_location', 'display'); this.toggle(two, 'two');}}>
          Custom Map
        </Fab>
        <Fab variant="extended" color={three} onClick={() => {toggleCategoryItem('date_location', 'map_display'); this.toggle(three, 'three');}}>
          Geolocation
        </Fab>
        <Fab variant="extended" color={four} onClick={() => {toggleCategoryItem('date_location', 'booking'); this.toggle(four, 'four');}}>
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
