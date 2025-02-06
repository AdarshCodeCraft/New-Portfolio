const date = document.getElementById('date')
const setCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	date.textContent = currentYear
}
setCurrentYear()

// hamburger menu
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const socials = document.querySelector('.social-nav')
const navLinks = document.querySelectorAll('.nav-links')

const toggleMobileMenu = () => {
	hamburger.classList.toggle('open')
	navList.classList.toggle('open')
	socials.classList.toggle('open')
	document.body.classList.toggle('open')
}

navLinks.forEach(link => link.addEventListener('click', toggleMobileMenu))
hamburger.addEventListener('click', toggleMobileMenu)

// initialize aos (library for scroll animation)
AOS.init()



document.addEventListener("DOMContentLoaded", () => {
	const themeSwitch = document.getElementById("theme-switch");
  
	// Check for saved theme preference
	const savedTheme = localStorage.getItem("theme");
	if (savedTheme) {
	  document.body.classList.add(savedTheme);
	  themeSwitch.checked = savedTheme === "light-mode";
	}
	// Toggle theme on switch change
  
	themeSwitch.addEventListener("change", () => {
	  if (themeSwitch.checked) {
		document.body.classList.add("light-mode");
  
		document.body.classList.remove("dark-mode");
  
		localStorage.setItem("theme", "light-mode");
	  } else {
		document.body.classList.add("dark-mode");
  
		document.body.classList.remove("light-mode");
  
		localStorage.setItem("theme", "dark-mode");
	  }
	});
  });