import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectTwentysixContent from './ProjectTwentysixContent';

class ProjectTwentysix extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectTwentysixContent />
            </div>
        )
    }
}

export default ProjectTwentysix;
