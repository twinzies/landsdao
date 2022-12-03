// SPDX-License-Identifier: Unlicensed

pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract LandsDAO {

    uint256 public propertyCounter;
    address payable owner;
    uint256 public listingPrice;

    struct propertyFractional {
        uint256 fractionalId;
        address ContractAddress;
        uint256 tokenId;
        address payable seller;
        address owner;
        uint256 value;
        bool isSold;
    }

    mapping(uint256 => propertyFractional) private allFractionals;

    event PropertyFractionalListed(
        uint256 indexed fractionalId,
        address indexed ContractAddress,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 value
    );

    constructor() {
        propertyCounter = 0;
        owner = payable(msg.sender);
        listingPrice = 0.001 ether;
    }

    function listFractional(
        address ContractAddress,
        uint256 tokenId,
        uint256 value
    ) public payable {
        require(msg.value == listingPrice, "Must pay the listing price");
        require(value > 0, "Price must be greater than 0");

        allFractionals[propertyCounter] = propertyFractional(
            propertyCounter,
            ContractAddress,
            tokenId,
            payable(msg.sender),
            address(0),
            value,
            false
        );

        IERC721(ContractAddress).transferFrom(
            msg.sender,
            address(this),
            tokenId
        );

        payable(owner).transfer(listingPrice);

        emit PropertyFractionalListed(
            propertyCounter,
            ContractAddress,
            tokenId,
            msg.sender,
            address(0),
            value
        );

        propertyCounter += 1;
    }

    function buyFractional(uint256 fractionalId) public payable {
        require(allFractionals[fractionalId].isSold == false, "Property is already sold");
        require(
            allFractionals[fractionalId].value == msg.value,
            "Must offer the correct price"
        );

        allFractionals[fractionalId].isSold = true;
        allFractionals[fractionalId].owner = payable(msg.sender);

        IERC721(allFractionals[fractionalId].ContractAddress).transferFrom(
            address(this),
            msg.sender,
            allFractionals[fractionalId].tokenId
        );
    }

    function getListing(uint256 fractionalId)
        public
        view
        returns (propertyFractional memory fractional)
    {
        fractional = allFractionals[fractionalId];
    }

    function updateValue(uint256 newValue) public {
        require(newValue > 0, "Updated value must be greater than 0");
        require(
            msg.sender == owner,
            "Only the owner can change the value"
        );

        listingPrice = newValue;
    }
}