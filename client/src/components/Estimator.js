import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SocialForm from './project/forms/SocialForm';
import UserContentForm from './project/forms/UserContentForm';
import SecurityForm from './project/forms/SecurityForm';
import IntegrationForm from './project/forms/IntegrationForm';

export default class Estimator extends Component {


render() {

return(
    <>
      <IntegrationForm/>
      <SecurityForm/>
      <SocialForm/>
      <UserContentForm/>
    </>
    )
  }
}
