function addToCart() {
    console.log("happy");
}

function glazeSelection() {
    var glaze_selection = document.getElementById("original-glaze");
    var glaze_answer = glaze_selection.value;
    console.log(glaze_answer);
}

function changeQuantityState() {
}

// NEW CART TRIGGER OPTIONS 

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


// add item to cart 
function addProductToCart() {
    //open cart panel
    openNav()

    //add object to the cart panel

    //update cart total=
}