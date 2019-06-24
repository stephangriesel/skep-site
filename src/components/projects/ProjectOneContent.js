import React, { Component } from 'react'
import '../../css/Carousel.css';
import Slider from "react-slick";

class ProjectOneContent extends Component {
    render() {
        var settings = {
            dots: true,
            // infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            accessibility:true,
            autoplay:true,
            // fade:true,
            pauseOnHover:false
        };
        return (

            <Slider {...settings}>
                <div className="slide-image">
                    <img src="https://loremflickr.com/920/640/bordercollie" alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src="https://loremflickr.com/920/640/foxterrier" alt="slideimage" />
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
