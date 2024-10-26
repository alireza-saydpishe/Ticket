const openUserAction = document.querySelectorAll("#openUserAction")

openUserAction.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".user_action-place").classList.add("active");
    document
      .querySelector(".user_action-place_back")
      .classList.add("active");
  });
})
document
  .querySelector(".user_action-place_back")
  .addEventListener("click", (event) => {
    event.target.classList.remove("active");
    document
      .querySelector(".user_action-place")
      .classList.remove("active");
  });
document
  .getElementById("exitUserAction")
  .addEventListener("click", () => {
    document
      .querySelector(".user_action-place_back")
      .classList.remove("active");
    document
      .querySelector(".user_action-place")
      .classList.remove("active");
  });



const btns = document.querySelectorAll(
  ".user_action-place-inner_head_btn button"
);
const regBtn = document.querySelectorAll(
  ".user_action-place-inner_head_register button"
);
const bodyForm = document.querySelectorAll(
  ".user_action-place-inner_body-form"
);
const forgetBtn = document.querySelectorAll(".submit-btn button.forget");

const showBody = (id, index) => {
  bodyForm.forEach((form) => {
    const formId = form.getAttribute("id");
    if (formId === id) {
      form.classList.add("active");
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });
      btns[index].classList.add("active");
      regBtn[0].classList.remove("active");
    } else {
      form.classList.remove("active");
    }
  });
};

btns[0].addEventListener("click", () => {
  showBody("lwp", 0);
});

btns[1].addEventListener("click", () => {
  showBody("lws", 1);
});

regBtn[0].addEventListener("click", () => {
  showBody("reg", 0);
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  regBtn[0].classList.add("active");
});

forgetBtn[0].addEventListener("click", (e) => {
  e.preventDefault();
  showBody("for", 0);
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
});

