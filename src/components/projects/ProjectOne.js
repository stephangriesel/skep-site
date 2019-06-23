import React, { Component } from 'react';
import '../../css/ImageSlider.css';
import data from '../../data/ProjectOneData';
import Card from '../Card';


class ProjectOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

    prevProperty = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

    render() {
        const { property } = this.state;
        return (
            <div className="image-slider">
                <div className="cards-slider">
                    <div className="card-slider-wrapper">
                        <Card property={property} />
                    </div>
                </div>
                <button
                    onClick={() => this.nextProperty()}
                    disabled={property.index === data.properties.length - 1}
                >Next</button>
                <button
                    onClick={() => this.prevProperty()}
                    disabled={property.index === 0}
                >Prev</button>
            </div>

        )
    }
}

export default ProjectOne;
