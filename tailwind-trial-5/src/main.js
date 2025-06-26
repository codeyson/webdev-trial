import './style.css';
import { dropdownmenu } from './dropdownmenu.js';
import { contentTemplate } from './content-template';
import { initSlider } from './img-slide.js';

dropdownmenu(document);

const content = document.getElementById('home-page');
content.innerHTML = contentTemplate;

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.getElementById('slides');
  if (slides) {
    const { nextSlide, prevSlide } = initSlider(slides);

    // Attach to buttons if needed
    document.getElementById('nextBtn')?.addEventListener('click', nextSlide);
    document.getElementById('prevBtn')?.addEventListener('click', prevSlide);
  }
});
