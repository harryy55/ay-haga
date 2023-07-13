const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userImage = document.getElementById("user-image");
const userInfo = document.querySelectorAll(".cont-buttons button");
const newUserInfo = document.querySelector("#new-user button");
const info = document.getElementById("info");
const urlBase = "https://randomuser.me/api/";
let data = [];

function getUserData() {
  info.textContent = "Loading...";
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", urlBase);
  xmlhttp.send();
  xmlhttp.onload = function () {
    // console.log(JSON.parse(xmlhttp.responseText));
    data = JSON.parse(xmlhttp.responseText).results[0];
    console.log(data);
    userImage.src = data.picture.large;
    userName.textContent = data.name.first + " " + data.name.last;
    userEmail.textContent = data.email;
    info.textContent = "";
  };
}
getUserData()
userInfo.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log(this.dataset.info);
    if (this.dataset.info == "phone") {
      info.textContent = data[this.dataset.info];
    } else {
      info.textContent =
        "country: " + data.location.country + " | city: " + data.location.city;
    }
  });
});

newUserInfo.addEventListener("click" , getUserData)