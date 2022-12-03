
import Web3 from "web3";
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
                    <h3 onClick={this.connectHandler}>Connect</h3>
                </div>
            </div>
        );
    }

    connectHandler = async () => {
        if (window.ethereum) {
            try {
                const res = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                // await this.accountChange(res[0]);
            } catch (err) {
                console.error(err);
                console.log("There was a problem connecting to MetaMask");
            }
        } else {
            console.log("Install MetaMask");
        }
    };
}

export default NavBar;
