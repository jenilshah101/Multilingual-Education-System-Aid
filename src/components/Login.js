import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/styles";
import bgsignup from '../images/BGSIGNup.png';
import ollp from '../images/online learning login.png';
import lightblue from "@material-ui/core/colors/lightBlue";
import eclipse from '../images/Ellipse 1.png';


const useStyles = makeStyles((theme) => ({
    bgimg: {
        paddingTop:100,
        paddingLeft: 200,
    },
    formcls: {
        paddingLeft: 100,
    },
    bluecolorcpy: {
        backgroundColor: lightblue[300],
        fontSize: 20,
        border:10,
      },
      elipse:{
      display: 'flex',
      justifyContent: 'right',
      alignItems:'right',
  },
  }));


function Signup() {
    const classes = useStyles();

    const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
      <div>
    <Grid container spacing={2} sx={{height: '100vh'}}>
    <Grid item xs={4} sx={{
        backgroundImage: 'url('+bgsignup+')' ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
    }} ><img src={ollp} alt='Img' className={classes.bgimg}/></Grid>
    <Grid item xs={8} >
        <div className={classes.elipse}><img src={eclipse} alt='Ellipse'/> </div>
    <Box className={classes.formcls}
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography component="h1" variant="h4">
              Welcome!
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <center>
              <TextField style={{width:'80%'}}
                margin="normal"
                required
                id="uname"
                label="User Name"
                name="username"
              />
              <TextField style={{width:'80%'}}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              /><br /><br />
              <Button style={{backgroundColor: lightblue[300],fontSize: 20,border:10,}} variant="contained" onClick={handleSubmit}>
                Login
            </Button>  <br/><br/>          
            <Grid item>Don't have an account? 
                  <Link href="" variant="body1">
                    {" Register"}
                  </Link>
                </Grid>
              </center> 
            </Box>
          </Box>
    </Grid>
  </Grid>
  </div>
  );
}

export default Signup;