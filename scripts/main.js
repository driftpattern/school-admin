/* todo: set localstorage to retain collapsed/expand state */

document.addEventListener("DOMContentLoaded", function() {
  let checkbox = document.querySelector('.hamburger-checkbox');
  let adminPanel = document.querySelector('.admin-panel');
  let hamburgerButton = document.querySelector('.hamburger-checkbox ~ label');

  /* here check local storage */
  let isCollapsed = localStorage.getItem('isCollapsed');
  if (isCollapsed) {
    checkbox.checked = true;
    adminPanel.classList.add('collapsed');
  }

  checkbox.addEventListener('change', function() {
    let label = this.nextElementSibling;
  
    if (checkbox.checked) {
      adminPanel.classList.add('collapsed');
      label.classList.add('collapsed');
      /* hamburgerButton.style.transform = 'rotate(180deg)'; */
      localStorage.setItem('isCollapsed', 'true');
    } else {
      adminPanel.classList.remove('collapsed');
      label.classList.remove('collapsed');
      /* hamburgerButton.style.transform = 'rotate(0deg)'; */
      /* instead of setting isCollapsed = false, better to just remove */
      localStorage.removeItem('isCollapsed');
    }
  });
});
