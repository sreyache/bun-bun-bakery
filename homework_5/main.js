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

function flavorSelection() {
  if (document.getElementById(this) == "original-cart-button") {
    return "10";
  }
}

function addItemToCart() {
  //add object to the cart panel
  var glaze = glazeSelection()
  var flavor = flavorSelection()
  var newOrderItem = new CartItem(flavor, glaze);
  orderList.push(newOrderItem);
  //update cart total
  console.log(orderList)
  //open cart panel
  openNav()
}



// function cartOnLoad


// function orderItem (flavor, glaze, quantity){
//   // this.flavor = flavor;
//   this.glaze = glazeSelection();
//   // this.quantity = quantity;
// }


// function flavorSelection() {
//   var flavor_selection = 
// }

// function glazeSelection() {
//   var glaze_selection = document.getElementById("original-glaze");
//   var glaze_answer = glaze_selection.value;
//   return glaze_answer;
// }

// function changeQuantityState() {
// }

// add item to cart 
// function addProductToCart() {
//     //open cart panel
//     openNav()

//     //add object to the cart panel

//     //update cart total=
// }

// NEW CART ORDER OPTIONS 

// var added_to_cart_products_list = "Your cart currently has no items";

// function orderItem (thumbnail, flavor, glaze, quantity)
// {
//   this.thumbail = 
//   this.flavor = flavor;
//   this.glaze = glaze;
//   if (quantity ==
//   this.quantity = quantity;
// }

// function cartOnLoad() {
  // console.log(added_to_cart_products_list);
