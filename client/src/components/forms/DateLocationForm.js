import React, {Component} from 'react';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class DateLocationForm extends Component {

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
      <div id='dateLocation' align='center'>
        <h1>Dates & Locations</h1>
        <button className={one} onClick={() => {toggleCategoryItem('date_location', 'calendar'); this.toggle(one, 'one');}}>
          Calendaring
        </button>
        <button className={two} onClick={() => {toggleCategoryItem('date_location', 'display'); this.toggle(two, 'two');}}>
          Custom Map
        </button>
        <button className={three} onClick={() => {toggleCategoryItem('date_location', 'map_display'); this.toggle(three, 'three');}}>
          Geolocation
        </button>
        <button className={four} onClick={() => {toggleCategoryItem('date_location', 'booking'); this.toggle(four, 'four');}}>
          Bookings
        </button>
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
