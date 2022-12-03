// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import '@openzeppelin/contracts/utils/Counters.sol';
// import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
// import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
// import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';

//import hardhat/console.sol

pragma solidity >=0.4.0 < 0.9.0;

contract LandsDAO {
    address payable owner;
    using Counters for Counters.Counter;

    uint256 public listingPrice;
    Counters.Counter private _propertyIds;
    struct Property {
        uint256 propertyId;
        uint[] fractionalIds; // The fractionals that maketh the property.
        string location;
        string name;
        string imageHash; // TODO How to use IPFS cid here?
        uint256 currentValue;
    }

    // Maps Property IDs to properties.
    mapping(uint256 => Property) propertyOracle;

    Counters.Counter private _fractionalIds;

    struct Fractional {
        uint256 parentPropertyId;
        uint256 fractionalId;
        address owner;
        address seller;
        address contractAddress; //TODO should this be cid ?
    
        bool forSale;
        uint256 price;
    }

    // Maps Fractional IDs to Fractionals. Private to ensure privacy of owners.
    mapping(uint256 => Fractional) fractionalOracle;

    // When a fractional property is listed for sale.
    event FractionalPropertyListed(
        uint256 indexed parentPropertyId,
        uint256 indexed fractionalId,
        address indexed contractAddress,
        uint256 price,
        address owner
    );

    event FractionalSold (
        uint256 indexed fractionalId,
        uint256 price,
        address owner
    );

    event NewPropertyListed(
        uint256 current_value,
        uint256 propertyId,
        string location,
        string name
    );

    constructor() {
        owner = payable(msg.sender);
        listingPrice = 0.001 ether;
    }

    // Upon listing, the caller will provide the number of fractionals desired.
    function listNewProperty() public payable {}

    function sellFractional() public payable {}

    function buyFractional() public payable {}

    function getFractionalInfo() public view {}

    function getAllAvailableProperty() public view {}

    function updateFractionalprice() public {}

}