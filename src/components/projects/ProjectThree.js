import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectThreeContent from './ProjectThreeContent';

class ProjectThree extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectThreeContent />
            </div>
        )
    }
}

export default ProjectThree;
