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
import { flexbox } from '@material-ui/system';
import Mountains from '../../images/mountains.png';

class Estimator extends Component {

  render() {

    const{ value: {project} } = this.props

    return(

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%"
      }}>
        <img className="mountainsImage" src={Mountains} />
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
        <div className="estimatorFooter" align='center'>
          <p style={{fontSize: 70, color: 'white', marginBottom: 17}}>
            Estimate
          </p>
            <hr/>
          <p style={{fontSize: 50, color: 'white', marginTop: 25}}>
            ${project.total}
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
