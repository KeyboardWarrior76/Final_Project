import React, {useState, useContext} from 'react'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
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


const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

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
    const{ name, value } = e.target
    setEmail(value)
  }

  return(

    <>
      <Button variant='contained' color="primary" onClick={handleOpen}>Send Estimate</Button>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <div align='left'>
            <p>We'll send you and email of your app estimation</p>
            <h5>Enter Email</h5>
          </div>
          <form onSubmit={() => project.emailSubmit(email)}>
            <FormControl>
              <InputLabel htmlFor="emailInput">Email</InputLabel>
              <OutlinedInput
                id="emailInput"
                type="email"
                name='email'
                value={email}
                onChange={handleChange} />
            </FormControl>
            <Button variant="contained" color="primary" type='submit'>Submit</Button>
          </form>
        </div>
      </Modal>
    </>
  );
}
