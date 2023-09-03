const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    ganache: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: 'peanut rebuild shy luggage spray proof pond lucky suspect voyage bag wave' // Replace with your actual mnemonic
        },
        providerOrUrl: `https://sepolia.infura.io/v3/${'4289a81dfe4343519e041c173ae4c408'}` // Replace with your Infura API key
      }),
      network_id: 11155111,      // Replace with a unique network ID for your private network
      accounts: [
        {
          privateKey: '0x2bfd04d63ffecf8ec0b18935f3e8cf37844b47d3b5643fc4daf1506ed623e5f4', // Private key of Ganache account 0
          balance: '1000000000000000000000', // Initial balance in wei
          gas: 1000000000,           // Adjust gas limit according to your contract's complexity
          gasPrice: 10000000   // Adjust gas price as needed
        }]
    }
  },
  compilers: {
    solc: {
      version: "0.8.0" // Use the required version of the Solidity compiler
    }
  },
  db: {
    // Truffle DB settings
    enabled: false,
    host: "127.0.0.1",
    adapter: {
      name: "indexeddb",
      settings: {
        directory: ".db"
      }
    }
  }
};
