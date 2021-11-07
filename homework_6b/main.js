
/* INITAL CHECK TO LOCAL STORAGE */
let orderList = [];
let savedCart = JSON.parse(localStorage.getItem('orderList'));
if(savedCart != null){
  orderList = savedCart;
}
else{
  orderList = []; 
}

console.log(orderList.length);

/* ONLOAD FILL THE CART WITH ITEMS */
function fillCart() {
  for (let i = 0; i < orderList.length; i++) {
    element = createCartItem(orderList[i], i+1);
    document.getElementById("cart-products").appendChild(element);
    console.log("item-added");
  }
  console.log("cart-filled");
}

/* PLACEHOLDER ELEMENT FOR EMPTY CART */
var cartEmptyText = document.createElement('p');
cartEmptyText.textContent = "Your cart is currently empty."
cartEmptyText.className += "placeholder-text";

/* OPEN NAVIGATION */
function openNav() {
  document.getElementById("mySidepanel").style.width = "500px";
  console.log("cart-open");
}

/* CLOSE CART */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  console.log("cart-close");
}

/* CART ITEM CREATOR */
function CartItem(flavor, glaze, quantity) {
  this.flavor = flavor;
  this.glaze = glaze;
  this.quantity = quantity;
  this.image = "Assets/shop-thumbnail.png";
  this.image_alt = "Cinnamon Roll Thumbnail";
}

/* QUANTITY VALUE FINDER */
function quantitySelection(buttonId) { 
  if (buttonId == 0) {return document.querySelector('input[name="radio1"]:checked').value;}
  else if (buttonId == 1) {return document.querySelector('input[name="radio2"]:checked').value;}
  else if (buttonId == 2) {return document.querySelector('input[name="radio3"]:checked').value;}
  else if (buttonId == 3) {return document.querySelector('input[name="radio4"]:checked').value;}
  else if (buttonId == 4) {return document.querySelector('input[name="radio5"]:checked').value;}
  else if (buttonId == 5) {return document.querySelector('input[name="radio6"]:checked').value;}
}

/* FLAVOR VALUE FINDER */
function flavorSelection(buttonId) {
  if (buttonId == 0) {return "Original";}
  else if (buttonId == 1) {return "Blackberry";}
  else if (buttonId == 2) {return "Caramel";}
  else if (buttonId == 3) {return "Walnut";}
  else if (buttonId == 4) {return "Original (Gluten Free)";}
  else if (buttonId == 5) {return "Pumpkin Spice";}
}

/* GLAZE VALUE FINDER */
function glazeSelection(buttonId) {
  var temp = document.getElementsByClassName("select-glaze");
  var glaze_selection = temp[buttonId];
  var glaze_answer = glaze_selection.value;
  return glaze_answer;
}

/* ADD TO CART BUTTON */
function addToCart(buttonId) { 

  //FINDING ORDER ITEM INFORMATION
  var glaze = glazeSelection(buttonId);
  var quantity = quantitySelection(buttonId);
  var flavor = flavorSelection(buttonId);

  console.log(quantitySelection(buttonId));
  console.log(flavorSelection(buttonId));
  console.log(glazeSelection(buttonId));
  
  //CREATE NEW ITEM
  newItem =  new CartItem(flavor, glaze, quantity);
  //ADD ITEM TO ORDERLIST
  orderList.push(newItem);
  //UPATE LOCAL STORAGE WITH LIST
  localStorage.setItem("orderList", JSON.stringify(orderList));

  addProductCardToCart(glaze, flavor);
  
  console.log(orderList);
  openNav();
}

/* ADD THE PRODUCT TO THE CART DIV */
function addProductCardToCart(glaze, flavor) {
  var element = document.createElement('div');
  element.className = "cart-item";
  element.id = "order-" + orderList.length; 
  
  document.getElementById("cart-products").appendChild(element);

  var order_flavor = document.createElement('h3');
  order_flavor.textContent = "Flavor: " + flavor;

  document.getElementById(element.id).appendChild(order_flavor);

  var order_glaze = document.createElement('p');
  order_glaze.textContent = "Glaze: " + glaze;

  document.getElementById(element.id).appendChild(order_glaze);

  let newButton = document.createElement('button');
  newButton.classList.add("remove-cart-item");
  newButton.id = "remove-button-" + orderList.length;
  newButton.innerText = 'remove';
  document.getElementById(element.id).appendChild(newButton);
  document.getElementById(newButton.id).onclick = removeProduct;
}

/* CREATING A DIV FOR A CART ITEM */
function createCartItem(cartItem, i) {
  //creates a div for the order item
  var newItem = document.createElement('div');
  newItem.id = "order-" + i; 
  newItem.className = "cart-item-" + orderList.length;
  document.getElementById("cart-products").appendChild(newItem);

  //add h3 for flavor of the order item 
  var order_flavor = document.createElement('h3');
  order_flavor.textContent = "Flavor: " + cartItem.flavor;
  document.getElementById(newItem.id).appendChild(order_flavor);

  //add p for the glaze of the order item
  var order_glaze = document.createElement('p');
  order_glaze.textContent = "Glaze: " + cartItem.glaze;
  document.getElementById(newItem.id).appendChild(order_glaze);

  //add the quantity of the order

  //add the remove button
  let newButton = document.createElement('button');
  newButton.classList.add("remove-cart-item");
  newButton.id = "remove-button-" + i;
  newButton.innerText = 'remove';
  document.getElementById(newItem.id).appendChild(newButton);
  document.getElementById(newButton.id).onclick = removeProduct;

  return newItem;
}

/* CLICK ON REMOVE BUTTON TO REMOVE FROM DIV */
function removeProduct() {
  order_div = this.parentNode;
  order_div.remove()
  
  //remove the cartItem from the master cart list
  removeIndex = this.id.slice(-1);
  
  orderList.splice(removeIndex-1, 1);
  localStorage.setItem('orderList', JSON.stringify(orderList));
  
  console.log("item-removed");
  console.log(orderList.length);
}


/* PRODUCT PAGE -- CHANGE FLAVOR INFORMATION BASED ON SELECTION */
function changeFlavorInformation(flavor) {
  var description = document.getElementById("panel-flavor-description")
  if (flavor == 'original') { 
    description.innerHTML = "Our original roles give you the classic taste of cozy , comfort. We specialize in these rolls. ";
  } else if (flavor == 'gf'){
    description.innerHTML = "Our gluten free rolls might be just right for you!";
  } else if (flavor == 'blackberry'){
    description.innerHTML = "Blackberries fresh from our very own garden. This roll is refreshing and berry good!";
  } else if (flavor == 'caramel'){
    description.innerHTML = "Creamy goodness will takeover you when you try our caramel roll. The sweetest roll on our menu.";
  } else if (flavor == 'walnut'){
    description.innerHTML = "Are you a nutty fan? Well this takes our delicious cinnamon goodness and combines it with some fresh walnuts imported from somewhere important.";
  } else if (flavor == 'pk'){
    description.innerHTML = "Bringing you a taste of the fall through our favorite pumpkin spice roll. Taste the goodness today!";
  }
}
