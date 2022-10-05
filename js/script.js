

function sortearPalabra(palabras) {
  var indice = Math.floor(Math.random() * palabras.length);
  var opcion = palabras[indice];
  return opcion;
}

function dibujarLineas(i, pincel) {
  for (var p = 0; p < i; p++) {
    pincel.fillStyle = "#0A3871";
    pincel.font = "30pt Verdana";
    pincel.fillText("_", 450 + 40 * p, 500);
  }
}

function dibujarLetrasCorrectas(i, a, pincel) {
  pincel.fillStyle = "#0A3871";
  pincel.font = "30pt Verdana";
  pincel.fillText(a, 450 + 40 * i, 500);
}

function dibujarLetrasIncorrectas(i, a, pincel) {
  pincel.fillStyle = "red";
  pincel.font = "28pt Verdana";
  pincel.fillText(a, 800 + 40 * i, 200);
}

function intentosImg(intentos) {
  if (intentos == 0) {
    dibujo_ini();
  } else if (intentos == 1) {
    dibujo_1();
  } else if (intentos == 2) {
    dibujo_2();
  } else if (intentos == 3) {
    dibujo_3();
  } else if (intentos == 4) {
    dibujo_4();
  } else if (intentos == 5) {
    dibujo_5();
  } else if (intentos == 6) {
    dibujo_fin();
  }
}

/*=============  dibujo de imagenes  ==============*/

function dibujo_ini() {
  var micanvas = document.getElementById("canvas");
  var ctx = micanvas.getContext("2d");
  var img = new Image();
  img.src = "img/img-init.png";
  img.onload = function () {
    ctx.drawImage(img, 350, 0);
  };
}

function dibujo_1() {
  var micanvas = document.getElementById("canvas");
  var ctx = micanvas.getContext("2d");
  var img = new Image();
  img.src = "img/img1.png";
  img.onload = function () {
    ctx.drawImage(img, 350, 0);
  };
}

function dibujo_2() {
  var micanvas = document.getElementById("canvas");
  var ctx = micanvas.getContext("2d");
  var img = new Image();
  img.src = "img/img2.png";
  img.onload = function () {
    ctx.drawImage(img, 350, 0);
  };
}

function dibujo_3() {
  var micanvas = document.getElementById("canvas");
  var ctx = micanvas.getContext("2d");
  var img = new Image();
  img.src = "img/img3.png";
  img.onload = function () {
    ctx.drawImage(img, 350, 0);
  };
}

function dibujo_4() {
  var micanvas = document.getElementById("canvas");
  var ctx = micanvas.getContext("2d");
  var img = new Image();
  img.src = "img/img4.png";
  img.onload = function () {
    ctx.drawImage(img, 350, 0);
  };
}

function dibujo_5() {
  var micanvas = document.getElementById("canvas");
  var ctx = micanvas.getContext("2d");
  var img = new Image();
  img.src = "img5.png";
  img.onload = function () {
    ctx.drawImage(img, 350, 0);
  };
}

function dibujo_fin() {
  var micanvas = document.getElementById("canvas");
  var ctx = micanvas.getContext("2d");
  var img = new Image();
  img.src = "img/img0.png";
  img.onload = function () {
    ctx.drawImage(img, 350, 0);
  };
}

/*======== INICIAR JUEGO ========*/

function juego(palabras) {

  var ini = document.querySelector("#inicio");
  document.getElementById("inicio").id = "inicio-none";
  var pantalla = document.querySelector("canvas");
  var pincel = pantalla.getContext("2d");
  var op = sortearPalabra(palabras);
  var opArray = op.split("");
  console.log(opArray);
  var letrasIncorrectas = [];
  var letrasCorrectas = [];
  var espacioLetras = [];
  var letraIngresada = "";
  var lg = "_";
  var intentos = 0;
  dibujarLineas(opArray.length, pincel);
  const cheq = new Set(opArray);
  let resultado = [...cheq];

  dibujo_ini();
  document.addEventListener("keydown", function (event) {
    letraIngresada = event.key.toUpperCase();
    if (
      letraIngresada.charCodeAt(letraIngresada) >= 65 &&
      letraIngresada.charCodeAt(letraIngresada) <= 90
    ) {
      for (var i = 0; i < opArray.length; i++) {
        if (opArray.includes(letraIngresada)) {
          if (opArray[i] == letraIngresada) {
            dibujarLetrasCorrectas(i, letraIngresada, pincel);

            if (!letrasCorrectas.includes(letraIngresada, pincel)) {
              letrasCorrectas.push(letraIngresada);
              if (letrasCorrectas.length == resultado.length) {
                alert("✔️ Felicidades, Gano el Juego 😊");
              }
            }
          }
        } else if (letrasIncorrectas.includes(letraIngresada)) {
        } else {
          letrasIncorrectas.push(letraIngresada);
          dibujarLetrasIncorrectas(i, letrasIncorrectas, pincel);
          if (intentos < 5) {
          } else {
            alert("❌ Fin del juego 😔");
          }
        }
      }
      intentos = letrasIncorrectas.length;
      intentosImg(intentos);
    }
  });

  console.log(espacioLetras);

  return palabras;
}

/*============ PALABRAS AGREGADAS ============*/

var palabras = [
  "ALURA",
  "ORACLE",
  "HTML",
  "CASA",
  "EXTRATERRESTRE",
  "CSS",
  "RICARDO"
];
