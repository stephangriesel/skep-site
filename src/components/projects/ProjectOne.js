import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectOneSlide from './ProjectOneSlide';
import leftArrow from '../LeftArrow';
import RightArrow from '../RightArrow';
import LeftArrow from '../LeftArrow';

class ProjectOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="image-slider">
                <ProjectOneSlide />

                <LeftArrow />
                <RightArrow />
            </div>


        )
    }
}

export default ProjectOne;
