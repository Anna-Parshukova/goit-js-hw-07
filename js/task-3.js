document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('name-input');
  const output = document.getElementById('name-output');

  input.addEventListener('input', () => {
    const trimmedValue = input.value.trim();
    output.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
  });
});
