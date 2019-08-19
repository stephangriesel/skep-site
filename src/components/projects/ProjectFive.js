import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectFiveContent from './ProjectFiveContent';

class ProjectFive extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectFiveContent />
            </div>
        )
    }
}

export default ProjectFive;
