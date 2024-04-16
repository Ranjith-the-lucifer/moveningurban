const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
let cartItems = [];

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productItem = button.closest('.product-item');
    const productName = productItem.querySelector('h3').textContent;
    const productPrice = productItem.querySelector('.price').textContent;

    const newCartItem = {
      name: productName,
      price: productPrice,
    };

    cartItems.push(newCartItem);
    updateCartCount();
  });
});

function updateCartCount() {
  cartCount.textContent = cartItems.length;
}