import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectEightContent from './ProjectEightContent';

class ProjectEight extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectEightContent />
            </div>
        )
    }
}

export default ProjectEight;
