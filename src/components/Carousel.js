import React, { Component } from 'react'
import '../css/Carousel.css';
import Slider from "react-slick";

class Carousel extends Component {
    render() {
        var settings = {

            dots: false,
            // infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // arrows: true
            
        };
        return (
            <Slider {...settings}>
                
                <div className="slide-image">
                    <img src="https://loremflickr.com/320/240/bordercollie" alt="slideimage" />
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
          
        )
    }
}

export default Carousel;
