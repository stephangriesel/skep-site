import React, { Component } from 'react'
import '../../css/Carousel.css';
import Slider from "react-slick";
import coverimage from '../../img/projects/project16-fairtree/fairtree-2015-cover.jpg';
import oneimage from '../../img/projects/project16-fairtree/fairtree-2015-2.jpg';
import twoimage from '../../img/projects/project16-fairtree/fairtree-2015-3.jpg';
import threeimage from '../../img/projects/project16-fairtree/fairtree-2015-4.jpg';
import fourimage from '../../img/projects/project16-fairtree/fairtree-2015-4.jpg';
import fiveimage from '../../img/projects/project16-fairtree/fairtree-2015-5.jpg';
import siximage from '../../img/projects/project16-fairtree/fairtree-2015-6.jpg';
import eightimage from '../../img/projects/project16-fairtree/fairtree-2015-8.jpg';
import nineimage from '../../img/projects/project16-fairtree/fairtree-2015-9.jpg';
import tenimage from '../../img/projects/project16-fairtree/fairtree-2015-10.jpg';
import elevenimage from '../../img/projects/project16-fairtree/fairtree-2015-11.jpg';
import twelveimage from '../../img/projects/project16-fairtree/fairtree-2015-12.jpg';
import thirteenimage from '../../img/projects/project16-fairtree/fairtree-2015-13.jpg';

class ProjectSixteenContent extends Component {
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

            </Slider>

        )
    }
}

export default ProjectSixteenContent;
