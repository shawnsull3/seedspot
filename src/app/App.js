import React from 'react';
import { Switch, Route} from 'react-router-dom';
import '../styles/App.css';
import InvestorList from './widgets/InvestorList';

function App() {
  return (
    <div className='container-flex h-100'>
      <div className='d-flex justify-content-center'>
          <div className='row full-width'>
            <Switch>
              <Route exact path='/' component={InvestorList} />
            </Switch>
          </div>
        </div>
	  </div>
  );
}

export default App;
