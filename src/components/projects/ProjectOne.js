import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import Carousel from '../Carousel';

class ProjectOne extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <Carousel />
            </div>
        )
    }
}

export default ProjectOne;
