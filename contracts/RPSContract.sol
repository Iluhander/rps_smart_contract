//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

contract RPSContract {
    string constant public None = "none";

    string constant public Rock = "rock";

    string constant public Paper = "paper";

    string constant public Scissors = "scissors";

    uint constant playersMaxCount = 2;

    uint playersCurrentCount = 0;

    bool[2] revealed = [false, false];

    address[2] addresses;

    bytes32[2] choicesHashes;

    string[2] choices;

    string maxPlayersResponce = string(
        abi.encodePacked("Maximum players count (", playersMaxCount, ") is reached.")
    );

    event ResultsRevealed(
        address winner
    );

    event ChoicesDone();

    constructor() {}

    function getChoicesHashes() external view returns(bytes32[2] memory) {
        return choicesHashes;
    }

    function getChoices() external view returns(string[2] memory) {
        return choices;
    }

    // Handling reaching the maximum amount of people.
    modifier gameAvailable() {
        require(playersCurrentCount < playersMaxCount, maxPlayersResponce);
        _;
    }

    // Checking did the game end.
    modifier gameStarted() {
        require(playersCurrentCount > 0, "Game wasn't started.");
        _;
    }


    /*
    * The parameter "_choiceHash" should be a result of calling 
    * keccak256(abi.encodePacked(yourString, suffix)),
    * where yourString is your choice ("none", "rock", "paper" or "scissors") and
    * suffix is some random string, needed for the result of calling
    * keccak256 to be unpredictable.
    */
    function commitChoice(bytes32 _choiceHash) external gameAvailable {
        addresses[playersCurrentCount] = msg.sender;
        choicesHashes[playersCurrentCount] = _choiceHash;
        choices[playersCurrentCount] = None;

        playersCurrentCount++;

        // Notifying players, that it's time to make reveals.
        if (playersCurrentCount == playersMaxCount) {
            emit ChoicesDone();
        }
    }

    function getPlayer(address a) private view returns (uint32) {
        uint32 player = 0;
        if (addresses[1] == a) {
            player = 1;
        }

        return player;
    }

    function revealChoice(string memory _choice, string memory _suffix) external gameStarted {
        uint player = getPlayer(msg.sender);

        // Incorrect hash error.
        require(keccak256(abi.encodePacked(_choice, _suffix)) == choicesHashes[player],
            "Choice and suffix don't match the hash stored.");

        choices[player] = _choice;
        revealed[player] = true;

        // Resetting players.
        if (revealed[0] && revealed[1]) {
            playersCurrentCount = 0;
            revealed[0] = false;
            revealed[1] = false;

            emit ResultsRevealed(getWinner());
        }
    }

    function getChoice(uint player) private view returns(uint){
        bytes32 playerChoice = keccak256(abi.encodePacked((choices[player])));

        if (playerChoice == keccak256(abi.encodePacked((Rock)))) {
            return 1;
        } else if (playerChoice == keccak256(abi.encodePacked((Paper)))) {
            return 2;
        } else if (playerChoice == keccak256(abi.encodePacked((Scissors)))) {
            return 3;
        } else {
            return 0;
        }
    }

    function getWinner() public view returns(address) {
        uint player0Choice = getChoice(0);
        uint player1Choice = getChoice(1);

        if (player0Choice == 0 && player0Choice == 0) {
            return address(this);
        } else if (player0Choice == 0) {
            return addresses[1];
        } else if (player1Choice == 0) {
            return addresses[0];
        } else if (player0Choice == 1 && player1Choice == 2) {
            return addresses[1];
        } else if (player0Choice == 2 && player1Choice == 1) {
            return addresses[0];
        } else if (player0Choice == 1 && player1Choice == 3) {
            return addresses[0];
        } else if (player0Choice == 3 && player1Choice == 1) {
            return addresses[1];
        } else if (player0Choice == 2 && player1Choice == 3) {
            return addresses[1];
        } else {
            return addresses[0];
        }
    }

    // Function only for testing purposes.
    function getHash(string memory s) external pure returns (bytes32){
        return keccak256(abi.encodePacked((s)));
    }
}