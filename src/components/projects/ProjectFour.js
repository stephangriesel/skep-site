import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectFourContent from './ProjectFourContent';

class ProjectFour extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectFourContent />
            </div>
        )
    }
}

export default ProjectFour;
