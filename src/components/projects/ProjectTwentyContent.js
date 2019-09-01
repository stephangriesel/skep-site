import React, { Component } from 'react'
import '../../css/Carousel.css';
import Slider from "react-slick";
import coverimage from '../../img/projects/project20-imperialmanaged/imperialmanaged-2014-cover.jpg';
import oneimage from '../../img/projects/project20-imperialmanaged/imperialmanaged-2014-1.jpg';
import twoimage from '../../img/projects/project20-imperialmanaged/imperialmanaged-2014-2.jpg';
// import threeimage from '../../img/projects/project20-imperialmanaged/imperialmanaged-2014-4.jpg';
import fourimage from '../../img/projects/project20-imperialmanaged/imperialmanaged-2014-4.jpg';
import fiveimage from '../../img/projects/project20-imperialmanaged/imperialmanaged-2014-5.jpg';
import siximage from '../../img/projects/project20-imperialmanaged/imperialmanaged-2014-6.jpg';
import eightimage from '../../img/projects/project20-imperialmanaged/imperialmanaged-2014-8.jpg';
import nineimage from '../../img/projects/project20-imperialmanaged/imperialmanaged-2014-9.jpg';
import tenimage from '../../img/projects/project20-imperialmanaged/imperialmanaged-2014-10.jpg';

class ProjectTwentyContent extends Component {
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
            pauseOnHover: true
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
                {/* <div className="slide-image">
                    <img src={threeimage} alt="slideimage" />
                </div> */}
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
                {/* <div className="slide-image">
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
                </div> */}

            </Slider>

        )
    }
}

export default ProjectTwentyContent;