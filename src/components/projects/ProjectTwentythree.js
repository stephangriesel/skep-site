import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectTwentythreeContent from './ProjectTwentythreeContent';

class ProjectTwentythree extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectTwentythreeContent />
            </div>
        )
    }
}

export default ProjectTwentythree;
