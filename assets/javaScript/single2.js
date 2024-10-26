const changeSans = document.getElementById("changeSans");
changeSans.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  document
    .querySelector(".ticket-select_back")
    .classList.toggle("active");
  document.querySelector(".ticket-select").classList.toggle("active");
});

document
  .querySelector(".ticket-select_back")
  .addEventListener("click", (e) => {
    e.target.classList.remove("active");
    changeSans.classList.remove("active");
    document.querySelector(".ticket-select").classList.remove("active");
  });
const soldout = document.querySelectorAll(".ticket-soldout");

soldout.forEach((box) => {
  box.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("error-modal");
    modal.textContent = "This Session Is Full";
    document.body.appendChild(modal);
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 1000);
  });
});
