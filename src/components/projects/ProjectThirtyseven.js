import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectThirtysevenContent from './ProjectThirtysevenContent';

class ProjectThirtyseven extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectThirtysevenContent />
            </div>
        )
    }
}

export default ProjectThirtyseven;
