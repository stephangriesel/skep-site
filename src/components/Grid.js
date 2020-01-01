import React, { Component } from 'react';
import '../css/Grid.css';
import '../css/Loading.css';
import logoSpin from '../logo.png';
import { Preloader, Placeholder } from 'react-preloading-screen';

// import renaissanceCover from '../img/covers/ranaissance-2013.cover.jpg';
import oubaaiCover from '../img/covers/oubaai-2018-cover.jpg';
import fourtythreeonpleinCover from '../img/covers/fourthythreeonplein-2017-cover.jpg';
import dorpstraatboutiquehotelCover from '../img/covers/dorpstraatboutiquehotel-2015-cover.jpg';
import psgstellenboschCover from '../img/covers/psgstellenbosch-2015-cover.jpg';
import rootstockCover from '../img/covers/rootstockstellenbosch-2015-cover.jpg';
import singletrackspinningstudioCover from '../img/covers/singletrackspinningstudio-2018-cover.jpg';
import ellermanhouseCover from '../img/covers/ellermanhouse-2018-cover.jpg';
import lecoetzenburgCover from '../img/covers/lecoetzenburg-2019-cover.jpg';
// import lecoetzenburgCover from '../img/projects/project9-lecoetzenburg/lecoetzenburg-2019-cover.jpg';
// import lecoetzenburgCover from '../img/projects/project9-lecoetzenburg/lecoetzenburg-2019-cover.jpg';
import banhoeklodgeCover from '../img/covers/banhoeklodge-2018-cover.jpg';
import bakhovenhouseCover from '../img/covers/bakhovenhouse-2016-cover.jpg';
import chilloesCover from '../img/covers/chilloes-2016-cover.jpg';
import fintecCover from '../img/covers/fintec-2017-cover.jpg';
import fairtreeCover from '../img/covers/fairtree-2015-cover.jpg';
import houseboschCover from '../img/covers/housebosch-2017-cover.jpg';
import sanlameerCover from '../img/covers/sanlameer-2015-cover.jpg';
import houseknoesenCover from '../img/covers/huisknoesen-2016-cover.jpg';
import imperialmanagedCover from '../img/covers/imperialmanaged-2014-cover.jpg';
import jamessedgwickdistilleryCover from '../img/covers/jamessedgwickdistillery-2016-cover.jpg';
import moerbyCover from '../img/covers/moerby-2016-cover.jpg';
import oakhillchurchCover from '../img/covers/oakhillchurch-2015-cover.jpg';
import psgjhbCover from '../img/covers/psgjohannesburg-2015-cover.jpg';
import synexusclinicCover from '../img/covers/synexusclinic-2016-cover.jpg';
import travelstartCover from '../img/covers/travelstart-2015-cover.jpg';
import zederCover from '../img/covers/zeder-2017-cover.jpg';
import yachtclubCover from '../img/covers/yachtclub-2018-cover.jpg';

