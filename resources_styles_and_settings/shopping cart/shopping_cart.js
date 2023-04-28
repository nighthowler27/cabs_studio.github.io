// // define cart items
// let cartItems = [];

// add event listener to the "Add to cart" button
let list = document.querySelectorAll('.list .item');
let cartItems = [];

list.forEach(item => {
    let addBtn = item.querySelector('.add');
    addBtn.addEventListener('click', function(event) {
        event.stopPropagation();

        let itemNew = item.cloneNode(true);
        let checkIsset = false;

        let listCart = document.querySelectorAll('.cart .item');
        listCart.forEach(cart => {
            if (cart.getAttribute('data-key') == itemNew.getAttribute('data-key')) {
                checkIsset = true;
                cart.classList.add('danger');
                setTimeout(function(){
                    cart.classList.remove('danger');
                }, 1000);
            }
        });

        let key = item.getAttribute('data-key');
        let quantityInput = itemNew.querySelector('.quantity');
        let quantity = 1;

        if (quantityInput) {
            quantity = parseInt(quantityInput.value);

            if (isNaN(quantity) || quantity < 1) {
                quantity = 1;
                quantityInput.value = quantity;
            }
        }

        // check if the item already exists in the cart
        cartItems.forEach(cartItem => {
            if (cartItem.key == key) {
                checkIsset = true;
                cartItem.quantity += quantity;
                updateCart();
            }
        });
        
        if (!checkIsset) {
            // add new item to cart
            cartItems.push({ 
              key: key,
              name: itemNew.querySelector('.title').innerText,
              price: parseFloat(itemNew.querySelector('.price').innerText.replace('$', '')),
              quantity: quantity
            });
            updateCart();
        }
    });
});

function updateCart() {
    // implementation of updating the cart view goes here
}


// remove item from cart
function Remove(key) {
    cartItems = cartItems.filter(item => item.key != key);
    updateCart();
}

// update cart and payment details
function updateCart() {
    let cartList = document.querySelector('.cart .listCart');
    let totalPrice = 0;
    let totalQuantity = 0;
  
    // clear existing cart items
    while (cartList.firstChild) {
      cartList.removeChild(cartList.firstChild);
    }
  
    // add new cart items
    cartItems.forEach(item => {
      let cartItem = document.createElement('div');
      cartItem.classList.add('item');
      cartItem.setAttribute('data-key', item.key);
      cartItem.innerHTML = `
        <div class="img">
          <img src="/img/photo printing.jpg" alt="product-img.jpg">
        </div>
        <div class="content">
          <div class="title">${item.name}</div>
          <div class="price">$${item.price.toFixed(2)}</div>
          <input type="number" class="count" min="1" value="${item.quantity}">
          <div class="add-remove-btn">
            <button class="remove" onclick="Remove(${item.key})"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      `;
  
      let quantityInput = cartItem.querySelector('.count');
      quantityInput.addEventListener('change', function () {
        let newQuantity = parseInt(this.value);
        item.quantity = newQuantity;
        updateCart();
      });
  
      cartList.appendChild(cartItem);
  
      totalPrice += item.price * item.quantity;
      totalQuantity += item.quantity;
    });
  
    // update total price
    let shippingFee = 0;
    let discount = 0;
    if(totalPrice <= 100) {
        shippingFee = 20;
        discount = 0;
    } 
    else if(totalPrice >= 100) {
      shippingFee = 10;
      discount = totalPrice * 0.20;
    } else {
        shippingFee = 0;
        discount = 0;
    }
    let total = totalPrice - discount + shippingFee;
    let totalPriceElem = document.querySelector('.totalPrice');
    let discountElem = document.querySelector('.discount');
    let shippingFeeElem = document.querySelector('.shipping-fee');
    let totalPaymentElem = document.querySelector('.total-payment');
    totalPriceElem.textContent = '$' + totalPrice.toFixed(2);
    discountElem.textContent = '$' + discount.toFixed(2);
    shippingFeeElem.textContent = '$' + shippingFee.toFixed(2);
    totalPaymentElem.textContent = '$' + total.toFixed(2);
  }
  