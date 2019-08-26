import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectTwelveContent from './ProjectTwelveContent';

class ProjectTwelve extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectTwelveContent />
            </div>
        )
    }
}

export default ProjectTwelve;
