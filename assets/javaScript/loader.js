document.addEventListener("DOMContentLoaded", function () {
  var loaderBackground = document.createElement("div");
  loaderBackground.className = "banter-loader-background";
  document.body.appendChild(loaderBackground);
  var loader = document.createElement("div");
  loader.className = "banter-loader";
  for (var i = 0; i < 9; i++) {
    var box = document.createElement("div");
    box.className = "banter-loader__box";
    loader.appendChild(box);
  }
  document.body.appendChild(loader);
  setTimeout(function () {
    loaderBackground.remove();
    loader.remove();
  }, 3000);
});
