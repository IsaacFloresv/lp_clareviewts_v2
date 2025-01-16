let menuShow = false;
let iframeLoaded = false;
let ifnavbar;

window.addEventListener(
  "message",
  function (event) {
    if (event.data.target === "about") {
      document.getElementById("about").scrollIntoView();
    } else if (event.data.target === "services") {
      document.getElementById("services").scrollIntoView();
    } else if (event.data.target === "contact") {
      document.getElementById("about").scrollIntoView();
    }
    if (!iframeLoaded) {
      accederIframe();
    }
  },
  false
);

function accederIframe() {
  // Asegúrate de que el iframe haya cargado completamente
  ifnavbar = document.getElementById("navbar");
  let ifnavbarDocument =  ifnavbar.contentDocument || ifnavbar.contentWindow.document;

  // Accede y modifica elementos dentro del iframe
  let elemento = ifnavbarDocument.getElementById("menu-button")
  if (elemento) {
    console.log("evaluando");
    elemento.addEventListener("click", function () {
      showMenu();      
    });
    iframeLoaded = true;
  }
}

function showMenu() {
  if (menuShow) {
    ifnavbar.style.height = "";
    menuShow = false;
  } else {
    ifnavbar.style.height = "250dvw";
    menuShow = true;
  }
}
