

import React from "react";
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div class="NavBar">
                <div class="CompanyName">
                    LandsDAO
                </div>
                <div class="Space">

                </div>
                <div class="Connect">
                    <a href="#">Connect</a>
                </div>
            </div>
        );
    }
}

export default NavBar;
