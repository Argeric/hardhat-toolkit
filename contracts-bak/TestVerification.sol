// SPDX-License-Identifier: MIT
pragma solidity =0.8.6;

contract TestVerification {
    string public constant name = "Test Contract";
    uint256 public immutable deployTime;
    string private _name;
    string private _symbol;
    uint8 private _decimals;

    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimals_
    ) {
        deployTime = 20251224008;
        _name = name_;
        _symbol = symbol_;
        _decimals = decimals_;
    }

    function getMessage() external pure returns (string memory) {
        return "Hello Conflux!";
    }
}