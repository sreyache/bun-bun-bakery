// NEW CART TRIGGER OPTIONS 

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

var orderList = [];
// var cartEmpty = True;

function CartItem(flavor, glaze) {
  this.flavor = flavor;
  this.glaze = glaze;
  this.image = "Assets/shop-thumbnail.png";
  this.image_alt = "Cinnamon Roll Thumbnail";
}


function glazeSelection(glazeId) {
  var temp = document.getElementsByClassName("select-glaze")  
  var glaze_selection = temp[glazeId];
  var glaze_answer = glaze_selection.value;
  return glaze_answer;
}

function addItemToCart(flavor, glazeId) {
  //add object to the cart panel
  var glaze = glazeSelection(glazeId)
  var flavor = flavor;
  var newOrderItem = new CartItem(flavor, glaze);
  orderList.push(newOrderItem);
  addProductCardToCart(glaze, flavor);
  
  console.log(orderList)
  
  openNav()
}

function addProductCardToCart(glaze, flavor) {
  var element = document.createElement('div');
  element.id = "order-" + orderList.length 
  element.className += "add-product-to-cart"

  document.getElementById("cart-products").appendChild(element);

  var order_flavor = document.createElement('h3');
  order_flavor.textContent = "Flavor: " + flavor;

  document.getElementById(element.id).appendChild(order_flavor);

  var order_glaze = document.createElement('p');
  order_glaze.textContent = "Glaze: " + glaze;

  document.getElementById(element.id).appendChild(order_glaze);
}

