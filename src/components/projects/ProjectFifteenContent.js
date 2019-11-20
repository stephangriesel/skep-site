import React, { Component } from 'react'
import '../../css/Carousel.css';
import Slider from "react-slick";
import coverimage from '../../img/projects/project15-fintec/fintec-2017-cover.jpg';
import oneimage from '../../img/projects/project15-fintec/fintec-2017-1.jpg';
import twoimage from '../../img/projects/project15-fintec/fintec-2017-2.jpg';
import threeimage from '../../img/projects/project15-fintec/fintec-2017-4.jpg';
import fourimage from '../../img/projects/project15-fintec/fintec-2017-4.jpg';
import fiveimage from '../../img/projects/project15-fintec/fintec-2017-5.jpg';
import siximage from '../../img/projects/project15-fintec/fintec-2017-6.jpg';
import eightimage from '../../img/projects/project15-fintec/fintec-2017-8.jpg';
import nineimage from '../../img/projects/project15-fintec/fintec-2017-9.jpg';
import tenimage from '../../img/projects/project15-fintec/fintec-2017-10.jpg';
import elevenimage from '../../img/projects/project15-fintec/fintec-2017-11.jpg';
import twelveimage from '../../img/projects/project15-fintec/fintec-2017-12.jpg';
import thirteenimage from '../../img/projects/project15-fintec/fintec-2017-13.jpg';
import fourteenimage from '../../img/projects/project15-fintec/fintec-2017-14.jpg';
import fivteenimage from '../../img/projects/project15-fintec/fintec-2017-15.jpg';
import sixteenimage from '../../img/projects/project15-fintec/fintec-2017-16.jpg';
import seventeenimage from '../../img/projects/project15-fintec/fintec-2017-17.jpg';
import eighteenimage from '../../img/projects/project15-fintec/fintec-2017-18.jpg';
import nineteenimage from '../../img/projects/project15-fintec/fintec-2017-19.jpg';
import twentyimage from '../../img/projects/project15-fintec/fintec-2017-20.jpg';
import twentyoneimage from '../../img/projects/project15-fintec/fintec-2017-21.jpg';
import twentytwoimage from '../../img/projects/project15-fintec/fintec-2017-22.jpg';
import twentythreeimage from '../../img/projects/project15-fintec/fintec-2017-23.jpg';
import twentyfourimage from '../../img/projects/project15-fintec/fintec-2017-24.jpg';
import twentyfiveimage from '../../img/projects/project15-fintec/fintec-2017-25.jpg';
import twentysiximage from '../../img/projects/project15-fintec/fintec-2017-26.jpg';
import twentysevenimage from '../../img/projects/project15-fintec/fintec-2017-27.jpg';
import twentyeightimage from '../../img/projects/project15-fintec/fintec-2017-28.jpg';
import twentynineimage from '../../img/projects/project15-fintec/fintec-2017-29.jpg';
import thirtyimage from '../../img/projects/project15-fintec/fintec-2017-30.jpg';
import thirtyoneimage from '../../img/projects/project15-fintec/fintec-2017-31.jpg';

class ProjectThirteenContent extends Component {
    render() {
        var settings = {
            dots: true,
            // infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            accessibility: true,
            autoplay: false,
            // fade:true,
            pauseOnHover: false,
            adaptiveHeight: true
        };
        return (

            <Slider {...settings}>
                <div className="slide-image">
                    <img src={coverimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={oneimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={twoimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={threeimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={fourimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={fiveimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={siximage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={eightimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={nineimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={tenimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={tenimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={elevenimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={twelveimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={thirteenimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={fourteenimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={fivteenimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={sixteenimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={seventeenimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={eighteenimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={nineteenimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={twentyimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={twentyoneimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={twentytwoimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={twentythreeimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={twentyfourimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={twentyfiveimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={twentysiximage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={twentysevenimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={twentyeightimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={twentynineimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={thirtyimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={thirtyoneimage} alt="slideimage" />
                </div>
            </Slider>

        )
    }
}

export default ProjectThirteenContent;
