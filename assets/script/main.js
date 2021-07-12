// Browser Width
const winWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

// Image To Divs
const allBGDiv = document.querySelectorAll("[data-bg]");
const desktopBGDiv = document.querySelectorAll("[desktop-bg]");
const mobileBGDiv = document.querySelectorAll("[mobile-bg]");

allBGDiv.forEach((item) => {
  item.style.backgroundImage = "url(" + item.getAttribute("data-bg") + ")";
});

if (winWidth >= 500) {
  desktopBGDiv.forEach((item) => {
    item.style.backgroundImage = "url(" + item.getAttribute("desktop-bg") + ")";
  });
} else {
  mobileBGDiv.forEach((item) => {
    item.style.backgroundImage = "url(" + item.getAttribute("mobile-bg") + ")";
  });
}

// Nav Toogle
let mainMenu = document.querySelector(".main-menu");
let mobileButton = document.querySelector(".mobile-toggle");

mobileButton.addEventListener("click", (e) => {
  e.preventDefault();
  !mainMenu.classList.contains("open")
    ? mainMenu.classList.add("open")
    : mainMenu.classList.remove("open");
});
