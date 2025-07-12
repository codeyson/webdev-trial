import { togglePassword } from "./toggles";

export function userPicker() {
  const studentBtn = document.getElementById("studentSelect");
  const adminBtn = document.getElementById("adminSelect");

  if (studentBtn && adminBtn) {
    studentBtn.addEventListener("click", () => {
      userToggle("student");
    });

    adminBtn.addEventListener("click", () => {
      userToggle("admin");
    });
  }
}

export function userToggle(user) {
  const formContainer = document.getElementById("form-container");

  if (user === 'student') {
    formContainer.innerHTML = `
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div class="flex justify-center items-center space-x-2 mb-4">
          <button type="button" id="studentSelect" class="px-3 py-1 text-sm bg-blue-500 text-white rounded-xl">Student</button>
          <button type="button" id="adminSelect" class="px-3 py-1 text-sm bg-gray-300 text-gray-700 rounded-xl">Admin</button>
        </div>
        <h2 class="text-2xl font-bold mb-6 text-center">Student Login</h2>
        <form>
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300">
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300">
          </div>
          <div class="mb-4 flex items-center">
            <input type="checkbox" id="showPassword" class="mr-2">
            <label for="showPassword" class="text-sm text-gray-600 mr-12">Show Password</label>
            <a href="#" class="pl-6 text-sm text-blue-500 hover:underline">Forgot Password</a>
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Login</button>
        </form>
      </div>
    `;
    togglePassword("password", "showPassword");
    userPicker();
  } else if (user === 'admin') {
    formContainer.innerHTML = `
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div class="flex justify-center items-center space-x-2 mb-4">
          <button type="button" id="studentSelect" class="px-3 py-1 text-sm bg-gray-300 text-gray-700 rounded-xl">Student</button>
          <button type="button" id="adminSelect" class="px-3 py-1 text-sm bg-blue-500 text-white rounded-xl">Admin</button>
        </div>
        <h2 class="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form>
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300">
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300">
          </div>
          <div class="mb-4 flex items-center">
            <input type="checkbox" id="showPassword" class="mr-2">
            <label for="showPassword" class="text-sm text-gray-600 mr-12">Show Password</label>
            <a href="#" class="pl-6 text-sm text-blue-500 hover:underline">Forgot Password</a>
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Login</button>
        </form>
      </div>
    `;
    togglePassword("password", "showPassword");
    userPicker();
  }
}
