// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Restaurants {
    // Restaurant name, address, outlets, and rating
    struct Restaurant {
        string name;
        string location;
        uint[] outletIndices; // Array of indices pointing to outlets
    }

    Restaurant[] public restaurants;
    Outlet[] public outlets; // Array to store all outlets

    function addRestaurant(string memory _name, string memory _location) public {
        uint[] memory emptyOutletIndices; // Initialize an empty array of outlet indices
        restaurants.push(Restaurant(_name, _location, emptyOutletIndices));
    }

    // Outlet
    struct Outlet {
        string name;
        string location;
        uint rating;
        uint[] foodItemIndices; // Array of indices pointing to food items
    }

    function addOutlet(uint restaurantIndex, string memory _name, string memory _location, uint _rating) public {
        require(restaurantIndex < restaurants.length, "Invalid restaurant index");
        
        uint[] memory emptyFoodItemIndices; // Initialize an empty array of food item indices
        outlets.push(Outlet(_name, _location, _rating, emptyFoodItemIndices));
        restaurants[restaurantIndex].outletIndices.push(outlets.length - 1); // Store the index of the new outlet
    }

   function getOutletCount(uint restaurantIndex) public view returns (uint) {
        require(restaurantIndex < restaurants.length, "Invalid restaurant index");
        return restaurants[restaurantIndex].outletIndices.length;
    }

    // Get the details of a specific outlet for a restaurant
    function getOutletDetails(uint restaurantIndex, uint outletIndex) public view returns (string memory, string memory, uint) {
        require(restaurantIndex < restaurants.length, "Invalid restaurant index");
        require(outletIndex < restaurants[restaurantIndex].outletIndices.length, "Invalid outlet index");

        uint outletId = restaurants[restaurantIndex].outletIndices[outletIndex];
        Outlet memory outlet = outlets[outletId];
        
        return (outlet.name, outlet.location, outlet.rating);
    }

    // Get the number of restaurants
    function getRestaurantCount() public view returns (uint) {
        return restaurants.length;
    }
    FoodItem[] public foodItems; // Array to store all food items

    // Add a food item to a specific outlet of a specific restaurant
    function addFoodItem(uint _restaurantIndex, uint _outletIndex, string memory _name, uint _price) public {
        require(_restaurantIndex < restaurants.length, "Invalid restaurant index");
        require(_outletIndex < restaurants[_restaurantIndex].outletIndices.length, "Invalid outlet index");

        uint outletId = restaurants[_restaurantIndex].outletIndices[_outletIndex];
        outlets[outletId].foodItemIndices.push(foodItems.length); // Store the index of the new food item
        
        foodItems.push(FoodItem(_name, _price)); // Add the food item to the foodItems array
    }
    

    function getFoodItemCount(uint outletIndex) public view returns(uint){
        require(outletIndex < outlets.length, "Invalid outlet index");
        return outlets[outletIndex].foodItemIndices.length;
    }

    function getFoodItems(uint outletIndex, uint itemIndex)public view returns(string memory, uint){
        require(outletIndex < outlets.length, "Invalid outlet index");
        return (foodItems[itemIndex].name, foodItems[itemIndex].price);
    }
    uint balance = 10000000000;
    function checkout(uint money)public returns(uint){
        balance = balance - money;
        return balance;
    }

    // Food Item
    struct FoodItem {
        string name;
        uint price;
    }
}