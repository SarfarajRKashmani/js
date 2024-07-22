import { post } from "../components/api.js";
import { getelm } from "../Components/helper.js";
import { nbar, styls } from "../components/navbar.js";

const navbar = getelm("navbarr");
navbar.innerHTML = nbar();

document.addEventListener("DOMContentLoaded", function () {
  const styl = document.createElement("style");
  styl.innerHTML = styls();
  document.head.append(styl);
});


  (() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const getCityName = async (lat, lng) => {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
        );
        const data = await response.json();
        return await data.address.city;
      };
      (async () => {
        let city = await getCityName(latitude, longitude);
        "surat" === city ? (city = "Surat") : city;
        document.getElementById("city").value = city;
        document.getElementById("city").setAttribute("disabled", true);
      })
      ();
    });
  })();


document.getElementById("signup").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const city = document.getElementById("city").value;

  const user = {
    name,email,password,phone,city,
  };
  post(user);
});