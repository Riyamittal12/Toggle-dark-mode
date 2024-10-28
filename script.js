// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') 
    ? "Light Mode" 
    : "Dark Mode";
});

// Scroll-to-Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Accordion Toggle
const accordionToggle = document.querySelector('.accordion-toggle');
const accordionContent = document.querySelector('.accordion-content');
accordionToggle.addEventListener('click', () => {
  accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
});
