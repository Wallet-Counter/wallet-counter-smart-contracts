const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WalletCounter contract test cases : ", async function () {

    let firstUser, secondUser, walletCounter;
    const zeroAddress = "0x0000000000000000000000000000000000000000";
    const zeroAmount = "0";
    const validAmount = "1";
    const highAmount = "5";

    before(async () => {
        [firstUser, secondUser] = await ethers.getSigners();
        console.log(`Testing contract with the account: ${firstUser.address}`);
    });

    // Deploy WalletCounter smart contract
    it("Should deploy WalletCounter smart contract", async function () {
        const WalletCounter = await ethers.getContractFactory("WalletCounter");
        walletCounter = await WalletCounter.deploy();
        await walletCounter.deployed();
        console.log("WalletCounter contract deployed at : ", walletCounter.address);
    });

    // getTotalValueAndWalletCounts 4 test cases

    // getTotalValueAndWalletCounts function : positive test
    it("Should return 0 as total value ( sum of all enterd numbers )", async function () {
        const result = await walletCounter.getTotalValueAndWalletCounts();
        expect(result[0]).to.be.equal(zeroAmount);
    });

    // getTotalValueAndWalletCounts function : positive test
    it("Should return 0 as total no. of unique wallets who entered values", async function () {
        const result = await walletCounter.getTotalValueAndWalletCounts();
        expect(result[1]).to.be.equal(zeroAmount);
    });

    // enterNumber function : negative test
    it("Should revert as function caller is smart contract", async function () {
        expect(walletCounter.connect(walletCounter.address).enterNumber(validAmount)).to.be.revertedWith("Caller is not a valid wallet address");
    });

    // enterNumber function : negative test
    it("Should revert as function caller is zero address", async function () {
        expect(walletCounter.connect(zeroAddress).enterNumber(validAmount)).to.be.revertedWith("Caller is not a valid wallet address");
    });

    // enterNumber function : negative test
    it("Should revert as entered amount is 0", async function () {
        expect(walletCounter.connect(firstUser).enterNumber(zeroAmount)).to.be.revertedWith("Entered number must be non-zero");
    });

    // enterNumber function : positive test
    it("Should emit event on successful addition of value 5", async function () {
        const eventToBeEmitted = "NumberEntered";
        const result = await walletCounter.connect(firstUser).enterNumber(highAmount);
        const receipt = await result.wait();
        const events = receipt.events?.filter((x) => { return x.event === eventToBeEmitted });
        expect(events[0].event).to.be.equal(eventToBeEmitted);
    });

    // getTotalValueAndWalletCounts function : positive test
    it("Should return 5 as total value ( sum of all enterd numbers )", async function () {
        const result = await walletCounter.getTotalValueAndWalletCounts();
        expect(result[0]).to.be.equal(highAmount);
    });

    // getTotalValueAndWalletCounts function : positive test
    it("Should return 1 as total no. of unique wallets who entered values", async function () {
        const result = await walletCounter.getTotalValueAndWalletCounts();
        expect(result[1]).to.be.equal(validAmount);
    });

    // enterNumber function : positive test
    it("Should emit event on successful addition of value 10 ", async function () {
        const eventToBeEmitted = "NumberEntered";
        const result = await walletCounter.connect(firstUser).enterNumber("10");
        const receipt = await result.wait();
        const events = receipt.events?.filter((x) => { return x.event === eventToBeEmitted });
        expect(events[0].event).to.be.equal(eventToBeEmitted);
    });

});
