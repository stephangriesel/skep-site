import React from 'react';
import '../css/ToggleButton.css';

const toggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
    </button>
);

export default toggleButton;