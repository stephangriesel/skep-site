import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import ProjectThirtysixContent from './ProjectThirtysixContent';

class ProjectThirtysix extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="page-container">
                <ProjectThirtysixContent />
            </div>
        )
    }
}

export default ProjectThirtysix;
