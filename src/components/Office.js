import React, { Component } from 'react';
import '../css/Office.css';
import geraldine from '../img/office/geraldine.jpg';
import carla from '../img/office/carla.jpg';
import charlotte from '../img/office/charlotte.jpg';
import christi from '../img/office/christi.jpg';
import gunther from '../img/office/gunther.jpg';
import kulsum from '../img/office/kulsum.jpg';
import lumari from '../img/office/lumari.jpg';

class Office extends Component {
    render() {
        return (
            <div className="center-wrapper">
                <header className="office-office">
                    <h1>Office</h1>
                </header>
                <section className="flex-twocolumns">
                    <div className="section-column">
                        <p>‘SKEP’ – to produce through artistic or imaginative effort.</p>
                        <p>SKEP offers solutions tailored to specific needs and style, striving to produce creative, honest and environmentally responsible designs that add value to investments.</p>
                    </div>
                    <div className="section-column">
                        <p>SKEP is a Stellenbosch based firm specializing in architecture and interior design services.SKEP is a Stellenbosch based firm specializing in architecture and interior design services.</p>
                        <p>Founded in 2012 by Carla Gerber and Geraldine Heyns.</p>
                    </div>
                </section>
                <section>
                    <div className="">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.1611883890564!2d18.8581432157708!3d-33.93698213003329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb25e904f9435%3A0x3f25de2c883a3026!2s4%20Plein%20St%2C%20Stellenbosch%20Central%2C%20Stellenbosch%2C%207600%2C%20South%20Africa!5e0!3m2!1sen!2snl!4v1568519891475!5m2!1sen!2snl" width="100%" height="700" frameborder="0" allowfullscreen="" title="map"></iframe>
                    </div>
                </section>
                <section className="flex-twocolumns">
                    <div className="section-column">
                        <h3>Street Address</h3>
                        <p>2nd Floor</p>
                        <p>Plein Street 4</p>
                        <p>Anglo African Building</p>
                        <p>Stellenbosch, 7600</p>
                    </div>
                    <div className="section-column">
                        <h3>P.O. Box Address</h3>
                        <p>P.O. Box 396</p>
                        <p>Stellenbosch, 7599</p>
                    </div>
                </section>
                <header className="office-people">
                    <h1>People</h1>
                </header>
                <React.Fragment>
                    <main className="office-card">
                        <div className="office-card">
                            <img
                                src={geraldine}
                                alt="Geraldine"
                            />
                            <div className="info">
                                <strong>Geraldine Heyns</strong>
                                <h5><em>Architect and interior designer</em></h5>
                                <p>Graduated with a M Arch and BSc Arch from the University of Pretoria and completed her MBA from UNISA in 2011</p>
                                <p>Loves: Her kids and the colour yellow</p>
                                <p>Superpowers: Smiling for days <span style={{ fontSize: '28px' }}>☺</span></p>
                            </div>
                        </div>
                        <div className="office-card">
                            <img
                                src={carla}
                                alt="Carla"
                            />
                            <div className="info">
                                <strong>Carla Gerber</strong>
                                <h5><em>Interior designer</em></h5>
                                <p>Graduated with a Higher Diploma from The Design School of South Africa – affiliated with London School of arts</p>
                                <p>Loves: family & good wine</p>
                                <p>Superpowers: Always sees the good in people</p>
                            </div>
                        </div>
                        <div className="office-card">
                            <img
                                src={charlotte}
                                alt="Charlotte"
                            />
                            <div className="info">
                                <strong>Carla Gerber</strong>
                                <h5><em>Interior designer</em></h5>
                                <p>Graduated with an interior design diploma from Design Time School of Interior Design in 2011</p>
                                <p>Loves: All animals, Cinnabuns & my husband</p>
                                <p>Superpowers: I can spring clean a house in 15 minute</p>
                            </div>
                        </div>
                        <div className="office-card">
                            <img
                                src={christi}
                                alt="Christi"
                            />
                            <div className="info">
                                <strong>Christi Du Plessis</strong>
                                <h5><em>Interior designer</em></h5>
                                <p>National Certificate in Interior design TUT (Tshwane University of Technology) – 2005</p>
                                <p>Loves: Making a difference</p>
                                <p>Superpowers: Endurance</p>
                            </div>
                        </div>
                        <div className="office-card">
                            <img
                                src={gunther}
                                alt="Gunther"
                            />
                            <div className="info">
                                <strong>Christi Du Plessis</strong>
                                <h5><em>Interior designer</em></h5>
                                <p>National Certificate in Interior design TUT (Tshwane University of Technology) – 2005</p>
                                <p>Loves: Making a difference</p>
                                <p>Superpowers: Endurance</p>
                            </div>
                        </div>
                        <div className="office-card">
                            <img
                                src={kulsum}
                                alt="Kulsum"
                            />
                            <div className="info">
                                <strong>Kulsum Dickson</strong>
                                <h5><em>Office manager</em></h5>
                                <p>Loves: Helping others and spending time with family</p>
                                <p>Superpowers: Brews the best cappuccinos ever</p>
                            </div>
                        </div>
                        <div className="office-card">
                            <img
                                src={lumari}
                                alt="Lumari"
                            />
                            <div className="info">
                                <strong>Lumari Pretorius</strong>
                                <h5><em>Architect and interior designer</em></h5>
                                <p>National Certificate in Interior design TUT (Tshwane University of Technology) – 2005</p>
                                <p>Loves: Learning new things, designing and going on adventures</p>
                                <p>Superpowers: Dynamite comes in small package</p>
                            </div>
                        </div>
                    </main>
                </React.Fragment>
                <header className="office-clients">
                    <h1>Clients</h1>
                </header>
                <React.Fragment>
                    <main className="client-card">
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/woman"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/man"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/lady"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/woman"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/man"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/lady"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/woman"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/man"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/lady"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/woman"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/man"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/lady"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/woman"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/man"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/lady"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/woman"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/man"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                        <div className="client-card">
                            <a href="/projectone">
                                <img
                                    src="https://loremflickr.com/320/240/lady"
                                    alt="dogimage"
                                />
                            </a>
                        </div>
                    </main>
                </React.Fragment>
            </div>
        )
    }
}

export default Office;

