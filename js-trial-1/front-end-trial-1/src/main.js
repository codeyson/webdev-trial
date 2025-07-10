import './style.css'
import { togglePassword } from './student-login'

document.addEventListener("DOMContentLoaded", () => {
  togglePassword("password", "showPassword");
});