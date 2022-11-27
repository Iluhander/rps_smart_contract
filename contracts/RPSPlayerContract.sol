//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/utils/Strings.sol";

contract RPSPlayerContract {
    constructor() {}

    string choice = "none";

    string suffix = "";

    bool committed = false;

    address RPSContractAdress = address(0);

    bytes32 commitment;

    function getCommitment() public view returns(bytes32) {
        return commitment;
    }

    modifier gameStarted() {
        require(committed, "Game has not started yet.");
        _;
    }

    modifier gameNotStarted() {
        require(!committed, "The RPS contract's address can't be changed during the game.");
        _;
    }

    modifier addressSpecified() {
        require(RPSContractAdress != address(0), "RPS contract's adress isn't specified.");
        _;
    }

    /**
     * Function for providing address of the smart contract, organizing games.
     */
    function provideRPSContractAddress(address rps) public gameNotStarted {
        RPSContractAdress = rps;
    }

    /**
     * Generator of pseudo random numbers.
     * @return a pseudo random number.
     */
    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
    }

    /**
     * Function, which chooses, will the adress go for rock, paper or scissors.
     */
    function makeChoice() private {
        if (random() % 3 == 0) {
            choice = "rock";
        } else if (random() % 3 == 1) {
            choice = "paper";
        } else {
            choice = "scissors";
        }
    }

    function makeCommitment() external addressSpecified {
        // Getting a string with the contract's choice.
        makeChoice();

        // Generating a random suffix string.
        suffix = Strings.toString(random() % 10000);

        // Forming a commitment.
        commitment = keccak256(abi.encodePacked(choice, suffix));

        // Commiting
        (bool success, bytes memory data) = RPSContractAdress.call{value: 0}(
            abi.encodeWithSignature("commitChoice(bytes32)", commitment)
        );
        
        committed = true;
    }

    function reveal() external gameStarted {
        (bool success, bytes memory data) = RPSContractAdress.call{value: 0}(
            abi.encodeWithSignature("revealChoice(string,string)", choice, suffix)
        );

        committed = false;
    }
}