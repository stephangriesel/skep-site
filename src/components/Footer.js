import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="btm-menu">
                    <ul>
                        <li>
                            <a href="">Work</a>
                        </li>
                        <li>
                            <a href="">Office</a>
                        </li>
                        <li>
                            <a href="">Shop</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="btm-icons">
                    <p><i className="far fa-copyright"></i> 2019 SKEP</p>
                    <div>
                        <i className="fab fa-instagram icon"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;