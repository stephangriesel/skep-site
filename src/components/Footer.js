import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
    render () {
        return (
            <div className="footer">
            <div className="btm-menu">
                <ul>
                    <li>Search</li>
                    <li>About Us</li>
                    <li>FAQs</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="btm-icons">
                <p><i className="far fa-copyright"></i> 2019 SKEP</p>
                <div>
                <i class="fab fa-cc-amex icon"></i>
                <i class="fab fa-cc-diners-club icon"></i>
                <i class="fab fa-cc-mastercard icon"></i>
                <i class="fab fa-cc-visa icon"></i>
                <i class="fab fa-paypal icon"></i>
                </div>
            </div>
            </div>
        )
    }
}

export default Footer;