export function dropdownmenu(document) {
  // JavaScript to toggle the dropdown
const menuBtn = document.getElementById('menu-btn');
const dropdown = document.getElementById('dropdown-menu');

// Safety check: Make sure the elements exist
  menuBtn.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
  });
}

document.getElementById('about-link').addEventListener('click', (e) => {
   e.preventDefault();
  document.getElementById('about-page').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-link').addEventListener('click', (e) => {
    e.preventDefault(); 
  document.getElementById('contact-page').scrollIntoView({ behavior: 'smooth' });
});
