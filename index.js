document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.html').style.setProperty('--skill-width', '90%');
  document.querySelector('.css').style.setProperty('--skill-width', '80%');
  document.querySelector('.js').style.setProperty('--skill-width', '75%');
  document.querySelector('.bootstrap').style.setProperty('--skill-width', '70%');
});

// Navbar toggle for small screens
document.querySelector("#menu-icon").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("show");
});

// Form validation
document.querySelector("form").addEventListener("submit", function (event) {
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
      event.preventDefault();
      alert("Please fill in all fields!");
  } else if (!/\S+@\S+\.\S+/.test(email)) {
      event.preventDefault();
      alert("Please enter a valid email address!");
  }
});
