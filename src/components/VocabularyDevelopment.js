import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";
import lightblue from "@material-ui/core/colors/lightBlue";
import Grid from '@material-ui/core/Grid';
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  vocabdevelopment: {
    display: 'flex',  
    '& > *': {
    //   backgroundColor: blue[50],
    },
  },
  bluecolor: {
    backgroundColor: lightblue[300],
    padding:30
  },
  bluecolorcpy: {
    backgroundColor: lightblue[300],
  },
  
}));


function VocabDevComp() {
  
  const classes = useStyles();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  
  return (
    <div>
        <Header></Header><br/>
    <div className={classes.vocabdevelopment}>
      
      <Paper elevation={3} style = {{width: '100%'}}>
        <Box p={1.5} className={classes.bluecolor}>
          <Typography variant="h4" style={{ textAlign: 'left' , color:'white'}}>
            Chapter Details
          </Typography><br/>
          <Paper elevation={2}>
          <Typography style={{ textAlign: 'left' , padding:10}}>
          India, officially the Republic of India (Hindi: Bhārat Gaṇarājya),[26] is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar and Indonesia.

Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago.[27][28][29] Their long occupation, initially in varying forms of isolation as hunter-gatherers, has made the region highly diverse, second only to Africa in human genetic diversity.[30] Settled life emerged on the subcontinent in the western margins of the Indus river basin 9,000 years ago, evolving gradually into the Indus Valley Civilisation of the third millennium BCE.[31] By 1200 BCE, an archaic form of Sanskrit, an Indo-European language, had diffused into India from the northwest,[32][33] unfolding as the language of the Rigveda, and recording the dawning of Hinduism in India.[34] The Dravidian languages of India were supplanted in the northern and western regions.[35] By 400 BCE, stratification and exclusion by caste had emerged within Hinduism,[36] and Buddhism and Jainism had arisen, proclaiming social orders unlinked to heredity.[37] Early political consolidations gave rise to the loose-knit Maurya and Gupta Empires based in the Ganges Basin.[38] Their collective era was suffused with wide-ranging creativity,[39] but also marked by the declining status of women,[40] and the incorporation of untouchability into an organised system of belief.[g][41] In South India, the Middle kingdoms exported Dravidian-languages scripts and religious cultures to the kingdoms of Southeast Asia.[42]
          </Typography>
          </Paper>          
            <br/>
          <Typography variant="h4" style={{ textAlign: 'left' , color:'white'}}>
            Vocabulary Development
          </Typography><br/>
          <Paper elevation={2}>
            <Typography style={{ textAlign: 'left', padding: 10 }}>
            Word<br/>
            Meaning<br/>
            Synonyms<br/>
            Antonyms<br/>
            </Typography>
          </Paper>          

        </Box>
      <br/>
      <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'right' , paddingRight: 30}}>
            <Grid item>
              <Button variant="contained" className={classes.bluecolorcpy} onClick={handleSubmit}>
                BACK
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className={classes.bluecolorcpy} onClick={handleSubmit}>
                PROCEED
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

export default VocabDevComp;