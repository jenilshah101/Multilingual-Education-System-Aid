import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from "./Header";
import VocabDev from "./VocabularyDevelopment";
import SummTrans from "./Summarization";
import GramAssess from "./Grammar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  
}));

function App(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/ "></Link>
      {props.children}

    </div>
  );
}

export default App;