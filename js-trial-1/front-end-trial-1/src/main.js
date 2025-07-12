import './style.css';
import { togglePassword } from './toggles';
import { userPicker } from './user-admin';

document.addEventListener("DOMContentLoaded", () => {
  togglePassword("password", "showPassword");

  const formContainer = document.getElementById("form-container");

  formContainer.innerHTML = `
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <div class="flex justify-center items-center space-x-2 mb-4">
        <button id="studentSelect" class="px-3 py-1 text-sm bg-blue-500 text-white rounded-xl">Student</button>
        <button id="adminSelect" class="px-3 py-1 text-sm bg-gray-300 text-gray-700 rounded-xl">Admin</button>
      </div>
      <p class="text-center text-gray-600">Please select a login type</p>
    </div>
  `;
  
  userPicker();
});
