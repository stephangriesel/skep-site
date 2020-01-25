import React, { Component } from 'react'
import '../../css/Carousel.css';
import Slider from "react-slick";

class ProjectTwoContent extends Component {
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
                    <img src="https://res.cloudinary.com/dvme554nj/image/upload/w_1500,f_auto/v1579672073/skep/Oubaai/oubaai-2018-cover.jpg" alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src="https://res.cloudinary.com/dvme554nj/image/upload/w_1500,f_auto/v1579672073/skep/Oubaai/oubaai-2018-1.jpg" alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src="https://res.cloudinary.com/dvme554nj/image/upload/w_1500,f_auto/v1579672073/skep/Oubaai/oubaai-2018-2.jpg" alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src="https://res.cloudinary.com/dvme554nj/image/upload/w_1500,f_auto/v1579672073/skep/Oubaai/oubaai-2018-3.jpg" alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src="https://res.cloudinary.com/dvme554nj/image/upload/w_1500,f_auto/v1579672073/skep/Oubaai/oubaai-2018-4.jpg" alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src="https://res.cloudinary.com/dvme554nj/image/upload/w_1500,f_auto/v1579672073/skep/Oubaai/oubaai-2018-5.jpg" alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src="https://res.cloudinary.com/dvme554nj/image/upload/w_1500,f_auto/v1579672073/skep/Oubaai/oubaai-2018-6.jpg" alt="slideimage" />
                </div>
                <div className="slide-image">
                    <img src="https://res.cloudinary.com/dvme554nj/image/upload/w_1500,f_auto/v1579672073/skep/Oubaai/oubaai-2018-7.jpg" alt="slideimage" />
                </div>
                {/* <div className="slide-image">
                    <img src="https://res.cloudinary.com/dvme554nj/image/upload/w_1500,f_auto/v1579672073/skep/Oubaai/oubaai-2018-7.jpg" alt="slideimage" />
                </div> */}
            </Slider>

        )
    }
}

export default ProjectTwoContent;
