// === This JavaScript Code is from Shop Index/ Home Page
let carts = document.querySelectorAll(".add-cart");
let products = [
  {
    name: "Book",
    tag: "book",
    price: 20,
    inCart: 0
  },
  {
    name: "Soap",
    tag: "soap",
    price: 20,
    inCart: 0
  },
  {
    name: "DVD",
    tag: "dvd",
    price: 20,
    inCart: 0
  },
  {
    name: "Shirt",
    tag: "shirt",
    price: 20,
    inCart: 0
  },
  {
    name: "Bag",
    tag: "bag",
    price: 20,
    inCart: 0
  },
  {
    name: "Lip Balm",
    tag: "lipbalm",
    price: 20,
    inCart: 0
  },
  {
    name: "Cap",
    tag: "cap",
    price: 20,
    inCart: 0
  },
  {
    name: "Watch",
    tag: "watch",
    price: 20,
    inCart: 0
  },
  {
    name: "Mug",
    tag: "mug",
    price: 20,
    inCart: 0
  },
  {
    name: "Water Bottle",
    tag: "waterbottle",
    price: 20,
    inCart: 0
  },
  {
    name: "Key Chain",
    tag: "keychain",
    price: 20,
    inCart: 0
  },
  {
    name: "Doll",
    tag: "doll",
    price: 20,
    inCart: 0
  }
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    // *** create code to calculate the total price
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  // console.log("The item selected is ", product);
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  // console.log("Inside of setItems function");
  // console.log("My item is ", product);
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  // console.log('My cart items are', cartItems);
  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        cartItems,
        [product.tag]: product
      };
    }
    console.log(cartItems[product.tag]);
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

// *** video part 4/5. Create a function to calculate the total price.
function totalCost(product) {
  // console.log("The item's price is $", product.price);

  // *** create code to update the item price $+
  let cartCost = localStorage.getItem("totalCost");
  console.log("My cartCost is $", cartCost);
  console.log(typeof cartCost);
  if (cartCost != null) {
    cartCost = parseInt(cartCost); // *** code to convert a string into a
									// number
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

// === Video Part 5: This is JavaScript Code for Shop Cart page, buy & cancel
// items below
function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  
  let productContainer = document.querySelector(".products");
      let cartCost = localStorage.getItem("totalCost");
  
  console.log(cartItems);
  if (cartItems && productContainer) {
        productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
         productContainer.innerHTML += `
         <div class="product"> 
         <i class="fa-solid fa-circle-xmark"></i> 
         <img src="${item.tag}">         
         <span> ${item.name} </span>         
         </div> 
         <div class="price"> $${item.price},00 </div>
         <div class="quantity"> 
         <i class="fa-solid fa-minus"></i>
         <span> ${item.inCart} </span>         
         <i class="fa-solid fa-plus"></i>
         </div>         
         <div class="total">
         $${item.inCart * item.price},00 
         </div>             
         `;      
    });
    
    productContainer.innerHTML += `
    <div class="basketTotalContainer"> 
    <h4 class="basketTotalTitle"> Cart Total </h4>
    
    <h4 class="basketTotal"> $${cartCost},00 </h4>
    
    </div>
    
    `;
    
  } 
  
}


onLoadCartNumbers(); // This code is part of JS in Shop Home Page

displayCart(); 


