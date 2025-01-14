document.getElementById("navbar").addEventListener(
  "click",
  function (event) {
    console.log("Mensaje recibido:", event.data);
    if (event.data.target === "section1") {
      document.getElementById("section1").scrollIntoView();
    } else if (event.data.target === "section2") {
      document.getElementById("section2").scrollIntoView();
    } else if (event.data.target === "section3") {
      document.getElementById("section3").scrollIntoView();
    }
    accederIframe();
  },
  false
);

function accederIframe() {
  // Asegúrate de que el iframe haya cargado completamente
  var ifnavbar = document.getElementById("navbar");
  var ifnavbarDocument = ifnavbar.contentDocument || ifnavbar.contentWindow.document;

  // Accede y modifica elementos dentro del iframe
  var elemento = ifnavbarDocument.getElementById("menu-button")
  if (elemento) {
    elemento.addEventListener("click", function (){
      if(ifnavbar.style.height === "250px"){
      ifnavbar.style.height = "";
      }else {ifnavbar.style.height = "250px"}
  });
  
    
    //
  }
}
