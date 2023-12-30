// app.js
// This is a simplified JavaScript file for demonstration purposes.

// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // ... Add more products
  ];
  
  // Sample shopping cart data
  let shoppingCart = [];
  
  // Function to display products
  function displayProducts() {
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '';
  
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productContainer.appendChild(productElement);
    });
  }
  
  // Function to add a product to the shopping cart
  function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
      shoppingCart.push(selectedProduct);
      displayShoppingCart();
    }
  }
  
  // Function to display the shopping cart
  function displayShoppingCart() {
    const cartContainer = document.querySelector('.shopping-cart');
    cartContainer.innerHTML = '';
  
    shoppingCart.forEach(product => {
      const cartItem = document.createElement('div');
      cartItem.innerHTML = `
        <p>${product.name} - $${product.price}</p>
      `;
      cartContainer.appendChild(cartItem);
    });
  }
  
  // Initial setup
  displayProducts();

  // Function to display trending products
  
  