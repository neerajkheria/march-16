console.log("E-Commerce application started");

let totalCartItems = 0;

function addToCart() {

    totalCartItems = totalCartItems + 1;

    document.getElementById("cart").innerText =
    "Items in cart: " + totalCartItems;

}
