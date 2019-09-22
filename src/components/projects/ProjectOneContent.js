import React, { Component } from 'react'
import '../../css/Carousel.css';
import Slider from "react-slick";
import oneimage from '../../img/projects/project1-renaissance/ranaissance-2013.cover.jpg';
import twoimage from '../../img/projects/project1-renaissance/ranaissance-2013.2.jpg';
import threeimage from '../../img/projects/project1-renaissance/ranaissance-2013.4.jpg';
import fourimage from '../../img/projects/project1-renaissance/ranaissance-2013.4.jpg';
import fiveimage from '../../img/projects/project1-renaissance/ranaissance-2013.5.jpg';
import siximage from '../../img/projects/project1-renaissance/ranaissance-2013.6.jpg';
import sevenimage from '../../img/projects/project1-renaissance/ranaissance-2013.7.jpg';
import eightimage from '../../img/projects/project1-renaissance/ranaissance-2013.8.jpg';
import nineimage from '../../img/projects/project1-renaissance/ranaissance-2013.9.jpg';
import tenimage from '../../img/projects/project1-renaissance/ranaissance-2013.10.jpg';
import elevenimage from '../../img/projects/project1-renaissance/ranaissance-2013.11.jpg';
import twelveimage from '../../img/projects/project1-renaissance/ranaissance-2013.12.jpg';
import thirteenimage from '../../img/projects/project1-renaissance/ranaissance-2013.13.jpg';
import fourteenimage from '../../img/projects/project1-renaissance/ranaissance-2013.14.jpg';
import fifteenimage from '../../img/projects/project1-renaissance/ranaissance-2013.15.jpg';
import sixteenimage from '../../img/projects/project1-renaissance/ranaissance-2013.16.jpg';
import seventeenimage from '../../img/projects/project1-renaissance/ranaissance-2013.17.jpg';
import eightteenimage from '../../img/projects/project1-renaissance/ranaissance-2013.18.jpg';

class ProjectOneContent extends Component {
    render() {
        var settings = {
            dots: true,
            // infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            accessibility: true,
            autoplay: true,
            // fade:true,
            pauseOnHover: false,
            adaptiveHeight: true
        };
        return (

            <Slider {...settings}>
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
                    <img src={sevenimage} alt="slideimage" />
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
                    <img src={fifteenimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={sixteenimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={seventeenimage} alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src={eightteenimage} alt="slideimage" />
                </div>


            </Slider>

        )
    }
}

export default ProjectOneContent;
