import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectTwoContent from './ProjectTwoContent';

class ProjectTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectTwoContent />
            </div>
        )
    }
}

export default ProjectTwo;
