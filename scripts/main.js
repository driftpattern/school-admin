
document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.querySelector('.hamburger-checkbox');
    var adminPanel = document.querySelector('.admin-panel');
    var adminLinks = document.querySelector('.admin-links');
    var myAccount = document.querySelector('.my-account');
   
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        adminPanel.classList.add('collapsed');
        adminLinks.classList.add("collapsed");
        myAccount.classList.add("collapsed");
      } else {
        adminPanel.classList.remove('collapsed');
        adminLinks.classList.remove("collapsed");
        myAccount.classList.remove("collapsed");
      }
    });
  });

