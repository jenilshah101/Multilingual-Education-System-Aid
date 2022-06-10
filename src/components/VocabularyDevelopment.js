import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";
import lightblue from "@material-ui/core/colors/lightBlue";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  vocabdevelopment: {
    display: "flex",
    "& > *": {
      //   backgroundColor: blue[50],
    },
  },
  bluecolor: {
    backgroundColor: lightblue[300],
    padding: 30,
  },
  bluecolorcpy: {
    backgroundColor: lightblue[300],
  },
}));

function VocabDevComp() {
  const [chapterContent, setChapterContent] = useState("");
  const [vocabContent, setVocabContent] = useState([]);

  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const fetchChp = async () => {
    const response = await fetch(
      "http://192.168.43.61:8000/chapters/1"
    );
    const data = await response.json()    
    setChapterContent(data["content"])
  }

  const fetchVocab = async () => {
    const response = await fetch(
      "http://192.168.43.61:8000/keyword/1"
    );
    const data = await response.json()    
    const renderData = (data["keywords"]).map((item) =>{
      console.log(item)
      return <Typography style={{ textAlign: "left", padding: 10 }}>
        Word: {item["word"]}
        <br />
        Meaning: {item["definition"].toString()}
        <br />
        Synonyms: {item["synonyms"].toString()}
        <br />
        Antonyms: {item["antonyms"].toString()}
        <br />
      </Typography>
    });
    setVocabContent(renderData)
  }

  useEffect(() => {
    fetchChp()
    fetchVocab()
  }, []);

  return (
    <div>
      <Header></Header>
      <br />
      <div className={classes.vocabdevelopment}>
        <Paper elevation={3} style={{ width: "100%" }}>
          <Box p={1.5} className={classes.bluecolor}>
            <Typography
              variant="h4"
              style={{ textAlign: "left", color: "white" }}
            >
              Chapter Details
            </Typography>
            <br />
            <Paper elevation={2}>
              <Typography style={{ textAlign: "left", padding: 10 }}>
                {chapterContent}
              </Typography>
            </Paper>
            <br />
            <Typography
              variant="h4"
              style={{ textAlign: "left", color: "white" }}
            >
              Vocabulary Development
            </Typography>
            <br />
            <Paper elevation={2}>
              {vocabContent}
            </Paper>
          </Box>
          <br />
          <Grid
            container
            spacing={3}
            style={{
              display: "flex",
              justifyContent: "right",
              paddingRight: 30,
            }}
          >
            <Grid item>
              <Button
                variant="contained"
                className={classes.bluecolorcpy}
                onClick={handleSubmit}
              >
                BACK
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.bluecolorcpy}
                onClick={handleSubmit}
              >
                PROCEED
              </Button>
            </Grid>
          </Grid>
          <br />
        </Paper>
      </div>
      <div>
        <br />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default VocabDevComp;
