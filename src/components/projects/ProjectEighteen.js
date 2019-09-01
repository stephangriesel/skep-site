import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectEighteenContent from './ProjectEighteenContent';

class ProjectEighteen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectEighteenContent />
            </div>
        )
    }
}

export default ProjectEighteen;
