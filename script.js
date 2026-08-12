let cart = [];
let total = 0;


// Add food to cart

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total += price;

    updateCart();

    alert(name + " added to your order!");
}


// Update cart

function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

    } else {

        cart.forEach(function(item, index) {

            const div = document.createElement("div");

            div.className = "cart-item";

            div.innerHTML = `
                <span>${item.name}</span>
                <span>Rs. ${item.price}</span>
            `;

            cartItems.appendChild(div);

        });
    }

    totalElement.textContent = total;
}


// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Please add something to your order first.");

    } else {

        alert(
            "Thank you for your order! Your total is Rs. "
            + total
        );

    }
}


// Scroll to menu

function scrollToMenu() {

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });

}


// Scroll to contact

function scrollToContact() {

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

}


// Contact form

function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been sent."
    );

    event.target.reset();

}