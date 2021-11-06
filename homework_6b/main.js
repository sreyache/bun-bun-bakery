
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
function CartItem(flavor, glaze) {
  this.flavor = flavor;
  this.glaze = glaze;
  this.image = "Assets/shop-thumbnail.png";
  this.image_alt = "Cinnamon Roll Thumbnail";
}

/* GLAZE SELECTOR */
function glazeSelection(glazeId) {
  var temp = document.getElementsByClassName("select-glaze");
  var glaze_selection = temp[glazeId];
  var glaze_answer = glaze_selection.value;
  return glaze_answer;
}

/* QUANTITY SELECTOR */


/* ADDING ITEM TO THE ORDER LIST */
function addItemToCart(flavor, glazeId) {
  var glaze = glazeSelection(glazeId);
  var flavor = flavor;
  var newOrderItem = new CartItem(flavor, glaze);
  
  orderList.push(newOrderItem);
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
  document.getElementById(newButton.id).onclick = removeProductFromCart;
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
  document.getElementById(newButton.id).onclick = removeProductFromCart;

  return newItem;
}

/* CLICK ON REMOVE BUTTON TO REMOVE FROM DIV */
function removeProductFromCart() {
  order_div = this.parentNode;
  order_div.remove()
  //remove the cartItem from the master cart list
  removeIndex = this.id.slice(-1);
  
  orderList.splice(removeIndex -1, 1);
  localStorage.setItem('orderList', JSON.stringify(orderList));
  
  console.log("item-removed");
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
