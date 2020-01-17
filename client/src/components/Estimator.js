import React, {Component} from 'react';
import SocialForm from './forms/SocialForm';
import UserContentForm from './forms/UserContentForm';
import SecurityForm from './forms/SecurityForm';
import IntegrationForm from './forms/IntegrationForm';
import DateLocationForm from './forms/DateLocationForm';
import BillingForm from './forms/BillingForm';
import AppForm from './forms/AppForm';
import AnalyticForm from './forms/AnalyticForm';
import AccountForm from './forms/AccountForm';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { ProjectConsumer, } from "../providers/ProjectProvider";

class Estimator extends Component {

render() {

  const{value: { categories, createProject, createCategory }} = this.props

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
      <div align='right'>
        <Button
          variant="contained"
          color="primary"
          endIcon={<SaveIcon/>}
          onClick={() => createCategory()}
        >
          Save Project
        </Button>
      </div>
    </>
    )
  }
}

const ConnectedEstimator = () => {

  return(
    <ProjectConsumer>
      { value =>(
        <Estimator value={value}/>
      )}
    </ProjectConsumer>
  )
}
export default ConnectedEstimator;
