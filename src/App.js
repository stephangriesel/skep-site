import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class App extends Component {

  render() {
    return (
      <div className="App wrapper" id="page-container">
        <div id="content-wrap">
          <Header />
          <Main />
          <div id="footer">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
