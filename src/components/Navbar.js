import React from 'react';
import logo from '../logo.png';
import '../css/Navbar.css';
import ToggleButton from '../components/ToggleButton';

const Navbar = props => (
    <header className="navbar">
        <nav className="navbar-navigation">
            <div>
                <ToggleButton />
            </div>
            <div className="navbar-logo">
                <img className="logo-img" src={logo} alt="logo" />
            </div>
            <div className="navbar-navigation-items">
                <ul>
                    <li><a href="/">WORK</a></li>
                    <li><a href="#office">OFFICE</a></li>
                    <li><a href="#shop">SHOP</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Navbar;