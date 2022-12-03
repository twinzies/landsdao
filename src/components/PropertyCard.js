import React from 'react';
import './PropertyCard.css';
import PropImg from '../assets/PropertyImage.jpg';

class PropertyCard extends React.Component {

    render() {
        return (
            <div class="PropertyCard">
                <div class="PropertyImage">
                    <img src={PropImg} />
                </div>
                <div class="Data">
                    <div class="PropertyName">PropertyName</div>
                    <div class="PropertyCost">0.00 ETH</div>
                </div>
            </div>
        );
    }
}

export default PropertyCard;