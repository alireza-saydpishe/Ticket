const errfun = (message) => {
  const modal = document.createElement("div");
  modal.classList.add("error-modal");
  modal.textContent = message;
  document.body.appendChild(modal);
  setTimeout(() => {
    document.body.removeChild(modal);
  }, 1000);
}

const soldout = document.querySelectorAll(".soldout");
const counter = document.querySelectorAll(".counter");

soldout.forEach((box) => {
  box.addEventListener("click", () => {
    errfun("This Session Is Full");
  });
});

counter.forEach((box) => {
  box.addEventListener("click", () => {
    errfun("Please Wait Until Sans Is Added");
    setTimeout(() => {
      const href = box.getAttribute("href");
      window.location.href = href;
    }, 5000);
  });
})
