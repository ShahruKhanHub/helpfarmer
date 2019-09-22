pragma solidity 0.5.8;
pragma experimental ABIEncoderV2;


contract IFarmunity {
    function mint(address account, uint256 value) public;
    function totalSupply() public view returns (uint256);
}