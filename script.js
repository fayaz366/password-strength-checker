const passwordInput = document.getElementById("password");
const strengthValue = document.getElementById("strength-value");

passwordInput.addEventListener("input", () => {
  const val = passwordInput.value;
  let strength = "None";

  if (val.length === 0) {
    strength = "None";
    strengthValue.className = "";
  } else if (val.length < 6 || /^[a-zA-Z]+$/.test(val)) {
    strength = "Weak";
    strengthValue.className = "weak";
  } else if (val.length >= 6 && /[0-9]/.test(val) && /[a-zA-Z]/.test(val)) {
    strength = "Medium";
    strengthValue.className = "medium";
  } 
  if (val.length >= 8 && /[0-9]/.test(val) && /[a-zA-Z]/.test(val) && /[\W]/.test(val)) {
    strength = "Strong";
    strengthValue.className = "strong";
  }

  strengthValue.textContent = strength;
});