import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import VocabDevComp from './components/VocabularyDevelopment'
import SummTrans from './components/Summarization';
import GramAssess from './components/Grammar';
import AddChap from './components/AddChapter';
import Test from './components/Test';

function Routing(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' component={Test} />
                <Route path='/summarization' component={SummTrans} />
                <Route path='/grammar' component={GramAssess} />
                <Route path='/addchapter' component={AddChap} />
            </Routes>
        </Router>
    );
}

export default Routing;