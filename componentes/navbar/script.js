document.getElementById("menu-button").addEventListener("click", function () {
  console.log("Boton clickeado");
  this.classList.toggle("change");
  document.getElementById("nav-menu").classList.toggle("show");
});

function navigate(target) {
  console.log('Enviando mensaje al parent:', target);
  parent.postMessage({ target: target }, "*");
}
