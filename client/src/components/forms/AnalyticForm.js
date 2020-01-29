import React, {Component} from 'react';
import { ProjectConsumer, } from "../../providers/ProjectProvider";

class AnalyticForm extends Component {

  state = { button: {
    one: 'estimatorButton', two: 'estimatorButton', three: 'estimatorButton',
    four: 'estimatorButton', five: 'estimatorButton', six: 'estimatorButton',
    seven: 'estimatorButton', eight: 'estimatorButton'
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
  const { button: {one, two, three, four, five, six, seven, eight} } = this.state

return(
    <>
      <h1>Admin, Feedback, & Analytics</h1>
      <div id='analytics' align='center' className='grid-container'>
        <button className={one} onClick={() => {toggleCategoryItem('analytic', 'cms'); this.toggle(one, 'one');}}>
          CMS Integration
        </button>
        <button className={two} onClick={() => {toggleCategoryItem('analytic', 'admin'); this.toggle(two, 'two');}}>
          User Admin Pages
        </button>
        <button className={three} onClick={() => {toggleCategoryItem('analytic', 'moderation'); this.toggle(three, 'three');}}>
          Moderation/Content Approval
        </button>
        <button className={four} onClick={() => {toggleCategoryItem('analytic', 'intercom'); this.toggle(four, 'four');}}>
          Intercom
        </button>
        <button className={five} onClick={() => {toggleCategoryItem('analytic', 'usage'); this.toggle(five, 'five');}}>
          Usage Analytics
        </button>
        <button className={six} onClick={() => {toggleCategoryItem('analytic', 'crash_report'); this.toggle(six, 'six');}}>
          Crash Reports
        </button>
        <button className={seven} onClick={() => {toggleCategoryItem('analytic', 'performance'); this.toggle(seven, 'seven');}}>
          Performance Monitoring
        </button>
        <button className={eight} onClick={() => { toggleCategoryItem('analytic', 'multilingual'); this.toggle(eight, 'eight');}}>
          Multilingual Support
        </button>
      </div>
    </>
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
