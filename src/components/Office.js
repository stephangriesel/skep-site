import React, { Component } from 'react';
import '../css/Office.css';
import logoSpin from '../logo.png';
import { Preloader, Placeholder } from 'react-preloading-screen';
import logo from '../logo.png';


import geraldine from '../img/office/geraldine.jpg';
import carla from '../img/office/carla.jpg';
import charlotte from '../img/office/charlotte.jpg';
import christi from '../img/office/christi.jpg';
// import gunther from '../img/office/gunther.jpg';
import kulsum from '../img/office/kulsum.jpg';
import lumari from '../img/office/lumari.jpg';
import aaf from '../img/office/clientlogos/aaf.jpg';
import amc from '../img/office/clientlogos/amc.png';
import arcinvestments from '../img/office/clientlogos/arcinvestments.png';
import banhoek from '../img/office/clientlogos/banhoek.png';
import bergkelder from '../img/office/clientlogos/bergkelder.jpg';
import chilloes from '../img/office/clientlogos/chilloes.jpg';
import dbc from '../img/office/clientlogos/dbc.gif';
import detoren from '../img/office/clientlogos/detoren.png';
import distell from '../img/office/clientlogos/distell.png';
import dorpstraathotel from '../img/office/clientlogos/dorpstraathotel.png';
import durbanvillehills from '../img/office/clientlogos/durbanvillehills.png';
import ellermanhouse from '../img/office/clientlogos/ellermanhouse.png';
import fairtree from '../img/office/clientlogos/fairtree.jpg';
import famousbrands from '../img/office/clientlogos/famousbrands.png';
import fintec from '../img/office/clientlogos/fintec.png';
import harbourbay from '../img/office/clientlogos/harbourbay.png';
import hatstone from '../img/office/clientlogos/hatstone.jpg';
import hungrylion from '../img/office/clientlogos/hungrylion.jpeg';
import imperial from '../img/office/clientlogos/imperial.png';
import jamessedgewick from '../img/office/clientlogos/jamessedgewick.jpg';
import kwv from '../img/office/clientlogos/kwv.jpg';
import labotessa from '../img/office/clientlogos/labotessa.png';
import maafrika from '../img/office/clientlogos/maafrika.jpg';
import moerby from '../img/office/clientlogos/moerby.jpg';
import nederburg from '../img/office/clientlogos/nederburg.png';
import nooitgedacht from '../img/office/clientlogos/nooitgedacht.png';
import oakhill from '../img/office/clientlogos/oakhill.jpg';
import plairse from '../img/office/clientlogos/plairse.png';
import psg from '../img/office/clientlogos/psg.png';
import psgkonsult from '../img/office/clientlogos/psgkonsult.jpg';
import rootstock from '../img/office/clientlogos/rootstock.JPG';
import rsc from '../img/office/clientlogos/rsc.jpg';
import sanlameer from '../img/office/clientlogos/sanlameer.png';
import schmidt from '../img/office/clientlogos/schmidt.JPG';
import singletrack from '../img/office/clientlogos/singletrack.jpg';
import stellenboschuni from '../img/office/clientlogos/stellenboschuni.jpeg';
import synexus from '../img/office/clientlogos/synexus.jpeg';
import wcc from '../img/office/clientlogos/wcc.png';
import willis from '../img/office/clientlogos/willis.jpg';
import zeder from '../img/office/clientlogos/zeder.jpg';


class Office extends Component {
    render() {
        return (
            <Preloader>
                <div className="center-wrapper">
                    <header className="office-office">
                        <img className="office-logo" src={logo} alt="logo" />
                    </header>
                    <section className="flex-onecolumn">
                        <p><strong>‘SKEP’</strong> – to produce through artistic or imaginative effort.</p>
                        <p><strong>SKEP</strong> offers solutions tailored to specific needs and style, striving to produce creative, honest and environmentally responsible designs that add value to investments.</p>
                        <p><strong>SKEP</strong> is a Stellenbosch based firm specializing in architecture and interior design services.SKEP is a Stellenbosch based firm specializing in architecture and interior design services.</p>
                        <p>Founded in 2012 by Carla Gerber and Geraldine Heyns.</p>
                    </section>
                    <section className="office-map">
                        <div>
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
                            <h3>P.O. Box Address</h3>
                            <p>P.O. Box 396</p>
                            <p>Stellenbosch, 7599</p>
                        </div>
                        <div className="section-column">
                            <h3>Contact</h3>
                            <p>Geraldine: </p>
                            <p>082 523 8123</p>
                            <p className="space">-</p>
                            <p>Carla: </p>
                            <p>082 863 3482</p>
                            <h3>Office Number</h3>
                            <p>021 882 9450</p>
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
                                    <strong>Charlotte Van Biljon</strong>
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
                            {/* <div className="office-card">
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
                        </div> */}
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
                                        src={aaf}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={amc}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={arcinvestments}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={banhoek}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={bergkelder}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={chilloes}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={dbc}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={detoren}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={distell}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={dorpstraathotel}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={durbanvillehills}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={ellermanhouse}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={fairtree}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={famousbrands}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={fintec}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={harbourbay}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <a href="/projectone">
                                    <img
                                        src={hatstone}
                                        alt="dogimage"
                                    />
                                </a>
                            </div>
                            <div className="client-card">
                                <img
                                    src={hungrylion}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={imperial}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={jamessedgewick}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={kwv}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={labotessa}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={maafrika}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={moerby}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={nederburg}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={nooitgedacht}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={oakhill}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={plairse}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={psg}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={psgkonsult}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={rootstock}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={rsc}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={sanlameer}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={schmidt}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={singletrack}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={stellenboschuni}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={synexus}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={wcc}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={willis}
                                    alt="dogimage"
                                />
                            </div>
                            <div className="client-card">
                                <img
                                    src={zeder}
                                    alt="dogimage"
                                />
                            </div>
                        </main>
                    </React.Fragment>
                </div>
                <Placeholder>
                    <div className="loading">
                        <div>
                            <img id="loading" src={logoSpin} />
                        </div>
                        <div>
                            <h2 className="blink">Loading...</h2>
                        </div>
                    </div>
                </Placeholder>
            </Preloader>
        )
    }
}

export default Office;

