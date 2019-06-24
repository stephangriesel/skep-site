import React, { Component } from 'react';
import '../css/Shop.css';

class Shop extends Component {
    render() {
        return (
            <React.Fragment>
            <main className="shop-card">
                <div className="shop-card">
                    <a href="/projectone">
                        <img
                            src="https://loremflickr.com/320/240/woman"
                            alt="dogimage"
                        />
                    </a>
                    <div className="info">
                        <strong>Title</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p>
                    </div>
                </div>
                <div className="shop-card">
                    <a href="/projectone">
                        <img
                            src="https://loremflickr.com/320/240/man"
                            alt="dogimage"
                        />
                    </a>
                    <div className="info">
                        <strong>Title</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p>
                    </div>
                </div>
                <div className="shop-card">
                    <a href="/projectone">
                        <img
                            src="https://loremflickr.com/320/240/lady"
                            alt="dogimage"
                        />
                    </a>
                    <div className="info">
                        <strong>Title</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p>
                    </div>
                </div>
            </main>
        </React.Fragment>

        )
    }
}

export default Shop;
