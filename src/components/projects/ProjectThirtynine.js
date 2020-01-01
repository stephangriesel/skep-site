import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectThirtynineContent from './ProjectThirtynineContent';

class ProjectThirtynine extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectThirtynineContent />
            </div>
        )
    }
}

export default ProjectThirtynine;
