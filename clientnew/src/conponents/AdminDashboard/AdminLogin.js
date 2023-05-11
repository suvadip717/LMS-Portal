import * as React from 'react';
import {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../ContextProvider/Context';


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

export default function SignIn() {

  const [data, setData] = useState(false);

  const {logindata, setLoginData} = useContext(LoginContext);
  // console.log(logindata);

  const usenav = useNavigate();


  const DashboardValid = async() =>{
    let token = localStorage.getItem("usersdatatoken");
    // console.log(token);
    const res = await fetch("/validadmin",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization":token
      }
    });

    const data = await res.json();
    // console.log(data);

    if(data.status === 401 || !data){
      console.log("user not Valid");

    }else{
      // console.log("User Verified")
      setLoginData(data)
      usenav("/dashboard")
    }

}

useEffect(()=>{
  setTimeout(()=>{
    DashboardValid();
    setData(true)
  }, 2000)
  // DashboardValid()
},[])



  const [inpval, setInpval] = useState({
    userid: "",
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

  const loginuser = async(e)=>{
    e.preventDefault();

    const {userid, password} = inpval;

    if(userid ===""){
      alert("Please Enter Your UserId");
    }else if(password ===""){
      alert("Please Enter Your Password");
    }else{
      // console.log("User Login Sucessful!");

      const data = await fetch("/admin",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userid, password
        })
      });

      const res = await data.json();
      console.log(res);
      // console.log(res.status);

      if(res.status === 201){
        // alert("User Registration Done");
        localStorage.setItem("usersdatatoken", res.result.token);
        usenav("/adminpannel")
        setInpval({...inpval, userid:"", password:""})
      }
    }
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('userid'),
      password: data.get('password'),
    });
  };

  return (
<>
{
  
  data ?

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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userid"
              label="User ID"
              name="userid"
              value={inpval.userid}
              onChange={setVal}
              autoComplete="userid"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={inpval.password}
              onChange={setVal}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              onClick={loginuser}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <p>
                  Don't have an account? <NavLink to={"/register"}>Sign Up</NavLink>
                </p>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    :<Box sx={{ display: 'flex', justifyContent:"center", alignItems:"center", height:"100vh" }}>
      Loading...&nbsp;
    <CircularProgress />
  </Box>
}
    </>
  );
}