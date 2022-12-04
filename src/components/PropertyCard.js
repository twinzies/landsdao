import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';
import PropImg from '../assets/PropertyImage.jpg';

class PropertyCard extends React.Component {

    render() {
        return (
            <div class="PropertyCard">
                <div class="PropertyImage">
                    <Link to={{ pathname: "/property", state: "Here we go!" }}><img src={PropImg} /></Link>
                </div>
                <div class="Data">
                    <div class="PropertyName">{this.props.PropertyName}</div>
                    <div class="PropertyCost">{this.props.PropertyPrice} ETH</div>
                </div>
            </div>
        );
    }
}

export default PropertyCard;

