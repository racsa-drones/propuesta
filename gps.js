//whatsapp

let d = new Date();
document.body.innerHTML =
  "<h1>La hora en reportar el accidente es:  " +
  d.getHours() +
  ":" +
  d.getMinutes() +
  ":" +
  d.getSeconds();
("</h1>");

var tuNumero = "50685134128";
var tuMensaje = "La%20Ubicación%20de%20mi%20accidente%20de%20tránsito%20es:%20";
//var product =
//var servicio =
//var latitud = "9.8849394";
//var longitud = "-84.057388";
var plus = ",+";
var sumarweb = ", ";
var addtext = "&text=%20";
//var message = message.split(" ").join("%20");
var head = "https://api.whatsapp.com/send?phone=";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {
  console.log("Location object received");
  console.log(
    "Latitude: " +
      position.coords.latitude +
      ", Longitude: " +
      position.coords.longitude +
      ", Accuracy " +
      position.coords.accuracy
  );
  var ubicaion =
    position.coords.latitude + sumarweb + position.coords.longitude;

  document.getElementById("resultado2").innerHTML = ubicaion;

  console.log("La Ubicación del cliente es:", ubicaion);
  console.log(
    head +
      tuNumero +
      addtext +
      tuMensaje +
      position.coords.latitude +
      plus +
      position.coords.longitude
  );

  var Textocompletow =
    head +
    tuNumero +
    addtext +
    tuMensaje +
    position.coords.latitude +
    plus +
    position.coords.longitude;

  console.log("el texto de whaas", Textocompletow);

  //

  document.getElementById("resultado").innerHTML = Textocompletow;
  document.getElementsByName("testi").value = Textocompletow;

  console.log("url", resultado);
  //document.body.innerHTML =
  //"<h1>el mensaje a enviar es :  " + Textocompletow;
  //("</h1>");

  //document.getElementById("resultado3").href = Textocompletow;
}

getLocation();
