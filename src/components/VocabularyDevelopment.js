import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { useNavigate } from 'react-router-dom';
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";
import lightblue from "@material-ui/core/colors/lightBlue";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Footer from "./Footer";
import LoadingSpinner from "../utility/LoadingSpinner";

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
  const [isChapterLoading, setIsChapterLoading] = useState(false);
  const [isVocabContentLoading, setIsKeywordLoading] = useState(false);

  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/summarization");
  };

  const fetchChp = async () => {
    setIsChapterLoading(true)
    const response = await fetch(
      "http://192.168.43.61:8000/chapters/1"
    );
    const data = await response.json()
    setIsChapterLoading(false)
    setChapterContent(data["content"])
  }

  const fetchVocab = async () => {
    setIsKeywordLoading(true)
    const response = await fetch(
      "http://192.168.43.61:8000/keyword/1"
    );
    const data = await response.json()
    const renderData = (data["keywords"]).map((item) => {      
      return <Typography style={{ textAlign: "left", padding: 10 }}>
        <span style = {{fontWeight: 'bold'}}> Word:</span> {item["word"]}
        <br />
        <span style = {{fontWeight: 'bold'}}>Definition: <br /></span>{item["definition"].toString()}
        <br />
        <span style = {{fontWeight: 'bold'}}>Synonyms: <br /></span>{item["synonyms"].toString()}
        <br />
        <span style = {{fontWeight: 'bold'}}>Antonyms: <br /></span>{item["antonyms"].toString()}
        <br />
      </Typography>
    });
    setIsKeywordLoading(false)
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
                {
                  isChapterLoading ? <LoadingSpinner /> : chapterContent
                }
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
              <Typography style={{ textAlign: "left", padding: 10 }}>
                {
                  isVocabContentLoading ? <LoadingSpinner /> : vocabContent
                }
              </Typography>
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
              <Button variant="contained" className={classes.bluecolorcpy} onClick={() => { navigate("/home"); }}>
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
