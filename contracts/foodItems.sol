// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./restaurants.sol";

contract FoodItems {
    struct Item {
        string name;
        uint price;
    }

    // Enum to represent the food item categories (Veg, NonVeg, Egg)
    enum Category { Veg, NonVeg, Egg }

    // Enum to represent the type of meal (Main Course or Starters)
    enum MealType { MainCourse, Starters }

    mapping(Category => mapping(MealType => Item[])) public items;

    // Address of the deployed Restaurants contract
    address private restaurantsAddress;
    Restaurants private restaurantsContract;

    constructor(address _restaurantsAddress) {
        restaurantsAddress = _restaurantsAddress;
        restaurantsContract = Restaurants(_restaurantsAddress);
    }

    function addItem(
        Category _category,
        MealType _type,
        string memory _name,
        uint _price
    ) public {
        // Add the food item to the specified category and type
        items[_category][_type].push(Item(_name, _price));
    }

    // Function to get the number of food items for a specific category and type
    function getItemCount(Category _category, MealType _type) public view returns (uint) {
        return items[_category][_type].length;
    }

    // Function to get the details of a specific food item for a category and type
    function getItemDetails(Category _category, MealType _type, uint _index)
        public
        view
        returns (string memory, uint)
    {
        require(_index < items[_category][_type].length, "Invalid item index");
        Item memory item = items[_category][_type][_index];
        return (item.name, item.price);
    }

    // Function to add a food item to a specific outlet of a specific restaurant
    function addFoodItem(
        uint _restaurantIndex,
        uint _outletIndex,
        Category _category,
        MealType _type,
        uint _itemIndex
    ) public {
        require(_restaurantIndex < restaurantsContract.getRestaurantCount(), "Invalid restaurant index");
        require(_outletIndex < restaurantsContract.getOutletCount(_restaurantIndex), "Invalid outlet index");
        require(_itemIndex < items[_category][_type].length, "Invalid item index");

        // Get the food item details
        (string memory itemName, uint itemPrice) = getItemDetails(_category, _type, _itemIndex);

        // Add the food item to the specified outlet of the restaurant in the Restaurants contract
        restaurantsContract.addFoodItem(_restaurantIndex, _outletIndex, itemName, itemPrice);
    }
}
