import React, {useState, useContext} from 'react'
import Modal from '@material-ui/core/Modal';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import { ProjectContext } from '../../providers/ProjectProvider';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const useStyles = makeStyles(
  theme => ({
    paper: {
      position: 'absolute',
      width: 500,
      backgroundColor: theme.palette.background.paper,
      border: '4px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function EmailModal() {
  const classes = useStyles();
  const project = useContext(ProjectContext);

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('')

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const{ value } = e.target
    setEmail(value)
  }

  return(

    <>
      <button className='bottomButtons' onClick={handleOpen}>Email Your Estimate</button>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <br/>
          <p style={{fontSize: 20}}>We'll send you an email of your app estimation</p>
          <br/>
          <h4 style={{margin: 10}}>Enter Email</h4>
          <form onSubmit={() => project.emailSubmit(email)}>
            <OutlinedInput
              fullWidth={true}
              placeholder='Email'
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
            />
            <button className='bottomButtons' type='submit'>Submit</button>
          </form>
        </div>
      </Modal>
    </>
  );
}
