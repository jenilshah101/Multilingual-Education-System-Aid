import { BrowserRouter as Router, Routes, Route } from  'react-router-dom';

import VocabDev from './components/VocabularyDevelopment'
import SummTrans from './components/Summarization';
import GramAssess from './components/Grammar';
import AddChap from './components/AddChapter';

function Routing(){
    
    return(
        <Router>
            <Routes>
                <Route exact path='/' component={VocabDev} />
                <Route path='/summarization' component={SummTrans} />
                <Route path='/grammar' component={GramAssess} />
                <Route path='/addchapter' component={AddChap} />
            </Routes>
        </Router>
    );
}

export default Routing;