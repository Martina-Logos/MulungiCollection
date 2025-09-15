// Simple filter functionality
document
  .getElementById("category-filter")
  .addEventListener("change", function () {
    const category = this.value;
    const products = document.querySelectorAll(".product-card");

    products.forEach((product) => {
      if (
        category === "all" ||
        product.getAttribute("data-category") === category
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });

// Quick view button hover effect
document.querySelectorAll(".quick-view").forEach((button) => {
  button.addEventListener("click", function () {
    alert("Quick view feature would show product details here!");
  });
});

// Newsletter form
document
  .querySelector(".newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for subscribing!");
    this.reset();
  });
