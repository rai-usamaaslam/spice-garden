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
//Form Validation
const reservationForm = document.querySelector(".reservation-form");
const reservationMessage = document.querySelector(".reservation-message");

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  reservationMessage.textContent = "Your table has been reserved successfully!";
  reservationForm.reset();
});

const newsletterForm = document.querySelector(".newsletter-form");
const newsletterMessage = document.querySelector(".newsletter-message");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  newsletterMessage.textContent ="Thank you! You have subscribed successfully.";
  newsletterForm.reset();
});

