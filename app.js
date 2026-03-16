console.log("E-Commerce application started");

let cartItems = 0;

function addToCart() {

    cartItems = cartItems + 1;

    document.getElementById("cart").innerText =
    "Items in cart: " + cartItems;

}
