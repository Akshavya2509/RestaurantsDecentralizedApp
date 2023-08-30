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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
    }]
  const restaurantsContractAddress = '0x8C265F6957404C9258f60B4aba842d2F65273474';
  
  // Connect to the Ethereum network using Web3.js
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
  
  // Get the instance of the smart contract
  const restaurantsContract = new web3.eth.Contract(restaurantsContractABI, restaurantsContractAddress);
  
  // Function to fetch restaurant data from the smart contract
  // Function to fetch restaurant data from the smart contract
  async function fetchRestaurants() {
    try {
      const restaurantCount = await restaurantsContract.methods
        .getRestaurantCount()
        .call();
  
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
    card.onclick = () => {
      showOutletPage(restaurantId);
    };
    return card;
  }
  
  // Function to show the outlet page of a specific restaurant
  async function showOutletPage(restaurantId) {
      const outletCount = await restaurantsContract.methods.getOutletCount(restaurantId).call();
      if (outletCount > 0) {
        const outletList = document.createElement('div');
        outletList.className = 'outlet-list';
  
        for (let i = 0; i < outletCount; i++) {
          const outletDetails = await restaurantsContract.methods.getOutletDetails(restaurantId, i).call();
          const outletCard = createOutletCard(outletDetails);
          outletList.appendChild(outletCard);
        }
  
        const container = document.createElement('div');
        container.className = 'container';
        container.appendChild(outletList);
  
        // Add a back button to navigate back to the home page
        const backButton = document.createElement('button');
        backButton.innerText = 'Back';
        backButton.onclick = showHomePage;
        container.appendChild(backButton);
  
        document.body.innerHTML = '';
        document.body.appendChild(container);
  
        // Loop through the outlet cards and attach click event handlers
        const outletCards = document.getElementsByClassName('outlet-card');
        for (let i = 0; i < outletCards.length; i++) {
          const outletCard = outletCards[i];
          outletCard.onclick = async () => {
            const outletDetails = await restaurantsContract.methods.getOutletDetails(restaurantId, i).call();
            showFoodItemsPage(outletDetails);
          };
        }
      } else {
        console.log('No outlets available for this restaurant.');
      }
  }
  
  
  
  // Function to show the food items page of a specific outlet
  async function showFoodItemsPage(outlet) {
      const foodItemsList = document.createElement('div');
      foodItemsList.className = 'food-item-list';
  
      for (let i = 0; i < outlet.foodItems.length; i++) {
          const foodItem = outlet.foodItems[i];
          const itemPrice = web3.utils.fromWei(foodItem.price, 'ether');
          const listItem = document.createElement('div');
          listItem.className = 'food-item';
          listItem.innerHTML = `
              <span class="food-item-name">${foodItem.name}</span>
              <span class="food-item-price">Price: ${itemPrice} ETH</span>
              <button class="add-button" onclick="addToCart('${foodItem.name}', ${foodItem.price})">Add to Cart</button>
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
          showOutletPage(outlet.restaurant_id);
      };
      container.insertBefore(backButton, foodItemsList);
  
      document.body.innerHTML = '';
      document.body.appendChild(container);
  
      // Display the cart icon
      const cartIcon = document.createElement('div');
      cartIcon.className = 'cart-icon';
      cartIcon.innerHTML = `
          <button class="cart-button" onclick="showCartPage()">Cart</button>
      `;
      container.appendChild(cartIcon);
  }
  
  // Function to show the home page
  function showHomePage() {
      location.reload(); // Reload the page to show the home page again
  }
  
  // Function to create an outlet card
  // Function to create an outlet card
  function createOutletCard(outlet) {
    const card = document.createElement('div');
    card.className = 'outlet-card';
    card.innerHTML = `
        <h2 class="outlet-name">${outlet.name}</h2>
        <p class="outlet-location">${outlet.location}</p>
    `;
  
    // Loop through the outlet's foodItemIndices and retrieve the associated food items
    const foodItemList = document.createElement('ul');
    foodItemList.className = 'food-item-list';
  
    for (let i = 0; i < outlet.foodItemIndices.length; i++) {
        const foodItemIndex = outlet.foodItemIndices[i];
        const foodItem = foodItems[foodItemIndex];
        const itemPrice = web3.utils.fromWei(foodItem.price, 'ether');
        
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="food-item-name">${foodItem.name}</span>
            <span class="food-item-price">Price: ${itemPrice} ETH</span>
            <button class="add-button" onclick="addToCart('${foodItem.name}', ${foodItem.price})">Add to Cart</button>
        `;
  
        foodItemList.appendChild(listItem);
    }
  
    card.appendChild(foodItemList);
    return card;
  }
  
  
  
  // Cart to store selected items
  const cart = [];
  
  // Function to add items to the cart
  function addToCart(itemName, itemPrice) {
      cart.push({ name: itemName, price: itemPrice });
      updateCartUI();
  }
  
  // Function to update the cart UI
  function updateCartUI() {
      const cartContainer = document.getElementById('cartContainer');
      const cartItems = document.getElementById('cartItems');
      cartItems.innerHTML = '';
  
      for (let i = 0; i < cart.length; i++) {
          const item = cart[i];
          const itemPrice = web3.utils.fromWei(item.price, 'ether');
          const cartItem = document.createElement('div');
          cartItem.innerHTML = `
              <span class="cart-item-name">${item.name}</span>
              <span class="cart-item-price">Price: ${itemPrice} ETH</span>
          `;
          cartItems.appendChild(cartItem);
      }
  
      if (cart.length > 0) {
          const buyButton = document.createElement('button');
          buyButton.className = 'buy-button';
          buyButton.innerText = 'Buy';
          buyButton.onclick = showCartPage;
          cartContainer.appendChild(buyButton);
      }
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
  
  // Function to show the cart page
  function showCartPage() {
      window.location.href = "cart.html";
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
  