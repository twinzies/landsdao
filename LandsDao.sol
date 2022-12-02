pragma solidity >=0.4.0 < 0.9.0;

contract Lands {
    struct Property {
        address[] fractionals; // The fractionals are addresses as they are represented by an NFT. Can be made Uint for a simple implementation.
        string location;
        string description;
        string imageHash; // TODO What is IPFS cid and how to use it?
        uint256 last_sale_price;
        uint256 current_value;
    }
    mapping(uint16 => Property) brokerageOracle;
    mapping(address => address) assetRegistry; // Maps individual NFT to owners
}