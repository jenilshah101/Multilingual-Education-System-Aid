import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";
import lightblue from "@material-ui/core/colors/lightBlue";
import TextField from '@mui/material/TextField';
import Grid from '@material-ui/core/Grid';
import Footer from "./Footer";
import head from '../images/Home.png';
import Carousel from 'better-react-carousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  homepage: {
    display: 'flex',  
    '& > *': {
    },
  },
  bluecolor: {
    backgroundColor: 'white',
    padding:30
  },
  bluecolorcpy: {
    backgroundColor: lightblue[300],
    fontSize: 25,
  },
  bluecolorcpy1: {
    backgroundColor: lightblue[300],
    fontSize: 15,   
  },
  appb: {
    backgroundColor: lightblue[300],
  },
  study: {
    width: '100%',
  },  
}));


function Homepage() {
  const classes = useStyles();
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/vocabdev");
  };
  
  return (
    <div>
        <AppBar position="static" className={classes.appb}>
        <Toolbar>
        <h2 style={{paddingLeft: 300}}><center>SEARCH <br/>ANYTHING &nbsp;</center></h2> <TextField style={{width:'40%'}}
                margin="normal"
                id="uname"
                name="Search"
                placeholder="Ex. Chapter 2"/>
        </Toolbar>
        </AppBar>
        <div><center><img src={head} alt='tp' className={classes.study}></img></center></div>
        <br/>

        <div className={classes.homepage}>
        <Paper elevation={3} style = {{width: '100%'}}>
        <Box p={1.5} className={classes.bluecolor}>
          <Typography variant="h4" style={{ textAlign: 'left' , color:'black',paddingLeft: 35, fontFamily:'fantasy'}}>
            CHAPTERS
          </Typography><br/>
          
          <Carousel cols={6} rows={1} gap={1} loop>
            
            <Carousel.Item>
            <Card sx={{ maxWidth: 200 }} variant="outlined">
            <CardActionArea>
            <CardContent style={{flex: '1 0 auto'}}>   
            <div style={{position: 'relative'}} >
            <CardMedia style={{display:'flex', objectFit:'contain'}}
            component="img"
            image="/Group 53.png"
            alt="chpbg"
            />
            <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: 20, 
                          left: '18%',
                          fontSize: 20, 
                          
                        }} >CHAPTER 1</div></div>      
            <CardActions style={{paddingLeft:70}}>
            <Button variant="contained" className={classes.bluecolorcpy1} onClick={handleSubmit}>
                LEARN
              </Button>
            </CardActions>
            </CardContent>        
            </CardActionArea>
            </Card>
            </Carousel.Item>

            <Carousel.Item>
            <Card sx={{ maxWidth: 200 }} variant="outlined">
            <CardActionArea>
            <CardContent style={{flex: '1 0 auto'}}>   
            <div style={{position: 'relative'}} >
            <CardMedia style={{display:'flex', objectFit:'contain'}}
            component="img"
            image="/Group 53.png"
            alt="chpbg"
            />
            <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: 20, 
                          left: '18%',
                          fontSize: 20, 
                          
                        }} >CHAPTER 2</div></div>      
            <CardActions style={{paddingLeft:70}}>
            <Button variant="contained" className={classes.bluecolorcpy1} onClick={handleSubmit}>
                LEARN
              </Button>
            </CardActions>
            </CardContent>        
            </CardActionArea>
            </Card>
            </Carousel.Item>

            <Carousel.Item>
            <Card sx={{ maxWidth: 200 }} variant="outlined">
            <CardActionArea>
            <CardContent style={{flex: '1 0 auto'}}>   
            <div style={{position: 'relative'}} >
            <CardMedia style={{display:'flex', objectFit:'contain'}}
            component="img"
            image="/Group 53.png"
            alt="chpbg"
            />
            <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: 20, 
                          left: '18%',
                          fontSize: 20, 
                          
                        }} >CHAPTER 3</div></div>      
            <CardActions style={{paddingLeft:70}}>
            <Button variant="contained" className={classes.bluecolorcpy1} onClick={handleSubmit}>
                LEARN
              </Button>
            </CardActions>
            </CardContent>        
            </CardActionArea>
            </Card>
            </Carousel.Item>

            <Carousel.Item>    
            <Card sx={{ maxWidth: 200 }} variant="outlined">
            <CardActionArea>
            <CardContent style={{flex: '1 0 auto'}}>   
            <div style={{position: 'relative'}} >
            <CardMedia style={{display:'flex', objectFit:'contain'}}
            component="img"
            image="/Group 53.png"
            alt="chpbg"
            />
            <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: 20, 
                          left: '18%',
                          fontSize: 20, 
                          
                        }} >CHAPTER 4</div></div>      
            <CardActions style={{paddingLeft:70}}>
            <Button variant="contained" className={classes.bluecolorcpy1} onClick={handleSubmit}>
                LEARN
              </Button>
            </CardActions>
            </CardContent>        
            </CardActionArea>
            </Card>
            </Carousel.Item>

            <Carousel.Item>    
            <Card sx={{ maxWidth: 200 }} variant="outlined">
            <CardActionArea>
            <CardContent style={{flex: '1 0 auto'}}>   
            <div style={{position: 'relative'}} >
            <CardMedia style={{display:'flex', objectFit:'contain'}}
            component="img"
            image="/Group 53.png"
            alt="chpbg"
            />
            <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: 20, 
                          left: '18%',
                          fontSize: 20, 
                          
                        }} >CHAPTER 5</div></div>      
            <CardActions style={{paddingLeft:70}}>
            <Button variant="contained" className={classes.bluecolorcpy1} onClick={handleSubmit}>
                LEARN
              </Button>
            </CardActions>
            </CardContent>        
            </CardActionArea>
            </Card>
            </Carousel.Item>

            <Carousel.Item>    
            <Card sx={{ maxWidth: 200 }} variant="outlined">
            <CardActionArea>
            <CardContent style={{flex: '1 0 auto'}}>   
            <div style={{position: 'relative'}} >
            <CardMedia style={{display:'flex', objectFit:'contain'}}
            component="img"
            image="/Group 53.png"
            alt="chpbg"
            />
            <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: 20, 
                          left: '18%',
                          fontSize: 20, 
                          
                        }} >CHAPTER 6</div></div>      
            <CardActions style={{paddingLeft:70}}>
            <Button variant="contained" className={classes.bluecolorcpy1} onClick={handleSubmit}>
                LEARN
              </Button>
            </CardActions>
            </CardContent>        
            </CardActionArea>
            </Card>
            </Carousel.Item>

            <Carousel.Item>    
            <Card sx={{ maxWidth: 200 }} variant="outlined">
            <CardActionArea>
            <CardContent style={{flex: '1 0 auto'}}>   
            <div style={{position: 'relative'}} >
            <CardMedia style={{display:'flex', objectFit:'contain'}}
            component="img"
            image="/Group 53.png"
            alt="chpbg"
            />
            <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: 20, 
                          left: '18%',
                          fontSize: 20, 
                          
                        }} >CHAPTER 7</div></div>      
            <CardActions style={{paddingLeft:70}}>
            <Button variant="contained" className={classes.bluecolorcpy1} onClick={handleSubmit}>
                LEARN
              </Button>
            </CardActions>
            </CardContent>        
            </CardActionArea>
            </Card>
            </Carousel.Item>

            <Carousel.Item>    
            <Card sx={{ maxWidth: 200 }} variant="outlined">
            <CardActionArea>
            <CardContent style={{flex: '1 0 auto'}}>   
            <div style={{position: 'relative'}} >
            <CardMedia style={{display:'flex', objectFit:'contain'}}
            component="img"
            image="/Group 53.png"
            alt="chpbg"
            />
            <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: 20, 
                          left: '18%',
                          fontSize: 20, 
                          
                        }} >CHAPTER 8</div></div>      
            <CardActions style={{paddingLeft:70}}>
            <Button variant="contained" className={classes.bluecolorcpy1} onClick={handleSubmit}>
                LEARN
              </Button>
            </CardActions>
            </CardContent>        
            </CardActionArea>
            </Card>
            </Carousel.Item>

            <Carousel.Item>    
            <Card sx={{ maxWidth: 200 }} variant="outlined">
            <CardActionArea>
            <CardContent style={{flex: '1 0 auto'}}>   
            <div style={{position: 'relative'}} >
            <CardMedia style={{display:'flex', objectFit:'contain'}}
            component="img"
            image="/Group 53.png"
            alt="chpbg"
            />
            <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: 20, 
                          left: '18%',
                          fontSize: 20, 
                          
                        }} >CHAPTER 9</div></div>      
            <CardActions style={{paddingLeft:70}}>
            <Button variant="contained" className={classes.bluecolorcpy1} onClick={handleSubmit}>
                LEARN
              </Button>
            </CardActions>
            </CardContent>        
            </CardActionArea>
            </Card>
            </Carousel.Item>

            <Carousel.Item>    
            <Card sx={{ maxWidth: 200 }} variant="outlined">
            <CardActionArea>
            <CardContent style={{flex: '1 0 auto'}}>   
            <div style={{position: 'relative'}} >
            <CardMedia style={{display:'flex', objectFit:'contain'}}
            component="img"
            image="/Group 53.png"
            alt="chpbg"
            />
            <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: 20, 
                          left: '18%',
                          fontSize: 20, 
                          
                        }} >CHAPTER 10</div></div>      
            <CardActions style={{paddingLeft:70}}>
            <Button variant="contained" className={classes.bluecolorcpy1} onClick={handleSubmit}>
                LEARN
              </Button>
            </CardActions>
            </CardContent>        
            </CardActionArea>
            </Card>
            </Carousel.Item>
            
          </Carousel>
            <br/>
        </Box>
      
      <br/>
      <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'right' , paddingRight: 30}}>
            <Grid item>
              <Button variant="contained" className={classes.bluecolorcpy} onClick={() => {navigate("/addchapter");}}>
                ADD CHAPTER
              </Button>
            </Grid>
      </Grid>

          <br/>
      </Paper>
      </div>
    
    <div><br />
    <Footer></Footer>  
    </div>
    </div>
  );
}

export default Homepage;