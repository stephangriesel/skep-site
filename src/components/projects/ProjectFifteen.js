import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectFifteenContent from './ProjectFifteenContent';

class ProjectFifteen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectFifteenContent />
            </div>
        )
    }
}

export default ProjectFifteen;
