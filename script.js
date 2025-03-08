document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Search Bar Toggle
    const searchBtn = document.querySelector(".nav-search");
    const searchBar = document.querySelector(".search-bar");
    const searchCancel = document.querySelector(".search-cancel");

    if (searchBtn && searchBar && searchCancel) {
        searchBtn.addEventListener("click", function () {
            searchBar.classList.toggle("search-bar-active");
        });

        searchCancel.addEventListener("click", function () {
            searchBar.classList.remove("search-bar-active");
        });
    }

    // Login & Sign-Up Form Toggle
    const userBtn = document.querySelector(".nav-user");
    const formContainer = document.querySelector(".form");
    const loginForm = document.querySelector(".login-form");
    const signUpForm = document.querySelector(".sign-up-form");
    const formCancelBtns = document.querySelectorAll(".form-cancel");
    const signUpBtn = document.querySelector(".sign-up-btn");
    const alreadyAccountBtn = document.querySelector(".already-account");

    if (userBtn && formContainer) {
        userBtn.addEventListener("click", function () {
            formContainer.classList.add("login-active");
        });

        signUpBtn?.addEventListener("click", function () {
            formContainer.classList.remove("login-active");
            formContainer.classList.add("sign-up-active");
        });

        alreadyAccountBtn?.addEventListener("click", function () {
            formContainer.classList.remove("sign-up-active");
            formContainer.classList.add("login-active");
        });

        formCancelBtns.forEach((btn) => {
            btn.addEventListener("click", function () {
                formContainer.classList.remove("login-active", "sign-up-active");
            });
        });
    }

    // Mobile Menu Toggle
    const menuBtn = document.querySelector("#menu-btn");
    const sideMenu = document.querySelector(".side-menu");

    if (menuBtn && sideMenu) {
        menuBtn.addEventListener("change", function () {
            sideMenu.style.left = menuBtn.checked ? "0" : "-100%";
        });
    }

    // Add to Cart Functionality
    let cartItems = [];
    const cartCount = document.querySelector(".nav-cart span");
    const cartButtons = document.querySelectorAll(".product-cart-btn");
    const cartDropdown = document.createElement("div");
    cartDropdown.classList.add("cart-dropdown");
    document.body.appendChild(cartDropdown);

    function updateCartDisplay() {
        cartDropdown.innerHTML = "<h3>Cart Items</h3>";
        if (cartItems.length === 0) {
            cartDropdown.innerHTML += "<p>Your cart is empty.</p>";
        } else {
            cartItems.forEach((item, index) => {
                cartDropdown.innerHTML += `<div class='cart-item'>${item} <button onclick='removeCartItem(${index})'>❌</button></div>`;
            });
        }
    }

    cartButtons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const product = this.closest(".product-box").querySelector(".product-text-title").innerText;
            cartItems.push(product);
            cartCount.textContent = cartItems.length;
            updateCartDisplay();
            alert(`${product} added to cart!`);
        });
    });

    // Show Cart Dropdown When Clicking Cart Icon
    const cartBtn = document.querySelector(".nav-cart");
    if (cartBtn) {
        cartBtn.addEventListener("click", function () {
            cartDropdown.classList.toggle("cart-dropdown-active");
        });
    }

    // Remove Item from Cart
    window.removeCartItem = function (index) {
        cartItems.splice(index, 1);
        cartCount.textContent = cartItems.length;
        updateCartDisplay();
    };

    // Scroll-to-Top Button
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerText = "↑";
    scrollTopBtn.classList.add("scroll-top-btn");
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener("scroll", function () {
        scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
