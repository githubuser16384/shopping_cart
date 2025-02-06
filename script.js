document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
  
    cartItems.forEach(function(item) {
      const priceElement = item.querySelector('.item-price');
      const price = parseFloat(priceElement.textContent.replace('$', ''));
      total += price;
    });
  
    const totalElement = document.getElementById('cart-total');
    totalElement.textContent = `$${total.toFixed(2)}`;
  });
  