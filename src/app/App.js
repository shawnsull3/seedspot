import React from 'react';
import '../styles/App.css';
import Landing from './Landing';
import { Grid, Container } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="sm" className="App">
      Seedspot
      <Landing />
    </Container>
  );
}

export default App;
