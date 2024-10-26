const acc = document
  .getElementById("rules")
  .addEventListener("change", (e) => {
    document.querySelector(".ticket-select").classList.toggle("active");
  });

const hrefbtn = document.querySelectorAll(".ticket button.nextstep")
hrefbtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "single-step2.html"
  })
})

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



