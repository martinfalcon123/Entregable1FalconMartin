// Cargar productos desde LocalStorage al inicio
window.onload = function () {
    loadCart();
};

// Obtener elementos del DOM
const productForm = document.getElementById('productForm');
const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const cartList = document.getElementById('cartList');
const totalPriceElement = document.getElementById('totalPrice');

// Carrito de compras
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para agregar producto al carrito
productForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const productName = productNameInput.value.trim();
    const productPrice = parseFloat(productPriceInput.value);

    if (productName && !isNaN(productPrice)) {
        // Agregar producto al carrito
        const product = {
            name: productName,
            price: productPrice
        };

        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        productForm.reset();
    } else {
        alert("Por favor, ingresa un nombre y precio válidos.");
    }
});

// Actualizar la visualización del carrito y el total
function updateCart() {
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += product.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
}

// Cargar carrito desde LocalStorage
function loadCart() {
    updateCart();
}