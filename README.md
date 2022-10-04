# Wallet Counter

## Description:
 
This is a smart contract that allows only wallet addresses to enter some integer values and hold the data as total sum of integers. Only wallet address is allowed to enter numbers and none other like smart contracts can call it. At last one can see total sum of all the integers entered till now and also get total unique wallets that have eneterd the values.

### Important Points :

- Only wallet address can enter number and store it
- Smart contracts are not allowed to enter the number
- Everyone can see the total value
- Gives total unique wallet adddress who entered the number

### Techologies Used:

- Hardhat
- Solidity

### List of Libraries/Framework used:

- Mocha
- Chai
- Ethers

### Directory layout
       
├── contracts                    
├── coverage                    
├── test                   
├── hardhat.config.js             
└── README.md

### How to install and run :

- Run `npm install` to install all dependencies

- Run `npx hardhat compile` to compile all the contracts

- Run `npx hardhat coverage --network localhost` to generate code coverage report

### Run Test Cases :

- Run `npx hardhat test` to execute all the testcases of the contracts
- Run `npx hardhat test test/wallet-counter-test.js` to execute a wallet-counter-test file

### Contracts

| S No. |    Contract Name       |            Mumbai Matic Testnet Address            |
|-------|------------------------|----------------------------------------------------|
|   1   |    WalletCounter       |     0x39A29a015dd54B28Ef290697BdB269d2E5110CCB     |