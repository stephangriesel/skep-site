import React, { Component } from 'react'
import logo from '../logo.png';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={logo} />
        </div>
        <nav className="menu">
          <ul>
            <li>SHOP</li>
            <li>TRACK ORDER</li>
            <li>ABOUT</li>
            <li>FAQS</li>
            <li>CONTACT</li>
          </ul>
          <div className="social-icons">
          <ul>
            <li><i className="fas fa-user"></i></li>
            <li><i className="fas fa-search"></i></li>
            <li><i className="fas fa-shopping-cart"></i></li>
          </ul>
        </div>
        </nav>
        

      </header>
    )
  }
}

export default Header;
