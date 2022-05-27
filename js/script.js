// **********************************************
// ---------------ANTONIO------------------------
// **********************************************

function showTextSend() {
  document.getElementById("pick").removeAttribute("hidden");
  document.getElementById("trans").setAttribute("hidden", true);
  document.getElementById("send").setAttribute("hidden", true);
}

function showTextTransport() {
  document.getElementById("trans").removeAttribute("hidden");
  document.getElementById("pick").setAttribute("hidden", true);
  document.getElementById("send").setAttribute("hidden", true);
}

function showTextReceive() {
  document.getElementById("send").removeAttribute("hidden");
  document.getElementById("pick").setAttribute("hidden", true);
  document.getElementById("trans").setAttribute("hidden", true);
}

// **********************************************
// ----------------MARLON------------------------
// **********************************************

// Função Para Trocar os Banners

function changeBanner() {
  const banner1 = document.querySelector("[banner1]");
  const banner2 = document.querySelector("[banner2]");
  const banner3 = document.querySelector("[banner3]");

  setInterval(() => {
    if (banner1.classList.contains("active")) {
      banner1.classList.remove("active");
      banner1.classList.add("hidden");
      banner2.classList.remove("hidden");
      banner2.classList.add("active");
    } else if (banner2.classList.contains("active")) {
      banner2.classList.remove("active");
      banner2.classList.add("hidden");
      banner3.classList.remove("hidden");
      banner3.classList.add("active");
    } else if (banner3.classList.contains("active")) {
      banner3.classList.remove("active");
      banner3.classList.add("hidden");
      banner1.classList.remove("hidden");
      banner1.classList.add("active");
    }
  }, 6000);
}

changeBanner();

//Função menu mobile

const hamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fade = document.querySelectorAll(".has-fade");

function hamMenu() {
  if (header.classList.contains("open")) {
    //Fecha o menu Mobile
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fade.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    //Abre o menu mobile
    body.classList.add("noscroll");
    header.classList.add("open");
    fade.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
}

hamburger.addEventListener("click", function () {
  hamMenu();
});

overlay.addEventListener("click", () => {
  hamMenu();
});
