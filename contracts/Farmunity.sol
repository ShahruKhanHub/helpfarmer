pragma solidity 0.5.8;
pragma experimental ABIEncoderV2;

import { ERC20 } from "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract Farmunity is ERC20 {

    string public constant name = "Farmunity";
    string public constant symbol = "HUM";
    uint8 public constant decimals = 18;
    string public version = "1.0.0";

    uint public constant INITIAL_SUPPLY = 25000000e18; // 25 million
    uint public constant FINAL_SUPPLY = 100000000e18; // 100 million

    address public registry;

    constructor(address _registry) public {
        registry = _registry;
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function mint(address account, uint256 value) public {
        require(msg.sender == registry, "Farmunity::mint: Only the registry can mint new tokens");
        require(totalSupply().add(value) <= FINAL_SUPPLY, "Farmunity::mint: Exceeds final supply");

        _mint(account, value);
    }

}