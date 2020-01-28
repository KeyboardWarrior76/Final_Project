import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class AnalyticForm extends Component {

  state = { button: {
    one: 'default', two: 'default', three: 'default',
    four: 'default', five: 'default', six: 'default',
    seven: 'default', eight: 'default'
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
  const { button: {one, two, three, four, five, six, seven, eight} } = this.state

return(
    <div id='analytics' align='center'>
      <h3><p>Admin, Feedback, & Analytics</p></h3>
      <Fab variant="extended" color={one} onClick={() => {toggleCategoryItem('analytic', 'cms'); this.toggle(one, 'one');}}>
        CMS Integration
      </Fab>
      <Fab variant="extended" color={two} onClick={() => {toggleCategoryItem('analytic', 'admin'); this.toggle(two, 'two');}}>
        User Admin Pages
      </Fab>
      <Fab variant="extended" color={three} onClick={() => {toggleCategoryItem('analytic', 'moderation'); this.toggle(three, 'three');}}>
        Moderation/Content Approval
      </Fab>
      <Fab variant="extended" color={four} onClick={() => {toggleCategoryItem('analytic', 'intercom'); this.toggle(four, 'four');}}>
        Intercom
      </Fab>
      <br/>
      <Fab variant="extended" color={five} onClick={() => {toggleCategoryItem('analytic', 'usage'); this.toggle(five, 'five');}}>
        Usage Analytics
      </Fab>
      <Fab variant="extended" color={six} onClick={() => {toggleCategoryItem('analytic', 'crash_report'); this.toggle(six, 'six');}}>
        Crash Reports
      </Fab>
      <Fab variant="extended" color={seven} onClick={() => {toggleCategoryItem('analytic', 'performace'); this.toggle(seven, 'seven');}}>
        Performance Monitoring
      </Fab>
      <Fab variant="extended" color={eight} onClick={() => {toggleCategoryItem('analytic', 'multilingual'); this.toggle(eight, 'eight');}}>
        Multilingual Support
      </Fab>
    </div>
    )
  }
}

export default class ConnectedAnalyticForm extends React.Component {
  render() {
    return (
      <ProjectConsumer>
        { value => <AnalyticForm {...this.props} value={value}/>}
      </ProjectConsumer>
    )
  }
}
