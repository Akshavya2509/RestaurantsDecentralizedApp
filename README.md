
A PROJECT REPORT
ON
Restaurants Decentralized application
Submitted in partial fulfillment for the requirement of the award of
TRAINING
IN
Blockchain Technology and Web 3.0


Submitted By
Akshavya Aggarwal
(Thapar Institute of Engineering and Technolo)
Under the guidance of
Mr. Amit Mishra








ACKNOWLEDGEMENT
I would like to express my sincere gratitude and heartfelt thanks to Mr. Amit Mishra, my project advisor and guide. It is with his unwavering support and invaluable assistance that I have successfully completed this project report. Throughout the journey, Mr. Mishra provided me with guidance, support, and constructive feedback, diligently correcting any mistakes and helping me navigate challenges. I am truly grateful for his mentorship, and I cannot find words adequate enough to convey my appreciation.
My family deserves special recognition for their boundless patience, unwavering encouragement, and unwavering understanding throughout the duration of this project.
I am indebted to my friends for their unwavering moral support, engaging discussions, and invaluable feedback. Your diverse perspectives have enriched the project's development, and I appreciate the camaraderie that made this journey more enjoyable. I am thankful for their technical help and guidance in the errors I faced.
Their contributions extended far beyond moral support, and I am deeply appreciative of their unwavering friendship. This project has been a collaborative effort, and the support, mentorship, and encouragement of Mr. Mishra, my family, and my friends have been pivotal in its successful completion.









INTRODUCTION

The Restaurants DAPP represents a fusion of the traditional restaurant industry with the cutting-edge world of decentralized applications and blockchain. At its core, this application seeks to revolutionize the way people discover, interact with, and engage in the world of dining and gastronomy.

In recent years, the restaurant industry has witnessed significant transformation, with digital platforms and apps becoming integral in the way patrons discover new eateries, make reservations, and share culinary experiences. Simultaneously, blockchain technology has gained prominence for its capacity to bring transparency, security, and efficiency to various sectors, including finance, supply chain management, and healthcare.
Our project seeks to leverage the potential of blockchain technology to address several key challenges and opportunities within the restaurant industry

PROBLEM STATEMENT
	Build a Restaurant Food Ordering DApp using Solidity and Ethereum smart contract.

TECHNOLOGY AND CONCEPTS

3.1 Solidity

Solidity is a high-level programming language specifically designed for writing smart contracts on blockchain platforms, with Ethereum being the most prominent example. It was developed to make it easier for developers to create secure and decentralized applications on blockchain networks.
Developers interested in creating decentralized applications (DApps) or blockchain-based solutions often turn to Solidity to create smart contracts that can execute predefined rules and logic autonomously on the blockchain. Solidity's popularity and maturity make it a valuable tool for building a wide range of blockchain applications, from token contracts to decentralized finance (DeFi) platforms.

.     3.2  Web development
	Web development is the process of creating and maintaining websites and web applications for the internet. It encompasses a wide range of activities, from designing the user interface and user experience (UI/UX) to writing the code that powers the website's functionality and interactivity. Web developers use various programming languages, frameworks, and tools to build websites tailored to specific needs and purposes.
Web development is a dynamic field that continues to evolve with new technologies and trends. Successful web developers stay up-to-date with the latest tools and best practices to create modern, secure, and user-friendly websites and web applications.
IMPLEMEMTATION

4.1 Home Page



4.2 Outlet page




4.3 Food-items Page



4.4 Cart




4.5 Order placed




RestaurantsDAPP code files:

4.2.1 Restaurants.sol

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


4.2.2 App.js

// Assuming you have the ABI and address of the smart contracts
const restaurantsContractABI = /* Contract ABI */;
const restaurantsContractAddress = '/*Contract address*/';

// Connect to the Ethereum network using Web3.js
const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

// Get the instance of the smart contract
const restaurantsContract = new web3.eth.Contract(restaurantsContractABI, restaurantsContractAddress);

// Function to fetch restaurant data from the smart contract
// Function to fetch restaurant data from the smart contract
// Create a link element
var link = document.createElement('link');

