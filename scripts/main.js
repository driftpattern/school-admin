document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.querySelector('.hamburger-checkbox');
    var adminPanel = document.querySelector('.admin-panel');
    
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        adminPanel.classList.add('collapsed');
      } else {
        adminPanel.classList.remove('collapsed');
      }
    });
  });