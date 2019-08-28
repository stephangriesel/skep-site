import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectThirteenContent from './ProjectThirteenContent';

class ProjectThirteen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectThirteenContent />
            </div>
        )
    }
}

export default ProjectThirteen;
