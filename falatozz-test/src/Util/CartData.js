if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
}

export const cart = JSON.parse(localStorage.getItem("cart"));
export var totalPrice = getTotalPrice();

function updateLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateTotalPrice() {
    totalPrice = getTotalPrice();
}

export function addToCart(product, quantity) {
    let newCartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        total: product.price*quantity,
    };

    let currentCart = JSON.parse(localStorage.getItem("cart"));

    let cartItem = currentCart.find(i=> i.id === newCartItem.id);

    if (!cartItem) {
        cart.push(newCartItem);
        updateLocalStorage();
        updateTotalPrice();
    } else {
        cartItem.quantity += newCartItem.quantity;
        cartItem.total += newCartItem.total;
        updateLocalStorage();
        updateTotalPrice();
    }
}

export function getTotalPrice() {
    let currentCart = JSON.parse(localStorage.getItem("cart"));
    if (currentCart !== []) {
        let total = cart.reduce( (a, b) => a + (b.price*b.quantity), 0);
        return total;
    } else {
        return 0;
    }
}

export function removeFromCart(id) {
    let itemToRemove = cart.find(i => i.id === id)
    cart.splice(cart.indexOf(itemToRemove), 1);
    updateLocalStorage();
    updateTotalPrice();
}