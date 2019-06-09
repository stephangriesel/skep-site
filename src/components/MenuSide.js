import React from 'react';
import '../css/MenuSide.css';

const menuSide = props => {
let menuClasses = 'menu-side';
if(props.show) {
    menuClasses = 'menu-side open';
}
    return (
    <nav className={menuClasses}>
        <ul>
            <li><a href="/">WORK</a></li>
            <li><a href="#office">OFFICE</a></li>
            <li><a href="#shop">SHOP</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
    </nav>)
};

export default menuSide;