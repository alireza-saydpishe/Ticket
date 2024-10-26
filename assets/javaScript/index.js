//Open City Filter
const selectCity = document.getElementById("selectCity");
const locationBody = document.querySelector(".location-body");
const locationLinkPlace = document.querySelectorAll(
  ".location-body ul li a"
);

selectCity.addEventListener("click", () => {
  locationBody.classList.toggle("active");
});

locationLinkPlace.forEach((item) => {
  const getCityName = item.textContent;
  let newCityName = document.querySelector(".selectcitybtn span");
  item.addEventListener("click", () => {
    newCityName.textContent = getCityName;
    locationBody.classList.remove("active");
  });
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".location")) {
    locationBody.classList.remove("active");
  }
});

//Filter Shows
const showsFilter = document.querySelectorAll(".shows-filter ul li a");

showsFilter.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    showsFilter.forEach((otherItem) => {
      otherItem.classList.remove("active");
    });
    item.classList.add("active");
    const showsBodyId = item.getAttribute("href").substring(1);

    const showsBody = document.querySelectorAll(".shows-body");

    showsBody.forEach((body) => {
      if (body.getAttribute("id") === showsBodyId) {
        body.classList.add("active");
      } else {
        body.classList.remove("active");
      }
    });
  });
});

const allShowsA = document.getElementById("allShows");
allShowsA.addEventListener("click", () => {
  const showsBody = document.querySelectorAll(".shows-body");
  showsBody.forEach((show) => {
    show.classList.add("active");
  });
});

//Swiper Slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },
});