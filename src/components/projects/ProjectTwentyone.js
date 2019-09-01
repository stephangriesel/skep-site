import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectTwentyoneContent from './ProjectTwentyoneContent';

class ProjectTwentyone extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectTwentyoneContent />
            </div>
        )
    }
}

export default ProjectTwentyone;
