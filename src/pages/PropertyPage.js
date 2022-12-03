import React from "react";
import PropertyDetails from '../components/PropertyDetails';
import NavBar from '../components/NavBar';
import './PropertyPage.css';

class PropertyPage extends React.Component {
    render() {
        return (
            <div class="PropertyPage">
                <NavBar></NavBar>
                <PropertyDetails></PropertyDetails>
            </div>
        );
    }
}

export default PropertyPage;