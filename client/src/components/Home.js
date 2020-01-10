import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class Home extends Component {


render() {

return(
    <>
      <Grid container>
        <Button variant='outlined' color='primary'>Create New Project</Button>
      </Grid>
    </>
    )
  }
}
