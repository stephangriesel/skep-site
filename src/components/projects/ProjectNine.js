import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectNineContent from './ProjectNineContent';

class ProjectNine extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectNineContent />
            </div>
        )
    }
}

export default ProjectNine;
