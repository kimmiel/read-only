const listButton = document.querySelector(".barIcon");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const warp = document.querySelector(".warp");
const barIcon = document.querySelector(".barIcon");

let click = false;
let small = false;
listButton.addEventListener("click", function () {
  // 按下icon后 綠bar彈出
  if (click === false) {
    left.classList.remove("leftBig");
    right.classList.remove("rightBig");
    left.classList.add("leftSmall");
    right.classList.add("rightSmall");
    warp.style.right = "40%";
    click = true;
  } else {
    left.classList.remove("leftSmall");
    right.classList.remove("rightSmall");
    left.classList.add("leftBig");
    right.classList.add("rightBig");
    warp.style.right = "0%";
    // warp.style.transition = "right .8s";
    click = false;
  }
});

//找sreen大小 防止cilck 影响到正常大小的排版
window.addEventListener("resize", function () {
  const sreenWidth = document.body.clientWidth; //check new sreen size
  console.log("resize:" + sreenWidth);
  if (sreenWidth > 2201) {
    left.classList.remove("leftSmall");
    right.classList.remove("rightSmall");
    left.classList.remove("leftBig");
    right.classList.remove("rightBig");
    warp.style.right = "0%";
  }
  // clientWidth 比实际小1px eg设定1024 clientWidth 出來是1023
});

//找高度
const frist = document.querySelector(".frist");
const sec = document.querySelector(".sec");
const thr = document.querySelector(".thr");
const fourth = document.querySelector(".fourth");

const head = document.querySelector("head");
const headHeight = head.getBoundingClientRect().height;
const fristHeight = frist.getBoundingClientRect().height;
const secHeight = sec.getBoundingClientRect().height;
const fourthHeight = fourth.getBoundingClientRect().height;
const thrHeight = thr.getBoundingClientRect().height + fourthHeight;

const black1 = document.querySelector(".black1");
const black2 = document.querySelector(".black2");
const black3 = document.querySelector(".black3");
const black4 = document.querySelector(".black4");
// const scrollHeight = window.pageYOffset;

console.log(fristHeight);
console.log(secHeight);
console.log(fourthHeight);
console.log(thrHeight);

//讀srceen高度
window.addEventListener("scroll", function () {
  //監聽有没有向上或下滑
  console.log(`scrollHeight:${window.pageYOffset}`);
  const scrollHeight = window.pageYOffset;
  if (scrollHeight < secHeight) {
    //滑到對應section時改色
    console.log("scrollHeight<sec");
    black1.classList.add("bwhite");
    black2.classList.remove("bwhite");
    black3.classList.remove("bwhite");
    black4.classList.remove("bwhite");
  } else if (scrollHeight > secHeight && scrollHeight < fourthHeight) {
    console.log("scrollHeight > secHeight && scrollHeight < fourthHeight");
    black1.classList.remove("bwhite");
    black2.classList.add("bwhite");
    black3.classList.remove("bwhite");
    black4.classList.remove("bwhite");
  } else if (scrollHeight > fourthHeight && scrollHeight < thrHeight) {
    console.log("scrollHeight > fourthHeight && scrollHeight < thrHeight");
    black1.classList.remove("bwhite");
    black2.classList.remove("bwhite");
    black3.classList.add("bwhite");
    black4.classList.remove("bwhite");
  } else if (scrollHeight > thrHeight) {
    console.log("scrollHeight >thrHeight ");
    black1.classList.remove("bwhite");
    black2.classList.remove("bwhite");
    black3.classList.remove("bwhite");
    black4.classList.add("bwhite");
  } else {
    black1.classList.remove("bwhite");
    black2.classList.remove("bwhite");
    black3.classList.remove("bwhite");
    black4.classList.remove("bwhite");
  }
});
