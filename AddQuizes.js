import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import './AddQuizes.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  useEffect(() => {
    const questions = document.querySelector('#questions')
  
  }, [])


  const handleClick = (event) => {
    var data=questions.innerHTML;
questions.innerHTML=data+"Question :<br><input type='text' placeholder='Question'/><br/><br/>"+
"Option 1 : <br> <input type='text' placeholder='Option 1' />"+
"<br/>Option 2 : <br> <input type='text' placeholder='Option 2' /><br/>"+
"Option 3 :<br><input type='text' placeholder='Option 3' /><br/>"+
"Option 4 :<br><input type='text' placeholder='Option 4' />"+
"<br/><br/><hr>";


    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <br></br>
        <br></br>
      <div>
       Title :<br></br> <TextField
          id="title-of-quiz"
          placeholder="Title of Quiz"
         
        required
        />
        <br></br>
       Description :<br></br> <TextField
          id="description"
          placeholder="Description"
          multiline
          
        />
        <br></br>
        <br></br>
       
      </div>
     
<div id="questions"></div>

<br/>
<div>
<Button
          id="submit"
          onClick={handleClick}
          variant="contained" 
          color="primary"
        >+</Button>
<Button
          id="save"
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        >Save</Button>
        </div>
    </form>
  );
}