const Restaurants = artifacts.require('Restaurants'); // Replace 'MyContract' with your contract's name

module.exports = function (deployer, network, accounts) {
    // Use the desired Ganache account (accounts[0] in this example)
    const fromAccount = accounts[0];
  
    deployer.deploy(Restaurants, { from: fromAccount });
  };
