const categoryButtons = document.querySelectorAll(".category-btn");
const menuCategories = document.querySelectorAll(".menu-category");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {

    categoryButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const selectedCategory = button.dataset.category;

    menuCategories.forEach((category) => {
      if (category.id === selectedCategory) {
        category.style.display = "block";
      } else {
        category.style.display = "none";
      }
    });
  });
});

