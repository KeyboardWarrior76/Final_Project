import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class AnalyticForm extends Component {

render() {

  const{value: {toggleCategoryItem}} = this.props

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
