/*
* PLEASE, CHECK THE WHOLE FILE.
*
* ! General RPS tests are at the beginning !
* 
* ! Smart contract integration tests are at the end !
*/

const { expect } = require('chai');

// General (RPSConract unit) tests.
describe("RPSContract", function() {
    let contractDeployed;

    /**
    * Function for commiting choices.
    * @param {String} choice0 the string, representing choiceOfPlayer0 + randomSuffix0
    * @param {String} choice1 the string, representing choiceOfPlayer1 + randomSuffix1
    * @return {Array.<String>} hashes of choices.
    */
    async function commitChoices(choice0, choice1, addr1) {
        // Getting hashes.
        choice0Hash = await contractDeployed.getHash(choice0);
        choice1Hash = await contractDeployed.getHash(choice1);

        // Committing.
        await contractDeployed.commitChoice(choice0Hash);
        await contractDeployed.connect(addr1).commitChoice(choice1Hash);

        return [choice0Hash, choice1Hash];
    }

    /**
    * Function for commiting choices.
    * @param {String} choice0 the string, representing choiceOfPlayer0
    * @param {String} suffix0 the string, representing randomSuffix0
    * @param {String} choice1 the string, representing choiceOfPlayer1
    * @param {String} suffix1 the string, representing randomSuffix1
    */
     async function commitAndReveal(choice0, suffix0, choice1, suffix1, owner, addr1) {
        // Committing choices.
        await commitChoices(choice0 + suffix0, choice1 + suffix1, addr1);

        // Making reveals.
        await contractDeployed.connect(owner).revealChoice(choice0, suffix0);
        await contractDeployed.connect(addr1).revealChoice(choice1, suffix1);
    }

    beforeEach(async function() {
        // Preparing the smart contract.
        const RPSContract = await hre.ethers.getContractFactory("RPSContract");

        contractDeployed = await RPSContract.deploy();

        await contractDeployed.deployed();
    });

    it("Should commit", async function() {
        // Getting test addresses.
        const [owner, addr1] = await ethers.getSigners();

        // Making choices.
        const choice0 = "rock" + "123";
        const choice1 = "paper" + "_";

        // Getting hashes and committing choices.
        const [choice0Hash, choice1Hash] = await commitChoices(choice0, choice1, addr1);

        let hashes = await contractDeployed.getChoicesHashes();

        // Checking hashes.
        expect(hashes[0]).to.equal(choice0Hash);
        expect(hashes[1]).to.equal(choice1Hash);
    });

    it("Should reveal", async function() {
        // Getting test addresses.
        const [owner, addr1] = await ethers.getSigners();

        // Making choices.
        const choice0 = "rock";
        const suffix0 = "101";
        const choice1 = "scissors";
        const suffix1 = "";

        // Committing and revealing.
        await commitAndReveal(choice0, suffix0, choice1, suffix1, owner, addr1);

        // Getting choices, that are stored in the smart contract.
        let choices = await contractDeployed.getChoices();

        // Checking choices.
        expect(choices[0]).to.equal(choice0);
        expect(choices[1]).to.equal(choice1);
    });
    
    it("Should win", async function() {
        // Getting test addresses.
        const [owner, addr1] = await ethers.getSigners();

        // Making choices.
        const choice0 = "scissors";
        const suffix0 = "113";
        const choice1 = "paper";
        const suffix1 = "_";

        // Committing and revealing.
        await commitAndReveal(choice0, suffix0, choice1, suffix1, owner, addr1);

        // Checking the winner.
        let winnerResponse = await contractDeployed.getWinner();
        expect(winnerResponse).to.equal(owner.address);
    });
});

// Integration tests.
describe("RPSPlayerContract", function() {
    let playerDeployed;
    
    let rpsDeployed;

    beforeEach(async function() {
         // Preparing RPS smart contract.
         const RPSContract = await hre.ethers.getContractFactory("RPSContract");
         rpsDeployed = await RPSContract.deploy();
         await rpsDeployed.deployed();

        // Preparing player contract.
        const RPSPlayerContract = await hre.ethers.getContractFactory("RPSPlayerContract");
        playerDeployed = await RPSPlayerContract.deploy();

        await playerDeployed.deployed();

        // Providing the address.
        await playerDeployed.provideRPSContractAddress(rpsDeployed.address);
    });

    it("Should commit", async function() {
        await playerDeployed.makeCommitment();

        let hashes = await rpsDeployed.getChoicesHashes();

        let commitment = await playerDeployed.getCommitment();

        // Checking hashes.
        expect(hashes[0]).to.equal(commitment);
    });

    it("Should reveal", async function() {
        // Committing.
        await playerDeployed.makeCommitment();

        // Revealing.
        await playerDeployed.reveal();

        let choices = await rpsDeployed.getChoices();

        // Checking choices.
        expect(choices[0]).to.not.equal("");
    });
});