export function togglePassword(passwordId, checkboxId) {
  const passwordField = document.getElementById(passwordId);
  const checkbox = document.getElementById(checkboxId);

  checkbox.addEventListener("change", () => {
    passwordField.type = checkbox.checked ? "text" : "password";
  });
}
