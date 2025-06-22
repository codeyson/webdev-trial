import './style.css'
import { dropdownmenu } from './dropdownmenu.js' 
import { contentTemplate } from './content-template'

dropdownmenu(document);

const content = document.getElementById('home-page');
content.innerHTML = contentTemplate;