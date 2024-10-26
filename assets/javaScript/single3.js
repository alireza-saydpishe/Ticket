const coupon = document.getElementById("coupon");
coupon.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.style.display = "none";
  document.querySelector(".coupon-main").style.display = "block";
  document.getElementById("submit").style.display = "none";
});
const cancel = document.getElementById("cancel");
cancel.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".coupon-main").style.display = "none";
  coupon.style.display = "block";
  document.getElementById("submit").style.display = "block";
});