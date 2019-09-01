import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectTwentytwoContent from './ProjectTwentytwoContent';

class ProjectTwentytwo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectTwentytwoContent />
            </div>
        )
    }
}

export default ProjectTwentytwo;
