// Dark mode toggle — from https://flowbite.com/docs/customize/dark-mode/
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  themeToggleLightIcon.classList.remove('hidden');
} else {
  themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', function() {
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});

// Navbar scroll — from FlowbiteGPT
var navbar = document.getElementById("mainNavbar");

function updateNavbarOnScroll() {
  if (navbar) {
    if (window.scrollY > 12) {
      navbar.classList.add("bg-white/95", "dark:bg-gray-900/95", "shadow-sm");
    } else {
      navbar.classList.remove("bg-white/95", "dark:bg-gray-900/95", "shadow-sm");
    }
  }
}

updateNavbarOnScroll();
window.addEventListener("scroll", updateNavbarOnScroll);
