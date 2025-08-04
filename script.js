// DOM Selectors
const navLinks = document.querySelectorAll('.nav-links a');
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// Smooth Scroll & Active Link Highlight
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});

// Hamburger Toggle for Mobile
hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav-open');
});

// Optional: Sticky Header Shrink on Scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  header.classList.toggle('shrink', window.scrollY > 60);
});

// Future: Tab Component (Example)
function activateTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

// Future: Modal Handling (Hook ready)
function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// Placeholder for Feature Expansion
// e.g. Theme toggle, form validation, scroll reveal animations
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.tab-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.tab-btn[onclick*="${category}"]`).classList.add('active');

  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
AOS.init({
  duration: 800,
  once: true
});
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

}


