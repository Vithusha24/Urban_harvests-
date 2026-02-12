// Dark Mode
const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
};

const initTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    
    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
        toggle.addEventListener("click", toggleDarkMode);
    }
};

// Run immediately to prevent flash if possible, or on load
initTheme();
// Re-bind if buttons are dynamically added/modified (though here it's static)
document.addEventListener("DOMContentLoaded", () => {
   const toggle = document.getElementById("theme-toggle");
   if(toggle) {
       // Avoid double binding if initTheme defined it, so let's just re-ensure state
       // But initTheme handles the check.
       // actually, just ensuring the listener is attached if script ran before body
       toggle.removeEventListener("click", toggleDarkMode);
       toggle.addEventListener("click", toggleDarkMode);
   }
});

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


