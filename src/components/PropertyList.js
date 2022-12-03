import React from "react";
import './PropertyList.css';
import PropertyCard from './PropertyCard';

class PropertyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PropertyCardList: [
                { PropertyName: "1", PropertyPrice: 1.4 },
                { PropertyName: "2", PropertyPrice: 5.4 },
                { PropertyName: "3", PropertyPrice: 2.0 },
                { PropertyName: "4", PropertyPrice: 11.4 },
                { PropertyName: "5", PropertyPrice: 1.84 }
            ]
        }
    }

    render() {
        return (
            <div class="PropertyList">
                <div class="PropertyTitle">
                    Property List:
                </div>
                <div class="PropertyCards">
                    {/* {this.generatePropertyCards(10)} */}
                    {
                        this.state.PropertyCardList.map((PropertyData) => {
                            return <PropertyCard PropertyName={"Property " + PropertyData.PropertyName} PropertyPrice={PropertyData.PropertyPrice} ></PropertyCard>
                        })
                    }
                </div>
            </div >
        );
    }

    // generatePropertyCards(n) {
    //     let list = [];
    //     for (let i = 0; i < n; i++) {
    //         list.push(<PropertyCard></PropertyCard>);
    //     }
    //     return list;
    // }
}

export default PropertyList;