// NEW CART TRIGGER OPTIONS 

/* Set the width of the sidebar to 500px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "500px";
  console.log("cart-open");
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  console.log("cart-close");
}

// CREATING ITEMS TO ADD TO THE CART

var orderList = [];

function CartItem(flavor, glaze) {
  this.flavor = flavor;
  this.glaze = glaze;
  this.image = "Assets/shop-thumbnail.png";
  this.image_alt = "Cinnamon Roll Thumbnail";
}


function glazeSelection() {
    var glaze_selection = document.getElementById("original-glaze");
    var glaze_answer = glaze_selection.value;
    return glaze_answer;
}

function addItemToCart(flavor) {
  //add object to the cart panel
  var glaze = glazeSelection()
  var flavor = flavor;
  var newOrderItem = new CartItem(flavor, glaze);
  orderList.push(newOrderItem);
  
  console.log(orderList)
  
  var element = document.createElement('div');
  element.id = "order-" + orderList.length 

  document.getElementById("cart-products").appendChild(element);

  var order_flavor = document.createElement('h2');
  order_flavor.textContent = "Flavor: " + flavor;

  document.getElementById("order-1").appendChild(order_flavor);

  var order_glaze = document.createElement('p');
  order_glaze.textContent = "Glaze: " + glaze;

  document.getElementById("order-1").appendChild(order_glaze);

  //open cart panel
  openNav()
}

