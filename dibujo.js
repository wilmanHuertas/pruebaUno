var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );
var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var colorIzq = document.getElementById("Cizq")
var colorDer = document.getElementById("Cder")
var colorInt = document.getElementById("Cint")

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var espacio = ancho / lineas;
  dibujarLinea(colorIzq.value, 1, 1, 1, ancho);
  dibujarLinea(colorIzq.value, 0, ancho -1, ancho, ancho -1);

  while (l < lineas)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    yi1 = ((162 / lineas) * l) +38;
    yi2 = ((162 / lineas) * l+1) +200;
    yi3 = 200 - ((162 / lineas) * l+1);
    yi4 = 362 - ((162 / lineas) * l);
    dibujarLinea(colorIzq.value, 0, yi, xf, ancho); // IZQUIERDO ABAJO
    dibujarLinea(colorDer.value, yi, 0, ancho, xf);// DERECHO ARRIBA
    dibujarLinea(colorInt.value, 200,yi1,yi2,200);
    dibujarLinea(colorInt.value, 200,yi1,yi3,200);
    dibujarLinea(colorInt.value, 200,yi4,yi3,200);
    dibujarLinea(colorInt.value, 200,yi4,yi2,200);
    console.log("linea " + l);
    l = l + 1;
  }
  dibujarLinea(colorDer.value, 1, 1, ancho -1, 1);
  dibujarLinea(colorDer.value, ancho -1, 1, ancho -1, ancho -1);
  dibujarLinea(colorInt.value, 200,200,38,200);
  dibujarLinea(colorInt.value, 200,200,362,200);
  dibujarLinea(colorInt.value, 200,38,200,200);
  dibujarLinea(colorInt.value, 200,200,200,362);
  }
