import React from 'react';
import { AuthConsumer } from "../../providers/AuthProvider"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Container from '@material-ui/core/Container';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


const Profile = ({ auth }) =>
  (
    <Container maxWidth="sm" className={useStyles.root}>
    <div >
      <Card>
        <CardContent>
        <List>
        {  auth.authenticated && (
            <ListItem>
              <ListItemIcon>
                <EmailIcon/>
              </ListItemIcon>
              <ListItemText primary={` ${auth.user.email}`}/>           
            </ListItem>
          )}
           {auth.authenticated && (
            <ListItem>
              <ListItemIcon>
                <EmojiPeopleIcon/>
              </ListItemIcon>
              <ListItemText primary={` ${auth.user.first_name} ${auth.user.last_name}`} />
            </ListItem>
           )}
          
          
        
          </List>
         </CardContent>
        </Card>
      
    </div>
  </Container>
  )

const ConnectedProfile = () =>
  (
    <AuthConsumer>
      {value => <Profile auth={value} />}
    </AuthConsumer>
  )

export default ConnectedProfile;