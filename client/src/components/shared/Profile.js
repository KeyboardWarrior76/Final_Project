import React from 'react';
import { AuthConsumer } from "../../providers/AuthProvider"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


const Profile = ({ auth }) =>
  (
    <div>
      <List>
        {auth.authenticated && (
          <ListItem>
            <ListItemText primary={` ${auth.user.email}`}/>           
          </ListItem>
        )}
         {auth.authenticated && (
          <ListItem>
            <ListItemText primary={` ${auth.user.first_name}`}/>
          </ListItem>
         )}
         {auth.authenticated && (
          <ListItem>
            <ListItemText primary={` ${auth.user.last_name}`}/>
          </ListItem>
         )}
          
        
      </List>
    </div>
  )

const ConnectedProfile = () =>
  (
    <AuthConsumer>
      {value => <Profile auth={value} />}
    </AuthConsumer>
  )

export default ConnectedProfile;