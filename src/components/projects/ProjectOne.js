import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectOneSlide from './ProjectOneSlide';
import RightArrow from '../RightArrow';
import LeftArrow from '../LeftArrow';

class ProjectOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://loremflickr.com/920/840/spaniel",
                "https://loremflickr.com/920/840/dalmation",
                "https://loremflickr.com/920/840/jackrussel",
                "https://loremflickr.com/920/840/rottweiler",
                "https://loremflickr.com/920/840/airedaleterrier",
                "https://loremflickr.com/920/840/bordercollie",
                "https://loremflickr.com/920/840/doberman"
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide = () => {

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }));
    }

    goToNextSlide = () => {

        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
          }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
     }

    render() {
        return (
            <div className="image-slider"
                style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: 'transform ease-out 0.45s'
                }}>
                
                {
                    this.state.images.map((image, i) => (
                        <ProjectOneSlide key={i} image={image} />
                    ))
                }

                <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />
                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />
            </div>


        )
    }
}

export default ProjectOne;
