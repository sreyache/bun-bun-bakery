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

function move_navigation( $navigation, $MQ) {
    if ( $(window).width() >= $MQ ) {
       $navigation.detach();
       $navigation.appendTo('header');
    } else {
       $navigation.detach();
       $navigation.insertAfter('header');
    }
 }

