import { usrdt } from "../components/api.js";
import { getelm } from "../Components/helper.js";
import { nbar, styls } from "../components/navbar.js";

const navbar = getelm("navbarr");
navbar.innerHTML = nbar();

document.addEventListener("DOMContentLoaded", function () {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styls();
  document.head.appendChild(styleTag);
});

document.getElementById("login").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    email,
    password,
  };

  usrdt(user);
});