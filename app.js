document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('clickMeBtn');
  const displayText = document.getElementById('displayText');

  button.addEventListener('click', () => {
    displayText.textContent = 'Hello! You clicked the button.';
  });
});