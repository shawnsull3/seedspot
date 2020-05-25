import React from 'react';
import '../styles/App.css';
// import Landing from './Landing';
import ReadyToRaiseCapital from './widgets/ReadyToRaiseCapital';

function App() {
  return (
    <div className="container h-100">
		<div className="d-flex justify-content-center h-100">
			<div className="card">
        <ReadyToRaiseCapital />
			</div>
		</div>
	</div>
  );
}

export default App;
