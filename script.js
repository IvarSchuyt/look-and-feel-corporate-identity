console.log("test");
/* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */
function myFunctionCategoriën() {
  document.getElementById("myDropdown-categoriën").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".button-categoriën")) {
    var dropdowns = document.getElementsByClassName(
      "dropdown-content-categoriën"
    );
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctionDuur() {
  document.getElementById("myDropdown-duur").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".button-duur")) {
    var dropdowns = document.getElementsByClassName("dropdown-content-duur");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctionNiveau() {
  document.getElementById("myDropdown-niveau").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".button-niveau")) {
    var dropdowns = document.getElementsByClassName("dropdown-content-niveau");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
