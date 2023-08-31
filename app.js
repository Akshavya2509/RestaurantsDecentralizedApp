// Assuming you have the ABI and address of the smart contracts
const restaurantsContractABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "foodItems",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "outlets",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "location",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "rating",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "restaurants",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "location",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_location",
        "type": "string"
      }
    ],
    "name": "addRestaurant",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "restaurantIndex",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_location",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_rating",
        "type": "uint256"
      }
    ],
    "name": "addOutlet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "restaurantIndex",
        "type": "uint256"
      }
    ],
    "name": "getOutletCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "restaurantIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "outletIndex",
        "type": "uint256"
      }
    ],
    "name": "getOutletDetails",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRestaurantCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_restaurantIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_outletIndex",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      }
    ],
    "name": "addFoodItem",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "outletIndex",
        "type": "uint256"
      }
    ],
    "name": "getFoodItemCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "outletIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "itemIndex",
        "type": "uint256"
      }
    ],
    "name": "getFoodItems",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "money",
        "type": "uint256"
      }
    ],
    "name": "checkout",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
const restaurantsContractAddress = '0x62C36469296FF2Db2E045f66e5Be2C15EAc0956C';

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
    <h2 class="restaurant-name">${restaurant.name}</h2>
    <p class="restaurant-location">${restaurant.location}</p>
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
    <h2 class="outlet-name">${outlet[0]}</h2>
    <p class="outlet-location">${outlet[1]}</p>
    <p class="outlet-rating">Rating: ${outlet[2]} stars</p>
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
            <h4 class="food-item-name" style="color: white">${i+1}. Food Item ${i+1}: ${item}</h4>
            <h4 class="food-item-price" style="color:white">   Price: Rs. ${foodItem[1]} /${itemPriceETH} ETH</h4>
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
            <h6 class="food-item-name" style="color: white">${i+1}. Food Item ${i+1}: ${item.name}</h6>
            <h6 class="food-item-name" style="color: white">Price: Rs. ${item.price}/ ${itemPrice} ETH</h6>
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
  const cartPageHeading = document.createElement('h2');
  cartPageHeading.innerText = 'Your Cart';
  mainContent.appendChild(cartPageHeading);

  // Append the cart items UI to the main content
  mainContent.appendChild(cartContainer);
  mainContent.insertBefore(backButton, cartContainer);
  mainContent.insertBefore(backButton, cartPageHeading);
  // Create and append the checkout button
  const checkoutButton = document.createElement('button');
  checkoutButton.className = 'checkout-button';
  checkoutButton.innerText = 'Checkout';
  checkoutButton.onclick = processCheckout;
  mainContent.appendChild(checkoutButton);

  // Clear the current content and append the new content
  document.body.innerHTML = '';
  document.body.appendChild(mainContent);
}

// Function to process the checkout
async function processCheckout() {
  // Perform any necessary actions to complete the checkout
  // For example, you could send a transaction to a blockchain
  // or update inventory in a database
  // After completing the checkout, you might want to clear the cart and update UI
  let totalAmount = 0;
  for(let i = 0; i < cart.length; i ++){
    const item = cart[i];
    totalAmount += item.price;
  }
  let amountTransacted = await restaurantsContract.methods.checkout(totalAmount).call();
  console.log(amountTransacted);
  cart.splice(0, cart.length); // Clear the cart
  count = 0;
  cartContainer.innerHTML = '';
  updateCartUI(); // Update the cart UI
  alert('Wohooo!! Order Placed');
  alert('We recived your transaction amount of ' + totalAmount);
  alert('Remaining balance -> ' + amountTransacted);
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
