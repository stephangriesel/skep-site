import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectSixContent from './ProjectSixContent';

class ProjectSix extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectSixContent />
            </div>
        )
    }
}

export default ProjectSix;
