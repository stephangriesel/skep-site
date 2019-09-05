import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectTwentyfiveContent from './ProjectTwentyfiveContent';

class ProjectTwentyfive extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectTwentyfiveContent />
            </div>
        )
    }
}

export default ProjectTwentyfive;
