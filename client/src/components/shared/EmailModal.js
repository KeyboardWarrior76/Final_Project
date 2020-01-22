import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';

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

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('')

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = () => {
    setEmail(email)
  }

  return(

    <>
      <Button variant='contained' color="primary" onClick={handleOpen}>Send Estimate</Button>
      <Modal open={open} onClose={handleClose}>
        <div align='center' style={modalStyle} className={classes.paper}>
          <h3>Enter Email</h3>
          <form>
            <FormControl>
              <InputLabel htmlFor="emailInput">Email</InputLabel>
              <OutlinedInput
                id="emailInput"
                name='email'
                value={email}
                onChange={handleChange} />
            </FormControl>
            <Button color='primary' type='submit'>Submit</Button>
          </form>
        </div>
      </Modal>
    </>
  );
}
