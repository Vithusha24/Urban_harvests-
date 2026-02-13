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
  if (toggle) {
    // Avoid double binding if initTheme defined it, so let's just re-ensure state
    // But initTheme handles the check.
    // actually, just ensuring the listener is attached if script ran before body
    toggle.removeEventListener("click", toggleDarkMode);
    toggle.addEventListener("click", toggleDarkMode);
  }
});

// Signup validation
const form = document.getElementById("signup-form");
const messageBox = document.getElementById("form-message");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset errors
    document.querySelectorAll(".input-error").forEach(el => el.classList.remove("input-error", "border-red-500", "focus:ring-red-500"));
    document.querySelectorAll("[id$='-error']").forEach(el => el.classList.add("hidden"));
    messageBox.style.opacity = '0';

    // Validate Name
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    if (!nameInput.value.trim()) {
      nameInput.classList.add("input-error", "border-red-500", "focus:ring-red-500");
      nameError.classList.remove("hidden");
      isValid = false;
    }

    // Validate Email
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add("input-error", "border-red-500", "focus:ring-red-500");
      emailError.classList.remove("hidden");
      isValid = false;
    }

    // Validate Terms
    const termsInput = document.getElementById("terms");
    const termsError = document.getElementById("terms-error");
    if (termsInput && !termsInput.checked) {
      termsError.classList.remove("hidden");
      isValid = false;
    }

    if (isValid) {
      // Simulate API call
      const btn = form.querySelector("button[type='submit']");
      const originalText = btn.textContent;
      btn.textContent = "Submitting...";
      btn.disabled = true;

      setTimeout(() => {
        messageBox.textContent = "Welcome to the tribe! Please check your email.";
        messageBox.className = "text-center h-6 text-sm font-bold text-green-600 mt-4";
        messageBox.style.opacity = '1';
        form.reset();
        btn.textContent = originalText;
        btn.disabled = false;
      }, 1500);
    } else {
      // Shake animation effect
      form.classList.add("animate-wiggle");
      setTimeout(() => form.classList.remove("animate-wiggle"), 500);

      messageBox.textContent = "Please fix the errors above.";
      messageBox.className = "text-center h-6 text-sm font-bold text-red-600 mt-4";
      messageBox.style.opacity = '1';
    }
  });

  // Real-time validation removal on input
  form.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
      if (input.classList.contains("border-red-500")) {
        input.classList.remove("input-error", "border-red-500", "focus:ring-red-500");
        const errorMsg = document.getElementById(`${input.id}-error`);
        if (errorMsg) errorMsg.classList.add("hidden");
      }
    });
  });
}

// Mobile Menu
const menuBtn = document.getElementById("mobile-menu-btn");
const closeBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu && closeBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
  });
}

// Accordion
document.querySelectorAll(".accordion-header").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("hidden");
  });
});

// Carousel Logic
const track = document.getElementById("carousel-track");
const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const nextBtn = document.getElementById("next-slide");
const prevBtn = document.getElementById("prev-slide");
const dotsNav = document.getElementById("carousel-dots");
const dots = dotsNav ? Array.from(dotsNav.children) : [];

if (track && slides.length > 0) {
  let currentIndex = 0;

  const updateCarousel = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove('opacity-100', 'scale-125'));
    if (dots[index]) {
      dots[index].classList.add('opacity-100', 'scale-125');
    }
  };

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel(currentIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel(currentIndex);
    });
  }

  if (dotsNav) {
    dotsNav.addEventListener("click", (e) => {
      const targetDot = e.target.closest("button");
      if (!targetDot) return;

      const targetIndex = dots.findIndex(dot => dot === targetDot);
      if (targetIndex !== -1) {
        currentIndex = targetIndex;
        updateCarousel(currentIndex);
      }
    });
  }

  // Auto-play
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
  }, 5000);

  // Initialize
  updateCarousel(0);
}



