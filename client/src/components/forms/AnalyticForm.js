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
      <h1 id='analytics' style={{paddingTop: '60px'}}>Admin, Feedback, & Analytics</h1>
      <div align='center' className='grid-container'>

      <fieldset>
        <legend>CMS Integration</legend>
        <button className={one} onClick={() => {toggleCategoryItem('analytic', 'cms'); this.toggle(one, 'one');}}>

        </button>
      </fieldset>

      <fieldset>
        <legend>User Admin Pages</legend>
        <button className={two} onClick={() => {toggleCategoryItem('analytic', 'admin'); this.toggle(two, 'two');}}>
          <img className='estimatorIcons' src={require("../../images/admin.svg")}/>
        </button>
      </fieldset>

      <fieldset>
        <legend>Moderation/Content Approval</legend>
        <button className={three} onClick={() => {toggleCategoryItem('analytic', 'moderation'); this.toggle(three, 'three');}}>
          <img className='estimatorIcons' src={require("../../images/moderation.svg")}/>
        </button>
      </fieldset>

      <fieldset>
        <legend>Intercom</legend>
        <button className={four} onClick={() => {toggleCategoryItem('analytic', 'intercom'); this.toggle(four, 'four');}}>
          <img className='estimatorIcons' src={require("../../images/intercom.svg")}/>
        </button>
      </fieldset>

      <fieldset>
        <legend>Usage Analytics</legend>
        <button className={five} onClick={() => {toggleCategoryItem('analytic', 'usage'); this.toggle(five, 'five');}}>
          <img className='estimatorIcons' src={require("../../images/usage.svg")}/>
        </button>
      </fieldset>

      <fieldset>
        <legend>Crash Reports</legend>
        <button className={six} onClick={() => {toggleCategoryItem('analytic', 'crash_report'); this.toggle(six, 'six');}}>
          <img className='estimatorIcons' src={require("../../images/crash_report.svg")}/>
        </button>
      </fieldset>

      <fieldset>
        <legend>Performance Monitoring</legend>
        <button className={seven} onClick={() => {toggleCategoryItem('analytic', 'performance'); this.toggle(seven, 'seven');}}>
          <img className='estimatorIcons' src={require("../../images/performance.svg")}/>
        </button>
      </fieldset>

      <fieldset>
        <legend>Multilingual Support</legend>
        <button className={eight} onClick={() => { toggleCategoryItem('analytic', 'multilingual'); this.toggle(eight, 'eight');}}>
          <img className='estimatorIcons' src={require("../../images/multilingual.svg")}/>
        </button>
      </fieldset>

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
