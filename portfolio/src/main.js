import './style.css';

const projects = [
  {
    title: "Weather App",
    description: "A simple weather forecast app using OpenWeatherMap API.",
    image: "https://via.placeholder.com/400x200?text=Weather+App",
    link: "#"
  },
  {
    title: "ToDo List",
    description: "A productivity-focused todo list app with local storage.",
    image: "https://via.placeholder.com/400x200?text=ToDo+App",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio site built with HTML, CSS, and JS.",
    image: "https://via.placeholder.com/400x200?text=Portfolio+Site",
    link: "#"
  },
  {
    title: "ToDo List",
    description: "A productivity-focused todo list app with local storage.",
    image: "https://via.placeholder.com/400x200?text=ToDo+App",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio site built with HTML, CSS, and JS.",
    image: "https://via.placeholder.com/400x200?text=Portfolio+Site",
    link: "#"
  }
];

function renderPortfolioCards() {
    const portfolioGrid = document.getElementById("portfolio-grid");
  
    if (!portfolioGrid) return;
  
    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = `
        bg-white rounded-xl shadow-sm border border-gray-200
        hover:shadow-md hover:-translate-y-1 transform transition duration-300
        overflow-hidden max-w-md mx-auto mb-6
      `;
  
      card.innerHTML = `
        <div class="relative group">
          <img 
            src="${project.image}" 
            alt="${project.title}" 
            class="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-10 transition"></div>
        </div>
  
        <div class="p-5 space-y-3">
          <h3 class="text-lg font-medium text-gray-900">${project.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">${project.description}</p>
          <a 
            href="${project.link}" 
            target="_blank" 
            class="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-700 transition"
          >
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      `;
  
      portfolioGrid.appendChild(card);
    });
  }
  

document.addEventListener("DOMContentLoaded", renderPortfolioCards);
