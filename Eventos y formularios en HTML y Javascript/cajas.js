var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoporclick );
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoporclick(){
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi,xf;
  var colorcito = "#FAA";

  for(l = 0; l < lineas ; l++){
    yi = 10 * l;
    xf = 10 *  (l + 1);
    dibujarLinea("#FF0000", 0,yi,xf,300);
    console.log("linea: " + l);

  }
  dibujarLinea(colorcito, 1,1,1,299);
  dibujarLinea(colorcito, 1,299,299,299);
}
