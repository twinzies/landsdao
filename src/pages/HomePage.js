import React from "react";
import PropertyList from '../components/PropertyList';
import NavBar from '../components/NavBar';
import './HomePage.css';

class HomePage extends React.Component {
    render() {
        return (
            <div class="HomePage">
                <NavBar></NavBar>
                <div class="Banner"></div>
                <PropertyList></PropertyList>
            </div>
        );
    }
}

export default HomePage;