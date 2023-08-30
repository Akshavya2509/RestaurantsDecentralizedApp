const FoodItems = artifacts.require("FoodItems");
const Restaurants = artifacts.require("Restaurants");

module.exports = function (deployer) {
  deployer.deploy(FoodItems, Restaurants.address);
};
