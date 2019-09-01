import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectTwentyContent from './ProjectTwentyContent';

class ProjectTwenty extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectTwentyContent />
            </div>
        )
    }
}

export default ProjectTwenty;
