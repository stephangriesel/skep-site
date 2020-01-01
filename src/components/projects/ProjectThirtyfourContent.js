import React, { Component } from 'react'
import '../../css/Carousel.css';
import Slider from "react-slick";
import coverimage from '../../img/projects/project34-hartenbos/atkvhartenbos-2019-cover.jpg';
import oneimage from '../../img/projects/project34-hartenbos/atkvhartenbos-2019-1.jpg';
import twoimage from '../../img/projects/project34-hartenbos/atkvhartenbos-2019-2.jpg';

class ProjectThirtyfourContent extends Component {
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
            </Slider>

        )
    }
}

export default ProjectThirtyfourContent;
