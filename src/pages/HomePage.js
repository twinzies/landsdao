import React from "react";
import PropertyCard from '../components/PropertyCard';
import NavBar from '../components/NavBar';
import './HomePage.css';

class HomePage extends React.Component {
    render() {
        return (
            <div class="HomePage">
                <NavBar></NavBar>
                <div class="Banner"></div>
                <PropertyCard></PropertyCard>
            </div>
        );
    }
}

export default HomePage;