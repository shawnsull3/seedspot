import React from 'react';
import { Switch, Route} from 'react-router-dom';
import '../styles/App.css';
import ReadyToRaiseCapital from './widgets/ReadyToRaiseCapital';
import MainPage from './widgets/MainPage';

function App() {
  return (
    <div className='container h-100'>
      <div className='d-flex justify-content-center'>
        <Switch>
          <Route exact path='/' component={ReadyToRaiseCapital} />
          <Route path='/main' component={MainPage} />
        </Switch>
      </div>
	  </div>
  );
}

export default App;
