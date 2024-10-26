let hourData = parseInt(document.querySelector(".hour").textContent);
let minutesData = parseInt(document.querySelector(".minutes").textContent);
let secondData = parseInt(document.querySelector(".second").textContent);

function updateCounter() {
  const hourElements = document.querySelectorAll(".hour");
  const minuteElements = document.querySelectorAll(".minutes");
  const secondElements = document.querySelectorAll(".second");

  hourData = parseInt(hourElements[0].textContent);
  minutesData = parseInt(minuteElements[0].textContent);
  secondData = parseInt(secondElements[0].textContent);

  if (secondData === 0) {
    if (minutesData === 0) {
      if (hourData === 0) {
        clearInterval(interval);
        return;
      }
      hourData--;
      minutesData = 59;
      secondData = 59;
    } else {
      minutesData--;
      secondData = 59;
    }
  } else {
    secondData--;
  }

  hourElements.forEach(el => el.textContent = hourData.toString());
  minuteElements.forEach(el => el.textContent = minutesData.toString().padStart(2, "0"));
  secondElements.forEach(el => el.textContent = secondData.toString().padStart(2, "0"));
}

const interval = setInterval(updateCounter, 1000);
