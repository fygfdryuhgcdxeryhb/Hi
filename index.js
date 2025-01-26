function toggleNavbar(event) {
  event.stopPropagation();
  var navbar = document.getElementById("navbar");
  var icon = document.getElementById("menu-icon");

  if (navbar.style.display === "block") {
    navbar.style.display = "none";
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  } else {
    navbar.style.display = "block";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  }
}

document.getElementById("menu-icon").addEventListener("click", toggleNavbar);

document.body.addEventListener("click", function() {
  var navbar = document.getElementById("navbar");
  var icon = document.getElementById("menu-icon");

  if (navbar.style.display === "block") {
    navbar.style.display = "none";
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

document.getElementById("navbar").addEventListener("click", function(event) {
  event.stopPropagation();
});
