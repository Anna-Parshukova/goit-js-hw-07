function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Clear previous boxes

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add('box');
    boxesContainer.appendChild(box);
    size += 10;
  }
}
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Clear all boxes
}

document.addEventListener('DOMContentLoaded', () => {
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const inputNumber = document.querySelector('input[type="number"]');

  createButton.addEventListener('click', () => {
    const amount = parseInt(inputNumber.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      inputNumber.value = '';
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });

  destroyButton.addEventListener('click', () => {
    destroyBoxes();
  });
});
