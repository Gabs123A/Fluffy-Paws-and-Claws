document.addEventListener('DOMContentLoaded', function () 
{
    const addToCartButtons = document.querySelectorAll('.product button');

    addToCartButtons.forEach(button => 
        {
        button.addEventListener('click', function () 
        {
            const product = this.parentElement;
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p:nth-child(3)').textContent;

            // Create a new item object
            const newItem = 
            {
                name: productName,
                price: parseFloat(productPrice.replace('$', '')),
                quantity: 1
            };

            // Check if there are existing items in the cart
            let existingItems = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the item is already in the cart
            let existingItemIndex = existingItems.findIndex(item => item.name === newItem.name);

            if (existingItemIndex !== -1) 
            {
                // If the item is already in the cart, update the quantity
                existingItems[existingItemIndex].quantity++;
            } else 
            {
                // If the item is not in the cart, add it
                existingItems.push(newItem);
            }

            // Update the cart in localStorage
            localStorage.setItem('cart', JSON.stringify(existingItems));

            // Added to cart
            alert(`${productName} added to cart!`);
        });
    });
});