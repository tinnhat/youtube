const hienthi = document.querySelector(".video-info-more-text");
const anbot = document.querySelector(".video-more-hide");
const moreContent = document.querySelector(".video-info-more-box");

function hienThiContetn() {
  moreContent.classList.remove("disable");
  hienthi.classList.add("disable");
}
function anBotContetn() {
  moreContent.classList.add("disable");
  hienthi.classList.remove("disable");
}
hienthi.addEventListener("click", hienThiContetn);
anbot.addEventListener("click", anBotContetn);

const xemthem = document.getElementsByClassName("more-guest-cmt-text");
const boxXemthem = document.getElementsByClassName("more-guest-cmt-box");
const anxemthem = document.getElementsByClassName("more-guest-cmt-text-hide");
const userReply = document.getElementsByClassName("user-reply-cmt");
const bamReply = document.getElementsByClassName("user-reply");
//xem thêm cmt
for (let i = 0; i < xemthem.length; i++) {
  xemthem[i].addEventListener("click", () => {
    boxXemthem[i].classList.remove("disable");
    anxemthem[i].classList.remove("disable");
    xemthem[i].classList.add("disable");
  });
  anxemthem[i].addEventListener("click", () => {
    boxXemthem[i].classList.add("disable");
    anxemthem[i].classList.add("disable");
    xemthem[i].classList.remove("disable");
  });
}
//phản hồi
for (let i = 0; i < userReply.length; i++) {
  bamReply[i].addEventListener("click", () => {
    userReply[i].classList.remove("disable");
  });
}
//hủy/bình luận chính
const huyMain = document.querySelector(".btn-huy-cmt");
const repMain = document.querySelector(".btn-cmt");
const inputMain = document.querySelector(".input-cmt");
inputMain.addEventListener("click", () => {
  huyMain.classList.remove("disable");
  repMain.classList.remove("disable");
});
huyMain.addEventListener("click", () => {
  repMain.classList.add("disable");
  huyMain.classList.add("disable");
});
//hủy/bình luận phụ
const phanhoiNav = document.getElementsByClassName("user-reply");
const huyNav = document.getElementsByClassName("user-reply-huy");
const repNav = document.getElementsByClassName("user-reply-rep");
const inputNav = document.getElementsByClassName("user-reply-cmt-input");
const boxReplyNav = document.getElementsByClassName("user-reply-cmt");
for (let i = 0; i < phanhoiNav.length; i++) {
  phanhoiNav[i].addEventListener("click", () => {
    boxReplyNav[i].classList.remove("disable");
  });
  huyNav[i].addEventListener("click", () => {
    boxReplyNav[i].classList.add("disable");
  });
}

//luư
const luu = document.querySelector(".video-more-pos");
const menuLuu = document.querySelector(".video-more-report");
luu.addEventListener("click", () => {
  menuLuu.classList.toggle("disable");
});
$(".video-more-pos").click(function (e) {
  $(".video-more-report").show();
  e.stopPropagation();
});
$(".video-more-report").click(function (e) {
  e.stopPropagation();
});
$(document).click(function (e) {
  $(".video-more-report").hide();
});
//like Main
const likeMain = document.querySelector(".video-like-box");
const dislikeMain = document.querySelector(".video-dislike-box");
let styleElem = document.head.appendChild(document.createElement("style"));
function doimau() {
  if (likeMain.classList.contains("like-color") || dislikeMain.classList.contains("like-color")) {
    styleElem.innerHTML = ".video-like-dislike::before {border-bottom: 2px solid #065fd4;}";
  } else {
    styleElem.innerHTML = ".video-like-dislike::before {border-bottom: 2px solid #909090;}";
  }
}
window.addEventListener("load", () => {
  let checklike = false;
  let checkdislike = false;

  likeMain.addEventListener("click", () => {
    checklike = true;
    if (checkdislike == true) {
      dislikeMain.classList.remove("like-color");
      checkdislike = false;
      likeMain.classList.add("like-color");
      doimau();
    } else {
      likeMain.classList.toggle("like-color");
      doimau();
    }
  });
  dislikeMain.addEventListener("click", () => {
    checkdislike = true;
    if (checklike == true) {
      dislikeMain.classList.add("like-color");
      checklike = false;
      likeMain.classList.remove("like-color");
      doimau();
    } else {
      dislikeMain.classList.toggle("like-color");
      doimau();
    }
  });
});

