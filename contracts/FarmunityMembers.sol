pragma solidity 0.5.8;
pragma experimental ABIEncoderV2;

import { IFarmunity } from "./interface/IFarmunity.sol";

contract FarmunityRegistry {

    mapping (address => bool) public farmers;

    IFarmunity public farmunity;
    address public governance;

    constructor(IFarmunity _farmunity, address _governance) public {
        farmunity = _farmunity;
        governance = _governance;
    }

    function add(address who) public {
        require(msg.sender == governance, "FarmunityRegistry::add: Only governance can add an identity");
        require(farmers[who] == false, "FarmunityRegistry::add: Address is already on the registry");

        _reward(who);
        farmers[who] = true;
    }

    function remove(address who) public {
        require(
            msg.sender == governance || msg.sender == who,
            "FarmunityRegistry::remove: Only governance or the identity owner can remove an identity"
        );
        delete farmers[who];
    }

    function isFarm(address who) public view returns (bool) {
        return farmers[who];
    }

    function _reward(address who) internal {
        uint totalSupply = farmunity.totalSupply();

        if (totalSupply < 28000000e18) {
            farmunity.mint(who, 30000e18); // 1 - 100
        } else if (totalSupply < 46000000e18) {
            farmunity.mint(who, 20000e18); // 101 - 1000
        } else if (totalSupply < 100000000e18) {
            farmunity.mint(who, 6000e18); // 1001 - 10000
        }

    }

}