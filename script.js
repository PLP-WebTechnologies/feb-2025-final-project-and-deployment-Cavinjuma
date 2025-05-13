// Add to cart and update localStorage
const cartCount = document.getElementById("cart-count");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartUI() {
  cartCount.textContent = cart.length;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
  cart.push(productId);
  updateCartUI();
}

document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    const productId = btn.parentElement.getAttribute("data-id");
    addToCart(productId);
    btn.textContent = "Added!";
    setTimeout(() => (btn.textContent = "Add to Cart"), 1000);
  });
});

updateCartUI();
