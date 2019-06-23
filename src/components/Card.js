import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {city}<br />
                    {address}
                </p>
                <ul className="features">
                    <li><i className="fas fa-bed">{bedrooms} </i><span>bedrooms</span></li>
                    <li><i className="fas fa-bath">{bathrooms}</i> <span>bathrooms</span></li>
                    <li><i className="fas fa-parking">{carSpaces}</i> <span>parking spots</span></li>
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;