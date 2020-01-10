import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SocialForm from './forms/SocialForm';
import UserContentForm from './forms/UserContentForm';
import SecurityForm from './forms/SecurityForm';
import IntegrationForm from './forms/IntegrationForm';
import DateLocationForm from './forms/DateLocationForm';
import BillingForm from './forms/BillingForm';
import AppForm from './forms/AppForm';
import AnalyticForm from './forms/AnalyticForm';
import AccountForm from './forms/AccountForm';
import axios from 'axios';

export default class Estimator extends Component {

  state = {project: []}

  addProject = (project) => {
    axios.post('/api/projects', project)
      .then( res => {
        const { project } = this.state
        this.setState({ project: [...project, res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }


render() {

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
    </>
    )
  }
}
