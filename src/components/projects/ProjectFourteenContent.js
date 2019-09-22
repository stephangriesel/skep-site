import React, { Component } from 'react'
import '../../css/Carousel.css';
import Slider from "react-slick";
import coverimage from '../../img/projects/project14-chilloes/chilloes-2016-cover.jpg';
import oneimage from '../../img/projects/project14-chilloes/chilloes-2016-cover.jpg';
import twoimage from '../../img/projects/project14-chilloes/chilloes-2016-2.jpg';
import threeimage from '../../img/projects/project14-chilloes/chilloes-2016-4.jpg';
import fourimage from '../../img/projects/project14-chilloes/chilloes-2016-4.jpg';
import fiveimage from '../../img/projects/project14-chilloes/chilloes-2016-5.jpg';
import siximage from '../../img/projects/project14-chilloes/chilloes-2016-6.jpg';

class ProjectFourteenContent extends Component {
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

            </Slider>

        )
    }
}

export default ProjectFourteenContent;
