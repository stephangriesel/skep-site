import React, { Component } from 'react'
import '../../css/Carousel.css';
import Slider from "react-slick";
import coverimage from '../../img/projects/project37-famousbrands/famousbrands-2019-cover.jpg';
import oneimage from '../../img/projects/project37-famousbrands/famousbrands-2019-1.jpg';
import twoimage from '../../img/projects/project37-famousbrands/famousbrands-2019-2.jpg';
import threeimage from '../../img/projects/project37-famousbrands/famousbrands-2019-4.jpg';
import fourimage from '../../img/projects/project37-famousbrands/famousbrands-2019-4.jpg';
import fiveimage from '../../img/projects/project37-famousbrands/famousbrands-2019-5.jpg';
import siximage from '../../img/projects/project37-famousbrands/famousbrands-2019-6.jpg';
import eightimage from '../../img/projects/project37-famousbrands/famousbrands-2019-8.jpg';

class ProjectThirtysevenContent extends Component {
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
            </Slider>

        )
    }
}

export default ProjectThirtysevenContent;
