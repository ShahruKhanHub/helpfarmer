pragma solidity 0.5.8;
pragma experimental ABIEncoderV2;

import { IERC20 } from "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import { SafeMath } from "openzeppelin-solidity/contracts/math/SafeMath.sol";

import { IGovernance } from "./interface/IGovernance.sol";
import { IRegistry } from "./interface/IRegistry.sol";

contract FarmunityApplicant {
    using SafeMath for uint;

    IGovernance public governance;
    IRegistry public registry;
    IERC20 public farmunity;

    constructor(IGovernance _governance, IRegistry _registry, IERC20 _farmunity) public {
        governance = _governance;
        registry = _registry;
        farmunity = _farmunity;
        farmunity.approve(address(governance), uint(-1));
    }

    function applyFor(address who) public returns (uint) {
        uint fee = governance.proposalFee();
        uint balance = farmunity.balanceOf(address(this));
        if (fee > balance) {
            require(farmunity.transferFrom(msg.sender, address(this), fee.sub(balance)), "FarmunityApplicant::applyFor: Transfer failed");
        }
        bytes memory data = abi.encodeWithSelector(registry.add.selector, who);
        return governance.proposeWithFeeRecipient(msg.sender, address(registry), data);
    }

}