// Set the attributes of the link element
link.rel = 'icon';
link.type = 'image/ico';
link.href = 'favicon.ico';

// Append the link element to the head section of the document
document.head.appendChild(link);

async function fetchRestaurants() {
  try {
    const restaurantCount = await restaurantsContract.methods.getRestaurantCount().call();
    console.log("restaurants "+restaurantCount);
    for (let i = 0; i < restaurantCount; i++) {
      const restaurant = await restaurantsContract.methods.restaurants(i).call();
      if (restaurant.name && restaurant.location) {
        const restaurantCard = createRestaurantCard(restaurant, i);
        document.getElementById('restaurantList').appendChild(restaurantCard);
      }
    }
  } catch (error) {
    console.error('Error fetching restaurant count:', error);
  }
}

// Function to create a restaurant card
function createRestaurantCard(restaurant, restaurantId) {
  const card = document.createElement('div');
  card.className = 'restaurant-card';
  card.innerHTML = `
    <h2 class="restaurant-name" style="font-family: Snyder">${restaurant.name}</h2>
    <p class="restaurant-location" style="font-family: Snyder">${restaurant.location}</p>
  `;
  card.addEventListener('click', () => {
    showOutletPage(restaurantId);
  });
  return card;
}

// Function to show the outlet page of a specific restaurant
async function showOutletPage(restaurantId) {
  try {
    const outletCount = await restaurantsContract.methods.getOutletCount(restaurantId).call();
    // console.log("outlets "+outletCount);
    if (outletCount > 0) {
      const outletList = document.createElement('div');
      outletList.className = 'outlet-list';

      for (let i = 0; i < outletCount; i++) {
        const outletDetails = await restaurantsContract.methods.getOutletDetails(restaurantId, i).call();
        console.log(outletDetails);
        const outletCard = createOutletCard(restaurantId, outletDetails, i);
        outletList.appendChild(outletCard);
      }

      const container = createPageContainer();
      container.appendChild(outletList);

      const backButton = createBackButton(showHomePage);
      container.appendChild(backButton);

      document.body.innerHTML = '';
      document.body.appendChild(container);

      // Attach click event handlers to outlet cards
      // const outletCards = document.getElementsByClassName('outlet-card');
      // Array.from(outletCards).forEach((outletCard, index) => {
      //   outletCard.addEventListener('click', async () => {
      //     const outletDetails = await restaurantsContract.methods.getOutletDetails(restaurantId, index).call();
      //     showFoodItemsPage(outletDetails);
      //   });
      // });
    } else {
      console.log('No outlets available for this restaurant.');
    }
  } catch (error) {
    console.error('Error fetching outlet count:', error);
  }
}

// Function to create an outlet card
function createOutletCard(resId, outlet, outletId) {
  const card = document.createElement('div');
  card.className = 'outlet-card';
  card.innerHTML = `
    <h2 class="outlet-name"style="font-family: Snyder">${outlet[0]}</h2>
    <p class="outlet-location"style="font-family: Snyder">${outlet[1]}</p>
    <p class="outlet-rating"style="font-family: Snyder">Rating: ${outlet[2]} stars</p>
  `;
  card.addEventListener('click', () => {
    showFoodItemsPage(resId, outlet, outletId);
  });
  return card;
}

// Function to create a container for pages
function createPageContainer() {
  const container = document.createElement('div');
  container.className = 'container';
  return container;
}

// Function to create a back button
function createBackButton(clickHandler) {
  const backButton = document.createElement('button');
  backButton.innerText = 'Back';
  backButton.addEventListener('click', clickHandler);
  return backButton;
}