const likeNav = document.getElementsByClassName("guest-interact-like");
const dislikeNav = document.getElementsByClassName("guest-interact-disike");
for (let i = 0; i < likeNav.length; i++) {
  let checklike2 = false;
  let checkdislike2 = false;
  likeNav[i].children[0].addEventListener("click", () => {
    checklike2 = true;
    if (checkdislike2 == true) {
      dislikeNav[i].children[0].classList.remove("like-color");
      checkdislike2 = false;
      likeNav[i].children[1].innerHTML = Number(likeNav[i].children[1].innerHTML) + 1;
      if (Number(dislikeNav[i].children[1].innerHTML) > 0) {
        dislikeNav[i].children[1].innerHTML = Number(dislikeNav[i].children[1].innerHTML) - 1;
      } else {
        dislikeNav[i].children[1].innerHTML = "0";
      }
      likeNav[i].children[0].classList.add("like-color");
    } else {
      likeNav[i].children[0].classList.toggle("like-color");
      if (likeNav[i].children[0].classList.contains("like-color")) {
        likeNav[i].children[1].innerHTML = Number(likeNav[i].children[1].innerHTML) + 1;
      } else {
        if (Number(likeNav[i].children[1].innerHTML) != 0) {
          likeNav[i].children[1].innerHTML = Number(likeNav[i].children[1].innerHTML) - 1;
        } else {
          likeNav[i].children[1].innerHTML = "0";
        }
      }
    }
  });
  dislikeNav[i].children[0].addEventListener("click", () => {
    checkdislike2 = true;
    if (checklike2 == true) {
      dislikeNav[i].children[0].classList.add("like-color");
      checklike2 = false;
      dislikeNav[i].children[1].innerHTML = Number(dislikeNav[i].children[1].innerHTML) + 1;
      if (Number(likeNav[i].children[1].innerHTML) > 0) {
        likeNav[i].children[1].innerHTML = Number(likeNav[i].children[1].innerHTML) - 1;
      } else {
        likeNav[i].children[1].innerHTML = "0";
      }
      likeNav[i].children[0].classList.remove("like-color");
    } else {
      dislikeNav[i].children[0].classList.toggle("like-color");
      if (dislikeNav[i].children[0].classList.contains("like-color")) {
        dislikeNav[i].children[1].innerHTML = Number(dislikeNav[i].children[1].innerHTML) + 1;
      } else {
        if (Number(likeNav[i].children[1].innerHTML) > 0) {
          dislikeNav[i].children[1].innerHTML = Number(dislikeNav[i].children[1].innerHTML) - 1;
        } else {
          dislikeNav[i].children[1].innerHTML = "0";
        }
      }
    }
  });
}
//lưu modal
const closeLuuModal = document.querySelector(".modal-container-close");
const luuModal = document.querySelector(".modal-save");
const nutLuu = document.getElementsByClassName("boxnav-hover");
const modalContainer = document.querySelector(".modal-container");
function showLuuModal() {
  luuModal.classList.remove("disable");
}
function hideLuuModal() {
  luuModal.classList.add("disable");
}
modalContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});
nutLuu[1].addEventListener("click", showLuuModal);
closeLuuModal.addEventListener("click", hideLuuModal);
luuModal.addEventListener("click", hideLuuModal);

//modal share
const closeShare = document.querySelector(".modal-container-close-2");
const shareModal = document.querySelector(".modal-share");
const nutShare = document.getElementsByClassName("boxnav-hover");
const modalContainerShare = document.querySelector(".modal-share-container");
function showShareModal() {
  shareModal.classList.remove("disable");
}
function hideShareModal() {
  shareModal.classList.add("disable");
}
modalContainerShare.addEventListener("click", (e) => {
  e.stopPropagation();
});
nutLuu[0].addEventListener("click", showShareModal);
closeShare.addEventListener("click", hideShareModal);
shareModal.addEventListener("click", hideShareModal);
//sắp xếp cmt
const sapxep = document.querySelector(".video-cmt-time-box");
const boxPlan = document.querySelector(".video-cmt-plan-box");
sapxep.addEventListener("click", () => {
  boxPlan.classList.toggle("disable");
});
$(".video-cmt-time-box").click(function (e) {
  $(".video-cmt-plan-box").show();
  e.stopPropagation();
});
$(".video-cmt-plan-box").click(function (e) {
  e.stopPropagation();
});
$(document).click(function (e) {
  $(".video-cmt-plan-box").hide();
});
//subscribe
const sub = document.querySelector(".bnt-subscribe");
const subActive = document.querySelector(".bnt-subscribe-active");
const modalUnSub = document.querySelector(".modal-unsubcribe");
const modalContainerUnSub = document.querySelector(".modal-unsub-container");
const nutHuy = document.querySelector(".unsub-huy");
const unSub = document.querySelector(".unsub");
const nutUnSub = document.querySelector(".bnt-sub");
function showUnSub() {
  modalUnSub.classList.remove("disable");
}
function hideUnSub() {
  modalUnSub.classList.add("disable");
}
sub.addEventListener("click", () => {
  subActive.classList.remove("disable");
  sub.classList.add("disable");
});
nutUnSub.addEventListener("click", () => {
  modalUnSub.classList.remove("disable");
});
modalContainerUnSub.addEventListener("click", (e) => {
  e.stopPropagation();
});
modalUnSub.addEventListener("click", hideUnSub);
nutHuy.addEventListener("click", hideUnSub);
unSub.addEventListener("click", () => {
  hideUnSub();
  subActive.classList.add("disable");
  sub.classList.remove("disable");
});
//notification
const bell = document.querySelector(".notification");
const bellbox = document.querySelector(".noti-box");
bell.addEventListener("click", () => {
  bellbox.classList.toggle("disable");
});
$(".notification").click(function (e) {
  $(".noti-box").show();
  e.stopPropagation();
});
$(".noti-box").click(function (e) {
  e.stopPropagation();
});
$(document).click(function (e) {
  $(".noti-box").hide();
});
//bổ sung phần navbar
const camera = document.querySelector(".header-user-camera");
const camerabox = document.querySelector(".header-camera-box");
const cameraHover = document.querySelector(".header-content-hover");

camera.onclick = () => {
  cameraHover.classList.add("disable");
  console.log(cameraHover.classList);
};
