import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="btm-menu">
                    <ul>
                        <li><a href="/">WORK</a></li>
                        <li><a href="office">OFFICE</a></li>
                        {/* <li><a href="shop">SHOP</a></li> */}
                        {/* <li><a href="contact">CONTACT</a></li> */}
                    </ul>
                </div>
                <div className="btm-icons">
                    <p><i className="far fa-copyright"></i> 2019 SKEP</p>
                    <div className="btm-menu">
                        <a href="https://www.instagram.com/skepstudio">
                            <i className="fab fa-instagram icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;