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
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { ProjectConsumer } from "../../providers/ProjectProvider";
import { AuthConsumer } from "../../providers/AuthProvider";
import EmailModal from './EmailModal';
import { flexbox } from '@material-ui/system';
import Mountains from '../../images/Mountains.png';

class Estimator extends Component {

  render() {

    const{ value: {createProjectAndCategories, project}, auth: {user} } = this.props

    return(

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
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
        <div className="estimatorFooter">
          <p style={{fontSize: 20}}>Estimate:{` ${project.total}`}</p>
          <br/>
          <EmailModal/>
          <Button
            variant="contained"
            color="primary"
            endIcon={<SaveIcon/>}
            onClick={() => createProjectAndCategories(user.id)}
          >
            Save Project
          </Button>
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
