// đóng mở user
// let user = document.querySelector(".header-user-click");
// let menu = document.querySelector(".menu-user");
// user.onclick = () => {
//   menu.classList.toggle("disable");
// };
//bấm ra ngoài thì đóng cửa sổ login
let x = document.getElementById("login-header");
let hideid = document.getElementById("box-click-login-header");
document.onclick = function (e) {
  if (e.target.id == "login-header") {
    x.children[0].classList.toggle("disable");
  } else {
    x.children[0].classList.add("disable");
  }
};
//dong mo sidebar
const hidMenuBtnIn = document.getElementById("js-hidden-btn-in");
const hidMenuBtnOut = document.getElementById("js-hidden-btn-out");
const hidMenu = document.getElementsByClassName("nav-hid");

let modal = document.querySelector(".hidden-navbar ");

// fade in
hidMenuBtnIn.onclick = () => {
  hidMenu[0].classList.toggle("disable");
  modal.classList.remove("disable");
};

// fade out
hidMenuBtnOut.onclick = () => {
  hidMenu[0].classList.toggle("disable");
  modal.classList.add("disable");
};

//bấm ra ngoài thì đóng sidebar
const modalcontainer = document.querySelector(".nav-hid");
modal.addEventListener("click", function () {
  if (modal.children[0].classList.contains("disable")) {
    modal.classList.add("disable");
  } else {
    modalcontainer.addEventListener("click", function (e) {
      e.stopPropagation();
    });
    modal.classList.add("disable");
    modal.children[0].classList.add("disable");
  }
});
