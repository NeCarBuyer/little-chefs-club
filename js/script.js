// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example recipe data
    const recipes = [
        {
            title: 'Easy Pancakes',
            description: 'Perfect for little hands!',
            image: 'pancakes.jpg'
        },
        // Add more recipes
    ];

    // Example product data
    const products = [
        {
            name: 'Kids Apron',
            price: '£14.99',
            image: 'apron.jpg'
        },
        // Add more products
    ];

    // Populate recipe grid
    const recipeGrid = document.querySelector('.recipe-grid');
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
        `;
        recipeGrid.appendChild(recipeCard);
    });

    // Populate product grid
    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
});