// Function to show the food items page of a specific outlet
async function showFoodItemsPage(resId, outlet, outletId) {
    const foodItemsList = document.createElement('div');
    foodItemsList.className = 'food-item-list';
    const itemCount = await restaurantsContract.methods.getFoodItemCount(outletId).call();
    for (let i = 0; i < itemCount; i++) {
        const foodItem = await restaurantsContract.methods.getFoodItems(outletId, i).call();
        const item = foodItem[0];
        const itemPriceETH = foodItem[1] * 0.0000073;
        const listItem = document.createElement('div');
        listItem.className = 'food-item';
        listItem.innerHTML = `
            <h4 class="food-item-name" style="color: white; font-family: Snyder">${i+1}. Food Item ${i+1}: ${item}</h4>
            <h4 class="food-item-price" style="color: white; font-family: Snyder">   Price: Rs. ${foodItem[1]} /${itemPriceETH} ETH</h4>
            <button class="add-button" onclick="addToCart('${item}', ${foodItem[1]})">Add to Cart</button>
        `;
        foodItemsList.appendChild(listItem);
    }

    const container = document.createElement('div');
    container.className = 'container';
    container.appendChild(foodItemsList);

    // Add a back button to navigate back to the outlet page
    const backButton = document.createElement('button');
    backButton.innerText = 'Back';
    backButton.onclick = () => {
        showOutletPage(resId);
    };
    container.insertBefore(backButton, foodItemsList);

    document.body.innerHTML = '';
    document.body.appendChild(container);

    // Display the cart icon
    const cartIcon = document.createElement('div');
    cartIcon.className = 'cart-icon';
    cartIcon.innerHTML = `
        <button id="cart-button">Cart</button>
    `;
    container.appendChild(cartIcon);
    const button = document.getElementById("cart-button");

    button.addEventListener('click', () => {showCartPage(resId, outlet, outletId)});

}


// Function to show the home page
function showHomePage() {
    location.reload(); // Reload the page to show the home page again
}

// Cart to store selected items
const cart = [];
let count = 0;
const cartContainer = document.createElement('div');
// Function to add items to the cart
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    count = count + 1;
    updateCartUI(count);
}

