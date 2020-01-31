import React, {Component} from 'react';
import SocialForm from '../forms/SocialForm';
import UserContentForm from '../forms/UserContentForm';
import SecurityForm from '../forms/SecurityForm';
import IntegrationForm from '../forms/IntegrationForm';
import DateLocationForm from '../forms/DateLocationForm';
import BillingForm from '../forms/BillingForm';
import AppForm from '../forms/AppForm';
import AnalyticForm from '../forms/AnalyticForm';
import AccountForm from '../forms/AccountForm';
import { ProjectConsumer } from "../../providers/ProjectProvider";
import { AuthConsumer } from "../../providers/AuthProvider";
import EmailModal from './EmailModal';
import Mountains from '../../images/mountains.png';
import Bars from '../../images/bars.svg';

class Estimator extends Component {

  render() {

    function thousands_separators(num)
    {
      var num_parts = num.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return num_parts.join(".");
    }

    const{ value: {project} } = this.props

    if ( Number.isInteger(project.total) ) {
      var fixedTotal = project.total
    }
    else {
      var fixedTotal = thousands_separators(project.total.toFixed(2))
    }

    return(

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%"
      }}>
        <header className='header'>
          <h1>Get an Estimate</h1>
          <img src={Bars} alt='Bars'/>
          <div className='header-p'>
            <p>from DevPoint Studios</p>
            <p>for your application or website</p>
          </div>
        </header>
        <div className="mountainsImage"></div>
        <AppForm/>
        <AccountForm/>
        <AnalyticForm/>
        <BillingForm/>
        <DateLocationForm/>
        <IntegrationForm/>
        <SecurityForm/>
        <SocialForm/>
        <UserContentForm/>
        <br/>
        <div className="estimatorFooter" align='center' id='estimate'>
          <p style={{fontSize: 70, color: 'white', marginBottom: 17}}>
            Estimate
          </p>
            <hr/>
          <p style={{fontSize: 50, color: 'white', marginTop: 25}}>
            ${fixedTotal}
          </p>
          <br/>
          <EmailModal/>
          {/*<button
            className='bottomButtons'
            variant="contained"
            color="secondary"
            endIcon={<SaveIcon/>}
            onClick={() => createProjectAndCategories(user.id)}
          >
            Save Your Estimate
          </button>*/}
        </div>
        <div className='waterdiv' align='center'>
          <p className='watermark'>
            DevPoint Studios ®
            <br/>
            370 S 300 E Church & State
            <br/>
            Salt Lake City, UT 84111
            <br/>
            <br/>
            contact@devpointstudios.com
            <br/>
            <br/>
            Icons created by &nbsp;
            <a href='https://www.flaticon.com/authors/smashicons' target='_blank' rel="noopener noreferrer">
              Smashicons
            </a>, &nbsp;
            <a href='https://www.flaticon.com/authors/pixel-perfect' target='_blank' rel="noopener noreferrer">
              Pixel perfect
            </a>, & &nbsp;
            <a href='https://www.flaticon.com/authors/prettycons' target='_blank' rel="noopener noreferrer">
              prettycons
            </a>.
          </p>
        </div>
      </div>
    )
  }
}


const ConnectedEstimator = ({auth}) => {

  return(
    <ProjectConsumer>
      { value =>(
        <Estimator value={value} auth={auth}/>
      )}
    </ProjectConsumer>
  )
}
const ConnectedAuthEst = () => {
  return(
    <AuthConsumer>
      { auth =>(
      <ConnectedEstimator auth={auth} />
    )}
    </AuthConsumer>
  )
}

export default ConnectedAuthEst;
