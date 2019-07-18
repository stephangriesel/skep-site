import React, { Component } from 'react'
import '../../css/Carousel.css';
import Slider from "react-slick";
import oneimage from '../../img/projects/renaissance/ranaissance-2013.cover.jpg';
import twoimage from '../../img/projects/renaissance/renaissance-2013.2.jpg';

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
            pauseOnHover: true
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
                    <img src="https://loremflickr.com/920/640/germanshepherd" alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src="https://loremflickr.com/920/640/pekinese" alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src="https://loremflickr.com/920/640/rottweiler" alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src="https://loremflickr.com/920/640/staffie" alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src="https://loremflickr.com/920/640/bulldog" alt="slideimage" />
                </div>

            </Slider>

        )
    }
}

export default ProjectOneContent;