// Function to update the cart UI
function updateCartUI(count) {
    const cartItems = document.createElement('div');
    cartItems.className = 'cart-items';
    console.log(cart);
    console.log(count);
    for (let i = count - 1; i < cart.length; i++) {
        const item = cart[i];
        const itemPrice = item.price * 0.0000073;
        const cartItem = document.createElement('div');
        console.log(itemPrice + " " + item);
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h4 class="food-item-name" style="color: white; font-family: Snyder">${i+1}. Food Item ${i+1}: ${item.name}</h4>
            <h4 class="food-item-name" style="color: white;font-family: Snyder">Price: Rs. ${item.price}/ ${itemPrice} ETH</h4>
        `;
        cartItems.appendChild(cartItem);
    }
    cartContainer.className = 'cart-container';
    cartContainer.appendChild(cartItems);
    // if (cart.length > 0) {
    //     const buyButton = document.createElement('button');
    //     buyButton.className = 'buy-button';
    //     buyButton.innerText = 'Buy';
    //     buyButton.onclick = showCartPage;
    //     cartContainer.appendChild(buyButton);
    // }
}

function buyItems() {
    // Check if the cart is empty
    if (cart.length === 0) {
        alert('Cart is empty. Please add items to proceed.');
        return;
    }

    // Redirect to payments.html to initiate the payment process
    window.location.href = "payments.html";
}
document.body.appendChild(cartContainer);
// Function to show the cart page
// Function to show the cart page
async function showCartPage(resId, outlet, outletId) {
  const backButton = document.createElement('button');
    backButton.innerText = 'Back';
    backButton.onclick = () => {
        showFoodItemsPage(resId, outlet, outletId);
    };
  // Clear the main content area
  const mainContent = document.createElement('div');
  mainContent.innerHTML = '';
  mainContent.append(backButton);
  
  // Create and append the cart page heading
  const cartPageHeading = document.createElement('div');
  cartPageHeading.innerHTML = `
        <h2 style=" font-family: Snyder">Your Cart</h2>
  `;
  mainContent.appendChild(cartPageHeading);

  // Append the cart items UI to the main content
  mainContent.appendChild(cartContainer);
  mainContent.insertBefore(backButton, cartContainer);
  mainContent.insertBefore(backButton, cartPageHeading);
  // Create and append the checkout button
  const checkoutButton = document.createElement('button');
  checkoutButton.style.backgroundColor = "#333";
  checkoutButton.className = 'checkout-button';
  checkoutButton.innerHTML = `<p style="font-family: Snyder; color: white">Checkout</p>`;
  checkoutButton.onclick = processCheckout;
  mainContent.appendChild(checkoutButton);

  // Clear the current content and append the new content
  document.body.innerHTML = '';
  document.body.appendChild(mainContent);
}
let totalAmount = 0;
// Function to process the checkout
async function processCheckout() {
  // Perform any necessary actions to complete the checkout
  // For example, you could send a transaction to a blockchain
  // or update inventory in a database
  // After completing the checkout, you might want to clear the cart and update UI
  let curr_transaction_amount = 0;
  for(let i = 0; i < cart.length; i ++){
    const item = cart[i];
    curr_transaction_amount += item.price;
  }
  totalAmount += curr_transaction_amount;
  // totalAmount *= 0.0000073;
  let amountTransacted = await restaurantsContract.methods.checkout(totalAmount).call();
  console.log(amountTransacted);
  cart.splice(0, cart.length); // Clear the cart
  count = 0;
  cartContainer.innerHTML = '';
  updateCartUI(); // Update the cart UI
  const yay = document.createElement('div');
  yay.className = 'check-out';
        yay.innerHTML = `
            <h4 style="color: white; font-family: Snyder">Wohooo!!! Order successfully Placed 🎉🎉</h4>
            <h4 style="color: white;font-family: Snyder"> We have recieved your order amount of ${curr_transaction_amount}</h4>
            <h4 style="color: white;font-family: Snyder"> Remaining balance in your account is ${amountTransacted}</h4>
        `;

        const backButton = createBackButton(showHomePage);

    const checkoutPage = document.createElement('div');
    checkoutPage.appendChild(backButton);
    checkoutPage.appendChild(yay);
    document.body.innerHTML = ``;
    document.body.appendChild(checkoutPage);
}


// Function to show the payments page
function showPaymentsPage() {
    window.location.href = "payments.html";
}

// Function to pay with wallet
function payWithWallet() {
    // Implement logic to connect to the user's wallet and initiate the payment process
    // For example, using MetaMask or other Ethereum wallet providers
    alert('Payment with Wallet initiated.');
    clearCart();
}

// Function to pay on delivery
function payOnDelivery() {
    // Implement logic for pay on delivery option
    alert('Payment on Delivery selected.');
    clearCart();
}

// Function to clear the cart
function clearCart() {
    cart.length = 0;
    updateCartUI();
}

// Function to toggle between light and dark mode (placeholder for now)
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Fetch restaurants when the page loads
fetchRestaurants();






SYSTEM TESTING

System testing is a critical phase in the development and deployment of the Restaurant Decentralized Application (DApp). It serves the purpose of evaluating the entire system's compliance with specified requirements and ensures that the application functions seamlessly as a whole. System testing is essential to validate the behavior, performance, and overall expectations of the customer within the context of the Functional Requirement Specification (FRS) and System Requirement Specification (SRS). Below, we outline the types of tests that should be included in the system testing phase for the Restaurant DApp:

Graphical User Interface Testing: Verify that the user interface is intuitive, user-friendly, and visually appealing. Ensure that all elements and controls are functional and responsive.
Usability Testing: Evaluate the DApp's overall user experience. Check if it meets the needs and expectations of both restaurant owners and customers. Assess the ease of navigation and task completion.

Performance Testing: Measure and optimize the DApp's performance under various conditions. Test its responsiveness, speed, and resource consumption to ensure it can handle a high volume of concurrent users.

Compatibility Testing: Ensure the DApp works seamlessly across different web browsers, devices, and operating systems. Verify that it provides a consistent experience regardless of the user's choice of platform.

Error Handling Testing: Validate the DApp's ability to gracefully handle errors and exceptions. Test scenarios where inputs are incorrect, servers are unavailable, or other unexpected situations occur.

Load Testing: Assess how the DApp performs under heavy loads. Determine its capacity and scalability by simulating a large number of concurrent users and transactions.

Volume Testing: Evaluate the DApp's ability to handle a substantial amount of data, such as a vast menu, extensive customer orders, or a large number of restaurants and outlets.

Stress Testing: Push the DApp to its limits to identify potential failure points and weaknesses. Test scenarios where system resources are exhausted or overloaded.

Security Testing: Identify and address security vulnerabilities, including data breaches, unauthorized access, and potential threats to user information or transactions.

Scalability Testing: Verify that the DApp can easily adapt to increased demands by adding more resources or scaling horizontally.
Sanity Testing: Perform quick, preliminary tests to ensure that the most crucial functions of the DApp are working as expected before more in-depth testing.

Smoke Testing: Conduct a set of tests to assess whether the DApp is stable enough for further testing. These tests are often run after significant code changes or updates.

Exploratory Testing: Allow testers to explore the DApp freely and use their creativity to uncover defects or issues not covered by other testing types.

Ad Hoc Testing: Conduct unstructured testing to simulate real-world scenarios and user behavior, aiming to find unexpected issues.

Regression Testing: Ensure that new updates or features do not introduce defects into previously tested areas of the DApp.

Reliability Testing: Assess the DApp's reliability by subjecting it to extended periods of operation to identify potential stability issues.

Installation Testing: Test the installation process of the DApp on various platforms to ensure a smooth setup for users.

Maintenance Testing: Ensure that updates, patches, and maintenance activities do not disrupt the DApp's functionality.

Recovery Testing and Failover Testing: Simulate system failures and recovery processes to ensure data integrity and minimal downtime.

Accessibility Testing: Verify compliance with accessibility standards such as the Americans with Disabilities Act (ADA) and web accessibility guidelines to ensure the DApp is usable by individuals with disabilities.

System testing for the Restaurant Decentralized Application is a comprehensive process that guarantees the application's reliability, security, and performance. By conducting these various tests, we can confidently ensure that the Restaurant DApp will provide a seamless and secure experience for restaurant owners and customers alike.




LIMITATION AND FUTURE SCOPE

This software has limited functionality like:
Cost: Deploying and using DApps can be expensive due to gas fees
User Experience: DApps can be challenging for non-technical users. The need for wallets, private keys, and gas fees can create barriers to entry.
Data Privacy: Storing customer data on the blockchain raises privacy concerns. DApps need to implement robust privacy measures and comply with data protection laws

This software has lots of future scope like:
Tokenization: Tokenization of restaurant loyalty programs and rewards can be a future direction. Customers can earn and redeem tokens for discounts, free meals, or other incentives
Online Ordering and Delivery: DApps can enhance online ordering and food delivery services. Smart contracts can automate the order-to-delivery process and reduce the need for intermediaries.

CONCLUSION

In conclusion, the development of the Restaurants Decentralized Application (DApp) represents a significant step forward in revolutionizing the restaurant industry. This project has successfully leveraged blockchain technology and smart contracts to create a transparent, efficient, and secure platform for both restaurant owners and customers.
BIBLIOGRAPHY
Nakamoto, S. (2008). "Bitcoin: A Peer-to-Peer Electronic Cash System." Retrieved from https://bitcoin.org/bitcoin.pdf

Solidity Documentation. (n.d.). Retrieved from https://soliditylang.org/docs/

OpenZeppelin. (n.d.). "OpenZeppelin Contracts." Retrieved from https://openzeppelin.com/contracts/

Truffle Suite. (n.d.). "Truffle Suite - Your Ethereum Swiss Army Knife." Retrieved from https://www.trufflesuite.com/

Web3.js Documentation. (n.d.). Retrieved from https://web3js.readthedocs.io/en/v1.5.2/


Pressman, R. S. (2014). "Software Engineering: A Practitioner's Approach." McGraw-Hill Education.



# RestaurantsDecentralizedApp
