import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectNineteenContent from './ProjectNineteenContent';

class ProjectNineteen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectNineteenContent />
            </div>
        )
    }
}

export default ProjectNineteen;
