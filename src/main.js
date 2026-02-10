// Dark Mode
const toggle = document.getElementById("theme-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
}

// Signup validation
const form = document.getElementById("signup-form");
const message = document.getElementById("message");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();

    if (name && email.includes("@")) {
      message.textContent = "Subscription successful!";
      message.className = "text-green-600 mt-4 font-bold";
      form.reset();
    } else {
      message.textContent = "Please enter valid details.";
      message.className = "text-red-600 mt-4 font-bold";
    }
  });
}

// Accordion
document.querySelectorAll(".accordion-header").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("hidden");
  });
});


