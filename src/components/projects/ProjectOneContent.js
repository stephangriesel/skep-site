import React, { Component } from 'react'
import '../../css/Carousel.css';
import Slider from "react-slick";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

class ProjectOneContent extends Component {
    render() {
        var settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />
            
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

export default ProjectOneContent;
