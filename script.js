document.getElementById('navbar').addEventListener(
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
  },
  false
);
