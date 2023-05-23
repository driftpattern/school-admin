document.addEventListener("DOMContentLoaded", function() {
  var checkbox = document.querySelector('.hamburger-checkbox');
  var adminPanel = document.querySelector('.admin-panel');
  var hamburgerButton = document.querySelector('.hamburger-checkbox ~ label');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      adminPanel.classList.add('collapsed');
      hamburgerButton.style.transform = 'rotate(180deg)';
    } else {
      adminPanel.classList.remove('collapsed');
      hamburgerButton.style.transform = 'rotate(0deg)';
    }
  });
});
