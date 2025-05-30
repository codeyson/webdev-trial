export function dropdownmenu(document) {
  // JavaScript to toggle the dropdown
const menuBtn = document.getElementById('menu-btn');
const dropdown = document.getElementById('dropdown-menu');

// Safety check: Make sure the elements exist
  menuBtn.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
  });
}




