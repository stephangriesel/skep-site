import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
    render () {
        return (
            <div className="footer">
            <div className="btm-menu">
                <ul>
                    <li>Work</li>
                    <li>Office</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="btm-icons">
                <p><i className="far fa-copyright"></i> 2019 SKEP</p>
                <div>
                <i className="fab fa-cc-amex icon"></i>
                <i className="fab fa-cc-diners-club icon"></i>
                <i className="fab fa-cc-mastercard icon"></i>
                <i className="fab fa-cc-visa icon"></i>
                <i className="fab fa-paypal icon"></i>
                </div>
            </div>
            </div>
        )
    }
}

export default Footer;