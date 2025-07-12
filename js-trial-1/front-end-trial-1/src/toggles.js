export function togglePassword(inputId = "password", checkboxId = "showPassword") {
  const passwordInput = document.getElementById(inputId);
  const checkbox = document.getElementById(checkboxId);

  if (passwordInput && checkbox) {
    checkbox.addEventListener("change", () => {
      passwordInput.type = checkbox.checked ? "text" : "password";
    });
  }
}
