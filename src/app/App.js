import React from 'react';
import { Switch, Route} from 'react-router-dom';
import '../styles/App.css';
import ReportCard from './widgets/ReportCard';
import MainPage from './widgets/MainPage';

function App() {
  return (
    <div className='container-flex h-100'>
      <div className='d-flex justify-content-center'>
          <div className='row full-width'>
            <Switch>
              <Route exact path='/' component={ReportCard} />
              <Route path='/main' component={MainPage} />
            </Switch>
          </div>
        </div>
	  </div>
  );
}

export default App;
