import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import Footer from './components/Footer';

class App extends Component {
  state = {
    showMenu: false
  }

  render() {
    return (
      <div className="App wrapper">
      <Header />
        <Grid />
      <Footer />
    </div>
    )
  }
}

export default App;
