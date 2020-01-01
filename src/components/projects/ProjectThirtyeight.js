import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectThirtyeightContent from './ProjectThirtyeightContent';

class ProjectThirtyeight extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectThirtyeightContent />
            </div>
        )
    }
}

export default ProjectThirtyeight;