class Grid extends Component {
  render() {
    return (
      <Preloader>
        <main className="card">
          {/* <div className="card">
            <a href="/projectone">
              <img
                src={renaissanceCover}
                alt="Renaissance Project"
              />
            </a>
            <div className="info">
              <h5>Renaissance</h5> */}
          {/* <p className="year">Year: 2013</p> */}
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
          {/* </div>
          </div> */}
          <div className="card">
            <a href="/projecttwo">
              <img
                src={oubaaiCover}
                alt="Oubaai Project"
              />
            </a>
            <div className="info">
              <h5>Oubaai</h5>
              {/* <p className="year">Year: 2018</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectthree">
              <img
                src={fourtythreeonpleinCover}
                alt="43 on Plein Project"
              />
            </a>
            <div className="info">
              <h5>43 on Plein</h5>
              {/* <p className="year">Year: 2017</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectfour">
              <img
                src={dorpstraatboutiquehotelCover}
                alt="Dorpstraat"
              />
            </a>
            <div className="info">
              <h5>Dorpstraat Boutique Hotel</h5>
              {/* <p className="year">Year: 2015</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectfive">
              <img
                src={psgstellenboschCover}
                alt="PSG"
              />
            </a>
            <div className="info">
              <h5>PSG Stellenbosch</h5>
              {/* <p className="year">Year: 2015</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectsix">
              <img
                src={rootstockCover}
                alt="Rootstock"
              />
            </a>
            <div className="info">
              <h5>Rootstock</h5>
              {/* <p className="year">Year: 2015</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectseven">
              <img
                src={singletrackspinningstudioCover}
                alt="Single Track"
              />
            </a>
            <div className="info">
              <h5>Single Track Spinning Studio</h5>
              {/* <p className="year">Year: 2018</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecteight">
              <img
                src={ellermanhouseCover}
                alt="Ellerman House"
              />
            </a>
            <div className="info">
              <h5>Ellerman House</h5>
              {/* <p className="year">Year: 2018</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectnine">
              <img
                src={lecoetzenburgCover}
                alt="Le Coetzenburg Project"
              />
            </a>
            <div className="info">
              <h5>Le Coetzenburg</h5>
              {/* <p className="year">Year: 2019</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          {/* <div className="card">
            <a href="/projectten">
              <img
                src={renaissanceCover}
                alt="Renaissance Project"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p>
            </div>
          </div> */}
          {/* <div className="card">
            <a href="/projecteleven">
              <img
                src={renaissanceCover}
                alt="Renaissance Project"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p>
            </div>
          </div> */}
          <div className="card">
            <a href="/projecttwelve">
              <img
                src={banhoeklodgeCover}
                alt="Banhoek Lodge"
              />
            </a>
            <div className="info">
              <h5>Banhoek</h5>
              {/* <p className="year">Year: 2018</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectthirteen">
              <img
                src={bakhovenhouseCover}
                alt="Bakhoven House"
              />
            </a>
            <div className="info">
              <h5>Bakhoven</h5>
              {/* <p className="year">Year: 2016</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectfourteen">
              <img
                src={chilloesCover}
                alt="Chilloes"
              />
            </a>
            <div className="info">
              <h5>Chilloes</h5>
              {/* <p className="year">Year: 2016</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectfifteen">
              <img
                src={fintecCover}
                alt="Fintec"
              />
            </a>
            <div className="info">
              <h5>Fintec</h5>
              {/* <p className="year">Year: 2017</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectsixteen">
              <img
                src={fairtreeCover}
                alt="Fairtree"
              />
            </a>
            <div className="info">
              <h5>Fairtree</h5>
              {/* <p className="year">Year: 2015</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectseventeen">
              <img
                src={houseboschCover}
                alt="House Bosch"
              />
            </a>
            <div className="info">
              <h5>House Bosch</h5>
              {/* <p className="year">Year: 2017</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecteighteen">
              <img
                src={sanlameerCover}
                alt="Sanlameer"
              />
            </a>
            <div className="info">
              <h5>Sanlameer</h5>
              {/* <p className="year">Year: 2015</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectnineteen">
              <img
                src={houseknoesenCover}
                alt="House Knoesen"
              />
            </a>
            <div className="info">
              <h5>House Knoesen</h5>
              {/* <p className="year">Year: 2016</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecttwenty">
              <img
                src={imperialmanagedCover}
                alt="Imprerial Managed"
              />
            </a>
            <div className="info">
              <h5>Imperial Managed</h5>
              {/* <p className="year">Year: 2014</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecttwentyone">
              <img
                src={jamessedgwickdistilleryCover}
                alt="James Sedgwick"
              />
            </a>
            <div className="info">
              <h5>James Sedgwick Distillery</h5>
              {/* <p className="year">Year: 2016</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecttwentytwo">
              <img
                src={moerbyCover}
                alt="Moerby"
              />
            </a>
            <div className="info">
              <h5>Moerby</h5>
              {/* <p className="year">Year: 2016</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecttwentythree">
              <img
                src={oakhillchurchCover}
                alt="Oakhill Chirch"
              />
            </a>
            <div className="info">
              <h5>Oakhill Church</h5>
              {/* <p className="year">Year: 2015</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecttwentyfour">
              <img
                src={psgjhbCover}
                alt="PSG Johannesburg"
              />
            </a>
            <div className="info">
              <h5>PSG Johannesburg</h5>
              {/* <p className="year">Year: 2015</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecttwentyfive">
              <img
                src={synexusclinicCover}
                alt="Synexus Clinic"
              />
            </a>
            <div className="info">
              <h5>Synexus CLinic</h5>
              {/* <p className="year">Year: 2016</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecttwentysix">
              <img
                src={travelstartCover}
                alt="Travelstart"
              />
            </a>
            <div className="info">
              <h5>Travelstart</h5>
              {/* <p className="year">Year: 2015</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecttwentyseven">
              <img
                src={zederCover}
                alt="Zeder"
              />
            </a>
            <div className="info">
              <h5>Zeder</h5>
              {/* <p className="year">Year: 2017</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectthirtythree">
              <img
                src={yachtclubCover}
                alt="Yachtclub"
              />
            </a>
            <div className="info">
              <h5>Yachtclub</h5>
              {/* <p className="year">Year: 2017</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>

        </main>
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

export default Grid;
