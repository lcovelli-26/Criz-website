// Basic JavaScript for Criz Clothing website

document.addEventListener("DOMContentLoaded", function () {
  // Search functionality
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("keyup", filterProducts);
  }

  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll(".product button");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Item added to cart! (This is a placeholder)");
    });
  });

  // Contact form submission
  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Thank you for your message! We'll get back to you soon. (This is a placeholder)",
      );
      contactForm.reset();
    });
  }

  // Dropdown menu click handling
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function () {
      this.classList.add("active");
    });
    dropdown.addEventListener("mouseleave", function () {
      this.classList.remove("active");
    });
  });
});

// Filter products based on search
function filterProducts() {
  const searchInput = document.getElementById("search-input");
  const filter = searchInput.value.toLowerCase();
  const productGrid = document.getElementById("product-grid");
  const products = productGrid.querySelectorAll(".product");

  products.forEach((product) => {
    const title = product.querySelector("h3").textContent.toLowerCase();
    const category = product
      .querySelector(".category")
      .textContent.toLowerCase();

    if (title.includes(filter) || category.includes(filter)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Smooth scrolling for navigation
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
