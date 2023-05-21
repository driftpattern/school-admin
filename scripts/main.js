document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.querySelector('.hamburger-checkbox');
    
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        console.log("Checkbox is checked");
      } else {
        console.log("Checkbox is unchecked");
      }
    });
  });
  