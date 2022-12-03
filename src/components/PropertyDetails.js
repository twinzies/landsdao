import React from "react";
import './PropertyDetails.css';
import PropImg from '../assets/PropertyImage.jpg';

class PropertyDetails extends React.Component {


    render() {
        return (
            <div class="PropertyDetails">
                <div class="PropertyImage">
                    <img src={PropImg} ></img>
                </div>
                <div class="Space1"></div>
                <div class="PropertyData">
                    <div class="PropertyName">
                        PropertyName
                    </div>
                    <div class="PropertyPrice">
                        PropertyPrice
                    </div>
                    <div class="PropertyAddress">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Et, ducimus, soluta eaque
                        odio laudantium esse obcaecati quod molestias
                        veritatis atque quasi harum quaerat at quibusdam
                        dolorum, illum tempore asperiores dolor?
                    </div>
                    <div class="Space1"></div>
                    <div class="Button">
                        <a href="#">Buy</a>
                    </div>
                </div>
            </div >

        );
    }
}

export default PropertyDetails;