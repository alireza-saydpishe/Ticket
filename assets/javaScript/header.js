//Scroll
window.onscroll = function () {
  const header = document.querySelector("header");
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

//Md Menu
const mdMenu = document.querySelector(".md-menu")
const mdMenuBack = document.querySelector(".md-menu-back")
const openMdMenu = document.getElementById("opn-md")
const closeMdMenu = document.getElementById("closeMd")

openMdMenu.addEventListener("click", () => {
  mdMenu.classList.add("active")
  mdMenuBack.classList.add("active")
})

closeMdMenu.addEventListener("click", () => {
  mdMenu.classList.remove("active")
  mdMenuBack.classList.remove("active")
})