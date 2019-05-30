import React from 'react';
import logo from './logo.png';
import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import Footer from './components/Footer';

function App() {
  return (

    <div className="App wrapper">
      <Header />
      {/* <div className="wrapper"> */}
        <Grid />
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;
