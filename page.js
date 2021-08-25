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
// for (let i = 0; i < userReply.length; i++) {
//   bamReply[i].addEventListener("click", () => {
//     userReply[i].classList.remove("disable");
//   });
// }
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
  repMain.classList.remove("active-btn-cmt");
  inputMain.value = "";
});

//check focus
let chekcontent = 0;
let a = document.querySelector(".input-cmt");
a.addEventListener("input", function () {
  if (this.value == "") {
    repMain.classList.remove("active-btn-cmt");
  }
  document.addEventListener("keypress", () => {
    repMain.classList.add("active-btn-cmt");
    repMain.addEventListener("click", () => {
      repMain.classList.remove("active-btn-cmt");
      this.value == "";
      repMain.classList.add("disable");
      huyMain.classList.add("disable");
    });
  });
});
//input phu

//cmt
const form = document.getElementById("chat");
let ul = document.querySelector(".video-guest-list");
let mangul = Array.from(ul.getElementsByClassName("video-guest-item"));
const likeNav = document.getElementsByClassName("guest-interact-like");
const dislikeNav = document.getElementsByClassName("guest-interact-disike");
const phanhoiNav = document.getElementsByClassName("user-reply");
const huyNav = document.getElementsByClassName("user-reply-huy");
const repNav = document.getElementsByClassName("user-reply-rep");
const inputNav = document.getElementsByClassName("user-reply-cmt-input");
const boxReplyNav = document.getElementsByClassName("user-reply-cmt");
let n = likeNav.length;
let m = dislikeNav.length;
form.onsubmit = function (event) {
  event.preventDefault();

  const content = form.todo.value;
  if (content) {
    chekcontent++;
    let li = document.createElement("li");
    li.setAttribute("class", "video-guest-item");
    li.innerHTML = ` 
    <div class="row">
    <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2">
      <div class="guest-img-box">
        <img src="./assets/img/page/user.jpg" alt="" class="guest-img" />
      </div>
    </div>
    <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10">
      <div class="contact-guest-cmt">
        <p class="guest-name">
          tin nhat
          <span>vài giây trước</span>
        </p>
        <p class="guest-cmt-text">${form.todo.value}</p>
        <div class="guest-interact">
          <div class="guest-interact-like-dislike">
            <div class="guest-interact-like">
              <div>
                <p class="like-hover">Thích</p>
                <yt-icon class="style-scope ytd-toggle-button-renderer"
                  ><svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    class="style-scope yt-icon"
                    style="cursor: pointer; display: block; width: 16px; height: 16px; opacity: 0.4; margin-right: 4px"
                  >
                    <g class="style-scope yt-icon">
                      <path
                        d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"
                        class="style-scope yt-icon"
                      ></path>
                    </g>
                  </svg>
                </yt-icon>
              </div>
              <span>0</span>
            </div>
            <div class="guest-interact-disike">
              <div>
                <p class="like-hover">Không thích</p>
                <yt-icon class="style-scope ytd-toggle-button-renderer"
                  ><svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    class="style-scope yt-icon"
                    style="cursor: pointer; display: block; width: 16px; height: 16px; opacity: 0.4; margin-right: 4px"
                  >
                    <g class="style-scope yt-icon">
                      <path
                        d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
                        class="style-scope yt-icon"
                      ></path>
                    </g>
                  </svg>
                </yt-icon>
              </div>
              <span>0</span>
            </div>
          </div>
          <div class="user-reply">
            <p class="reply-title">PHẢN HỒI</p>
          </div>
        </div>
        <div class="user-reply-cmt disable">
                                  <div class="row">
                                    <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2">
                                      <div class="box-user-reply-img">
                                        <img src="./assets/img/page/user.jpg" alt="" class="user-reply-cmt-img" />
                                      </div>
                                    </div>
                                    <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10">
                                      <div class="user-reply-input-box">
                                        <input type="text" class="user-reply-cmt-input" placeholder="Phản hồi công khai" />
                                        <button class="user-reply-huy">HỦY</button>
                                        <button class="user-reply-rep">PHẢN HỒI</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
      </div>
    </div>
  </div>         
                        
        `;
    mangul.unshift(li);
    for (let i = 0; i < mangul.length; i++) {
      ul.appendChild(mangul[i]);
    }
    form.todo.value = "";
    n = n + chekcontent;
    like_dislike(n);
    phan_hoi(n);
  }
};
function like_dislike(n) {
  for (let i = 0; i < n; i++) {
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
}
like_dislike(n);
function phan_hoi(n) {
  for (let i = 0; i < n; i++) {
    phanhoiNav[i].addEventListener("click", () => {
      boxReplyNav[i].classList.remove("disable");
    });
    huyNav[i].addEventListener("click", () => {
      boxReplyNav[i].classList.add("disable");
    });
  }
}
phan_hoi(n);

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
