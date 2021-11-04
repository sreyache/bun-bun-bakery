// NEW CART TRIGGER OPTIONS 


// MASTER VARIABLE
let orderList = [];
let savedCart = JSON.parse(localStorage.getItem('orderList'));
if(savedCart != null){
  orderList = savedCart;
}
else{
  orderList = []; 
}
console.log(orderList);

/* Set the width of the sidebar to 500px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "500px";
  console.log("cart-open");
  if (orderList.length == 0){
    var element = document.createElement('p');
    element.textContent = "Your cart is currently empty."
    element.className += "placeholder-text"
    
    document.getElementById("cart-products").appendChild(element);
  }
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  console.log("cart-close");
}

// CREATING ITEMS TO ADD TO THE CART


// var cartEmpty = True;

function CartItem(flavor, glaze) {
  this.flavor = flavor;
  this.glaze = glaze;
  this.image = "Assets/shop-thumbnail.png";
  this.image_alt = "Cinnamon Roll Thumbnail";
}


function glazeSelection(glazeId) {
  var temp = document.getElementsByClassName("select-glaze");
  var glaze_selection = temp[glazeId];
  var glaze_answer = glaze_selection.value;
  return glaze_answer;
}

function addItemToCart(flavor, glazeId) {
  //add object to the cart panel
  var glaze = glazeSelection(glazeId);
  var flavor = flavor;
  var newOrderItem = new CartItem(flavor, glaze);
  orderList.push(newOrderItem);
  addProductCardToCart(glaze, flavor);
  
  console.log(orderList);
  
  openNav();

  localStorage.setItem("orderList", JSON.stringify(orderList));
}

function addProductCardToCart(glaze, flavor) {
  var element = document.createElement('div');
  element.id = "order-" + orderList.length; 
  element.className += "add-product-to-cart";

  document.getElementById("cart-products").appendChild(element);

  var order_flavor = document.createElement('h3');
  order_flavor.textContent = "Flavor: " + flavor;

  document.getElementById(element.id).appendChild(order_flavor);

  var order_glaze = document.createElement('p');
  order_glaze.textContent = "Glaze: " + glaze;

  document.getElementById(element.id).appendChild(order_glaze);

  let newButton = document.createElement('button');
  newButton.id = "remove-button-" + orderList.length;
  newButton.innerText = 'remove';
  document.getElementById(element.id).appendChild(newButton);
  document.getElementById(newButton.id).onclick = removeProductFromCart;
}

function removeProductFromCart() {
  console.log("remove-item");
  console.log(this.id);
  order_div = this.parentNode;
  order_div.remove()
  //remove the cartItem from the master cart list
  removeIndex = this.id.slice(-1);
  console.log(removeIndex - 1);
  orderList.splice(removeIndex -1, 1);
  console.log(orderList);

  localStorage.setItem(orderList, JSON.stringify(orderList));
}

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



