import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class AnalyticForm extends Component {

render() {

  const{value: {toggleCategoryItem}} = this.props

return(
    <div id='analytics' align='center'>
      <h3><p>Analytics</p></h3>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'cms')}>
        CMS
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'admin')}>
        Admin
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'moderation')}>
        Moderation
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'intercom')}>
        Intercoms
      </Fab>
      <br/>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'usage')}>
        Usage Data
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'crash_report')}>
        Crash Reports
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'performance')}>
        Performance
      </Fab>
      <Fab variant="extended" onClick={() => toggleCategoryItem('analytic', 'multilingual')}>
        Multi-lingual
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
