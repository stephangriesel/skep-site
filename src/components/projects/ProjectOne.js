import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectOneContent from './ProjectOneContent';

class ProjectOne extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectOneContent />
            </div>
        )
    }
}

export default ProjectOne;
