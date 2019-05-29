import React from 'react';
import logo from './logo.png';
import './App.css';
import Header from './components/Header';

import Grid from './components/Grid';

function App() {
  return (

    <div className="App">
      <Header />
      <div className="wrapper">
        <Grid />
      </div>
    </div>
  );
}

export default App;
