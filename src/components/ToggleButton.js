import React from 'react';
import '../css/ToggleButton.css';

const toggleButton = props => (
    <button className="toggle-button">
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
    </button>
);

export default toggleButton;