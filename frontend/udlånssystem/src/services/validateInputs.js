export default function validateInputs() {
  let inputs = document.querySelectorAll("input");
  let selects = document.querySelectorAll("select");
  let valid = true;
  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      valid = false;
    }
  });
  selects.forEach((select) => {
    if (!select.checkValidity()) {
      valid = false;
    }
  });
  return valid;
}
