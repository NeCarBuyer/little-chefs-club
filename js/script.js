// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    // Newsletter form validation
    const newsletterForm = document.querySelector(".newsletter-form");
    const emailInput = newsletterForm.querySelector("input[type='email']");

    newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const emailValue = emailInput.value.trim();

        if (validateEmail(emailValue)) {
            alert("Thank you for subscribing!");
            emailInput.value = ""; // Clear the input field
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // Email validation function
    function validateEmail(email) {
        const emailRegex =
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    }

    // Dynamic content population (optional)
    const recipes = [
        {
            title: "Chocolate Chip Cookies",
            description: "Easy to make cookies that kids will love to bake and eat!",
            image: "images/recipes/chocolate-cookies.jpg",
        },
        {
            title: "Rainbow Pancakes",
            description: "Perfect for little hands!",
            image: "images/recipes/rainbow-pancakes.jpg",
        },
        {
            title: "Fruity Fun Kebabs",
            description: "Healthy and colorful fruit skewers for a perfect snack!",
            image: "images/recipes/fruit-kebabs.jpg",
        },
        {
            title: "Funny Face Pizzas",
            description: "Create silly faces with vegetables on mini pizzas!",
            image: "images/recipes/pizza-faces.jpg",
        },
    ];

    const recipeGrid = document.querySelector(".recipe-grid");
    if (recipeGrid) {
        recipes.forEach((recipe) => {
            const recipeCard = document.createElement("div");
            recipeCard.className = "recipe-card";
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <a href="#" class="recipe-button">View Recipe</a>
            `;
            recipeGrid.appendChild(recipeCard);
        });
    }

    const products = [
        {
            name: "Little Chefs Apron",
            price: "£14.99",
            image: "images/products/kids-apron.jpg",
        },
        {
            name: "Animal Cookie Cutters",
            price: "£9.99",
            image: "images/products/cookie-cutters.jpg",
        },
        {
            name: "Our First Cookbook",
            price: "£18.99",
            image: "images/products/kids-cookbook.jpg",
        },
        {
            name: "Colorful Measuring Set",
            price: "£12.99",
            image: "images/products/measuring-cups.jpg",
        },
    ];

    const productGrid = document.querySelector(".product-grid");
    if (productGrid) {
        products.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <a href="#" class="shop-button">Add to Cart</a>
            `;
            productGrid.appendChild(productCard);
        });
    }

    // Social media hover effects (optional)
    const socialLinks = document.querySelectorAll(".social-links a");
    socialLinks.forEach((link) => {
        link.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });
        link.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active"); // Toggle the 'active' class
    });
});
