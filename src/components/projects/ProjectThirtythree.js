import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectThirtythreeContent from './ProjectThirtythreeContent';

class ProjectThirtythree extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectThirtythreeContent />
            </div>
        )
    }
}

export default ProjectThirtythree;
