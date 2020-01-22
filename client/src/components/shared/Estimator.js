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

class Estimator extends Component {

render() {

  const{ value: {createProjectAndCategories, estimate}, auth: {user} } = this.props

return(
    <>
      <AppForm/>
      <AccountForm/>
      <AnalyticForm/>
      <BillingForm/>
      <DateLocationForm/>
      <IntegrationForm/>
      <SecurityForm/>
      <SocialForm/>
      <UserContentForm/>
      <div>
        Total:{` ${estimate}`}
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
    </>
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
