import React, { Component } from 'react';
import '../css/Grid.css';
import renaissanceCover from '../img/projects/project1-renaissance/ranaissance-2013.cover.jpg';
import oubaaiCover from '../img/projects/project2-oubaai/oubaai-2018-cover.jpg';
import fourtythreeonpleinCover from '../img/projects/project3-43onplein/fourthythreeonplein-2017-cover.jpg';
import dorpstraatboutiquehotelCover from '../img/projects/project4-dorpstraatboutiquehotel/dorpstraatboutiquehotel-2015-cover.jpg';
import psgstellenboschCover from '../img/projects/project5-psgstellenbosch/psgstellenbosch-2015-cover.jpg';
import rootstockCover from '../img/projects/project6-rootstockstellenbosch/rootstockstellenbosch-2015-cover.jpg';
import singletrackspinningstudioCover from '../img/projects/project7-singletrackspinningstudio/singletrackspinningstudio-2018-cover.jpg';
import ellermanhouseCover from '../img/projects/project8-ellermanhouse/ellermanhouse-2018-cover.jpg';
import lecoetzenburgCover from '../img/projects/project9-lecoetzenburg/lecoetzenburg-2019-cover.jpg';
// import lecoetzenburgCover from '../img/projects/project9-lecoetzenburg/lecoetzenburg-2019-cover.jpg';
// import lecoetzenburgCover from '../img/projects/project9-lecoetzenburg/lecoetzenburg-2019-cover.jpg';
import banhoeklodgeCover from '../img/projects/project12-banhoeklodge/banhoeklodge-2018-cover.jpg';
import bakhovenhouseCover from '../img/projects/project13-bakhovenresidence/bakhovenhouse-2016-cover.jpg';
import chilloesCover from '../img/projects/project14-chilloes/chilloes-2016-cover.jpg';
import fintecCover from '../img/projects/project15-fintec/fintec-2017-cover.jpg';
import fairtreeCover from '../img/projects/project16-fairtree/fairtree-2015-cover.jpg';
import houseboschCover from '../img/projects/project17-housebosch/housebosch-2017-cover.jpg';
import sanlameerCover from '../img/projects/project18-sanlameer/sanlameer-2015-cover.jpg';
import houseknoesenCover from '../img/projects/project19-houseknoesen/huisknoesen-2016-cover.jpg';
import imperialmanagedCover from '../img/projects/project20-imperialmanaged/imperialmanaged-2014-cover.jpg';
import jamessedgwickdistilleryCover from '../img/projects/project21-jamessedgwickdistillery/jamessedgwickdistillery-2016-cover.jpg';
import moerbyCover from '../img/projects/project22-moerby/moerby-2016-cover.jpg';

class Grid extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="card">
          <div className="card">
            <a href="/projectone">
              <img
                src={renaissanceCover}
                alt="Renaissance Project"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecttwo">
              <img
                src={oubaaiCover}
                alt="Oubaai Project"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
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
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectfour">
              <img
                src={dorpstraatboutiquehotelCover}
                alt="Renaissance Project"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectfive">
              <img
                src={psgstellenboschCover}
                alt="Renaissance Project"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectsix">
              <img
                src={rootstockCover}
                alt="Renaissance Project"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectseven">
              <img
                src={singletrackspinningstudioCover}
                alt="Renaissance Project"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecteight">
              <img
                src={ellermanhouseCover}
                alt="Renaissance Project"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
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
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectten">
              <img
                src={renaissanceCover}
                alt="Renaissance Project"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecteleven">
              <img
                src={renaissanceCover}
                alt="Renaissance Project"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecttwelve">
              <img
                src={banhoeklodgeCover}
                alt="Banhoek Lodge"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
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
              <strong>Title</strong>
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
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectfifteen">
              <img
                src={fintecCover}
                alt="Chilloes"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectsixteen">
              <img
                src={fairtreeCover}
                alt="Chilloes"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
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
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecteighteen">
              <img
                src={sanlameerCover}
                alt="House Bosch"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projectnineteen">
              <img
                src={houseknoesenCover}
                alt="House Bosch"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecttwenty">
              <img
                src={imperialmanagedCover}
                alt="House Bosch"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecttwentyone">
              <img
                src={jamessedgwickdistilleryCover}
                alt="House Bosch"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>
          <div className="card">
            <a href="/projecttwentytwo">
              <img
                src={moerbyCover}
                alt="House Bosch"
              />
            </a>
            <div className="info">
              <strong>Title</strong>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus similique explicabo voluptates, quod nostrum? Obcaecati incidunt adipisci aut quaerat?</p> */}
            </div>
          </div>

        </main>
      </React.Fragment>
    )
  }
}

export default Grid;
