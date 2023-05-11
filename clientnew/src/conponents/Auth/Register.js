import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const [inpval, setInpval] = useState({
    firstName: "",
    lastName: "",
    studentid: "",
    email: "",
    password: ""
  });

  console.log(inpval);

  const setVal = (e) =>{
    // console.log(e.target.value);
    const {name, value} = e.target;
    setInpval (()=>{
      return{
        ...inpval, 
        [name]:value
      }
    })
  };

  const addUserdata = async(e) =>{
    e.preventDefault();
    
    const {firstName, lastName, studentid, email, password} = inpval;

    if(firstName === ""){
      alert("Please Enter Your First Name");
    }else if(lastName ===""){
      alert("Please Enter Your Last Name");
    }else if(studentid ===""){
      alert("Please Enter Your StudentId");
    }else if(email ===""){
      alert("Please Enter Your Email");
    }else if(!email.includes("@")){
      alert("Please Enter Valid Email");
    }else if(password ===""){
      alert("Please Enter Your Password");
    }else if(password.length < 6){
      alert ("Password must be 6 Character")
    }else{
      // console.log("User Registration Sucessful!");

      const data = await fetch("/register",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName, lastName, studentid, email, password
        })
      });

      const res = await data.json();
      // console.log(res);
      console.log(res.status);

      if(res.status === 201){
        alert("User Registration Done");
        setInpval({...inpval, firstName:"", lastName:"", studentid:"", email:"", password:""})
      }
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  onChange={setVal}
                  value={inpval.firstName}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={setVal}
                  value={inpval.lastName}
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="regno"
                  label="Student ID"
                  name="studentid"
                  onChange={setVal}
                  value={inpval.studentid}
                  autoComplete="studentid"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={setVal}
                  value={inpval.email}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  onChange={setVal}
                  value={inpval.password}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              onClick={addUserdata}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> */}
                <p>
                  Already have an account? <NavLink to={"/login"}>Sign in</NavLink>
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}