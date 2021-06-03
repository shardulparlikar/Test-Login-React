import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {useState} from 'react'

import {Redirect, useHistory} from "react-router-dom"



const App = () => {

  const getformData=({
    username:"",
    password:""
  });

  
  const[formData,updateFormData]=useState(getformData)
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');





  
 

  const getData=(e)=>{
    updateFormData({
      ...formData,
      [e.target.name]:e.target.value.trim()
    })
    
    const email = formData.username
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Your email looks good!');
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email!');
    }
  }
  const emailRegex = /\S+@\S+\.\S+/;




    const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
 const history = useHistory()
  function sendData(e) {
    
    e.preventDefault()
    console.log(formData)
 
    axios
      .post("https://dev-api.ownerandtenant.com/v1.0/auth/user/signin", {
        email:formData.username,
        password:formData.password ,
      })
      .then(
        (response) => {
          if(response.data.status==400){
            alert('Wrong Credentials')
          }
          else{
            history.push('/profile')
          }
         

        },
       
      );
  }
 

  return (
    <>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} >
          
         <input type="email" name="username" className="email-input" id=""placeholder="Email ID" onChange={getData} required />
         <div className={`message ${isValid ? 'success' : 'error'}`}>
        {message}
      </div>
          <input type="password" className="email-input" name="password" id="" placeholder="Password" onChange={getData}/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={sendData}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>

    
    </>
    
  );
};

export default App;
