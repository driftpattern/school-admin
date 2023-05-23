/* todo: set localstorage to retain collapsed/expand state */

document.addEventListener("DOMContentLoaded", function() {
  var checkbox = document.querySelector('.hamburger-checkbox');
  var adminPanel = document.querySelector('.admin-panel');
  var hamburgerButton = document.querySelector('.hamburger-checkbox ~ label');

  checkbox.addEventListener('change', function() {
    var label = this.nextElementSibling;
  
    if (checkbox.checked) {
      adminPanel.classList.add('collapsed');
      label.classList.add('collapsed');
      /* hamburgerButton.style.transform = 'rotate(180deg)'; */
    } else {
      adminPanel.classList.remove('collapsed');
      label.classList.remove('collapsed');
      /* hamburgerButton.style.transform = 'rotate(0deg)'; */
    }
  });
});
