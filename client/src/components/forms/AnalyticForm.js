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
    <div align='center'>
      <h3><p>Admin, Feedback, & Analytics</p></h3>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'cms')}>
        CMS Integration
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'admin')}>
        User Admin Pages
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'moderation')}>
        Moderation/Content Approval
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'intercom')}>
        Intercom
      </Fab>
      <br/>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'usage')}>
        Usage Analytics
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'crash_report')}>
        Crash Reports
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'performance')}>
        Performance Monitoring
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'multilingual')}>
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
