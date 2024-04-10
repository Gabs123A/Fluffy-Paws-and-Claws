document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display featured products
    fetch('api/products')
        .then(response => response.json())
        .then(data => 
            {
            // Display products in the products-grid
            const productsGrid = document.querySelector('.products-grid');
            data.forEach(product => 
                {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>${product.price}</p>
                    <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                `;
                productsGrid.appendChild(productElement);
            });
        });
});