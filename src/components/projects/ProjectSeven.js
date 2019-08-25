import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectSevenContent from './ProjectSevenContent';

class ProjectSeven extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectSevenContent />
            </div>
        )
    }
}

export default ProjectSeven;
