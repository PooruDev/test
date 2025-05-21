document.addEventListener("DOMContentLoaded", function () {
  const darkModeIcon = document.querySelector('img[src*="dark-mode"]');
  const lightModeIcon = document.querySelector('img[src*="light-mode"]');

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Dark mode toggle
  darkModeIcon.addEventListener("click", function () {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  });

  // Light mode toggle
  lightModeIcon.addEventListener("click", function () {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  });
});
