//total preguntas del juego
const TOTAL_PREGUNTAS = 26;
//tiempo del juego
const TIEMPO_DEL_JUEGO = 400;
//estructura para almacenar las preguntas
const bd_juego = [
  {
    id: 'A',
    pregunta: "Empieza por A, Qué animal hace telarañas.",
    respuesta: "araña"
  },
  {
    id: 'B',
    pregunta: "Empieza por B, lo contrario de malo.",
    respuesta: "bueno"
  },
  {
    id: 'C',
    pregunta: "Empieza por C, competicion de coches en el cual el objetivo es quedar Primero",
    respuesta: "carrera"
  },
  {
    id: 'D',
    pregunta: "Empieza por D, cuanto es 5+5 escrito en una sola palabra",
    respuesta: "diez"
  },
  {
    id: 'E',
    pregunta: "Empieza por E, un objeto que te retrata, refleja o da la imagen de algo",
    respuesta: "espejo"
  },
  {
    id: 'F',
    pregunta: "Empieza por F, el deporte más jugado y más visto por toda españa",
    respuesta: "futbol"
  },
  {
    id: 'G',
    pregunta: "Empieza por G, expresión que se usa para agradecer algo a una persona",
    respuesta: "gracias"
  },
  {
    id: 'H',
    pregunta: "Empieza por H, establecimiento destinado a proporcionar todo tipo de asistencia médica",
    respuesta: "hospital"
  },
  {
    id: 'I',
    pregunta: "Empieza por I, lugar donde proviene la pasta italiana",
    respuesta: "italia"
  },
  {
    id: 'J',
    pregunta: "Empieza por J, producto que sirve para la higiene personal y para lavar las manos",
    respuesta: "jabon"
  },
  {
    id: 'K',
    pregunta: "Empieza por K, qué animal es conocido por dormir la mayor parte del día",
    respuesta: "koala"
  },
  {
    id: 'L',
    pregunta: "Empieza por L, local provisto de aparatos y utensilios adecuados para realizar experimentos científicos y análisis químicos, farmacéuticos, etc",
    respuesta: "laboratorio"
  },
  {
    id: 'M',
    pregunta: "Empieza por M, sensación de angustia provocada por la presencia de un peligro real o imaginario",
    respuesta: "miedo"
  },
  {
    id: 'N',
    pregunta: "Empieza por N, fruta cítrica de color naranja dulce y que otorga vitaminas para las defensas del cuerpo",
    respuesta: "naranja"
  },
  {
    id: 'O',
    pregunta: "Empieza por O, órgano de la visión; en el ser humano y los animales superiores es par y se halla situado a cada lado de la parte anterior de la cabeza",
    respuesta: "ojo"
  },
  {
    id: 'P',
    pregunta: "Empieza por P, donde vivió Bob Esponja",
    respuesta: "piña"
  },
  {
    id: 'Q',
    pregunta: "Empieza por Q, alimento preferido de los ratones",
    respuesta: "queso"
  },
  {
    id: 'R',
    pregunta: "Empieza por R, instrumento para medir el tiempo o para indicar la hora del día",
    respuesta: "reloj"
  },
  {
    id: 'S',
    pregunta: "Empieza por S, animal fabuloso que vive en el mar, con cabeza de mujer, y torso de mujer, y extremidades inferiores de pez o ave",
    respuesta: "sirena"
  },
  {
    id: 'T',
    pregunta: "Empieza por T, lanzar una cosa con la mano",
    respuesta: "tirar"
  },
  {
    id: 'U',
    pregunta: "Empieza por U, animal fantastico con figura de caballo y con un cuerno recto en mitad de la frente",
    respuesta: "unicornio"
  },
  {
    id: 'V',
    pregunta: "Empieza por V, suspensión temporal del trabajo, de los estudios o de otras actividades habituales para descansar",
    respuesta: "vacaciones"
  },
  {
    id: 'W',
    pregunta: "Empieza por W, como se dice Agua en ingles",
    respuesta: "water"
  },
  {
    id: 'X',
    pregunta: "Contiene la X, prueba escrita u oral que se realiza para demostrar o probar la suficiencia en una materia determinada o la aptitud para cierta actividad o cargo",
    respuesta: "examen"
  },
  {
    id: 'Y',
    pregunta: "Empieza por Y, hembra del caballo",
    respuesta: "yegua"
  },
  {
    id: 'Z',
    pregunta: "Empieza por la Z, Abreviatura para referirse al recinto con instalaciones adecuadas para conservar, cuidar y criar animales",
    respuesta: "zoo"
  },
]

//preguntas que ya han sido contestadas. Si estan en 0 no han sido contestadas
var estadoPreguntas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var cantidadAcertadas = 0;

//variable que mantiene el num de pregunta acual
var numPreguntaActual = -1;

// Obtener el elemento del cronómetro
const timer = document.getElementById("tiempo");
// Establecer el tiempo inicial en 500 segundos
let timeLeft = TIEMPO_DEL_JUEGO;
var countdown;

//boton comenzar
var comenzar = document.getElementById("comenzar");
comenzar.addEventListener("click", function (event) {
  document.getElementById("pantalla-inicial").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "block";
  largarTiempo();
  cargarPregunta();
});

//Creamos el circúlo con las letras de la A a la Z
const container = document.querySelector(".container");



var bandera = 1;
do {

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.textContent = String.fromCharCode(bandera + 96);
  circle.id = [String.fromCharCode(bandera + 96).toUpperCase()]


  container.appendChild(circle);

  const angle = ((bandera - 1) / TOTAL_PREGUNTAS) * Math.PI * 2 - (Math.PI / 2);
  const x = Math.round(95 + 160 * Math.cos(angle));
  const y = Math.round(95 + 160 * Math.sin(angle));
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  //Controllar las execiones del rosco me salto K y W
  if (circle.id == 107) {
    circle.id = 108;
    bandera = bandera + 2;
  } else if (circle.id == 119) {
    circle.id = 120;
    bandera = bandera + 2;
  } else {
    bandera = bandera + 1;
  }



} while (bandera <= TOTAL_PREGUNTAS);


//Función que carga la pregunta
function cargarPregunta() {
  numPreguntaActual++;
  
  //controlo si he llegado al final de las preguntas, para comenzar de nuevo
  if (numPreguntaActual >= TOTAL_PREGUNTAS) {
    numPreguntaActual = 0;
  }

  if (estadoPreguntas.indexOf(0) >= 0) { //Controlo que todavía hallan preguntas por contestar
    while (estadoPreguntas[numPreguntaActual] == 1) {
      numPreguntaActual++;
      if (numPreguntaActual >= TOTAL_PREGUNTAS) {
        numPreguntaActual = 0;
      }
    }

    document.getElementById("letra-pregunta").textContent = bd_juego[numPreguntaActual].id
    document.getElementById("pregunta").textContent = bd_juego[numPreguntaActual].pregunta
    var letra = bd_juego[numPreguntaActual].id;
    document.getElementById(letra).classList.add("pregunta-actual");
  }
  else {
    clearInterval(countdown);
    mostrarPantallaFinal();
  }

}

//detecto cada vez que hay un cambio de tecla en el input
var respuesta = document.getElementById("respuesta");
respuesta.addEventListener("keyup", function (event) {
  //detecto si la tecla presionada es ENTER
  if (event.keyCode === 13) {
    if (respuesta.value == "") {
      alert("Debe ingresar un valor!!");
      return;
    }
    //obtengo la respuesta ingresada
    var txtRespuesta = respuesta.value;
    controlarRespuesta(txtRespuesta.toLowerCase());
  }
});

//Función que controla la respuesta
function controlarRespuesta(txtRespuesta) {
  //controlo si la respuesta es correcta
  if (txtRespuesta == bd_juego[numPreguntaActual].respuesta) {
    
    // alert("Respuesta correcta")
    cantidadAcertadas++;

    //actualizo el estado de las pregunta actual a 1, indicando que ya esta respondida
    estadoPreguntas[numPreguntaActual] = 1;
    var letra = bd_juego[numPreguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta-actual");
    document.getElementById(letra).classList.add("bien-respondida");

  } else {
    // alert("respuesta incorrecta")
    //actualizo el estado de las pregunta actual a 1, indicando que ya esta respondida
    estadoPreguntas[numPreguntaActual] = 1;
    var letra = bd_juego[numPreguntaActual].id;
    //quito l clase del estilo de pregunta actual
    document.getElementById(letra).classList.remove("pregunta-actual");
    //agrego la clase del estilo de pregunta mal respondida
    document.getElementById(letra).classList.add("mal-respondida");

  }
  respuesta.value = "";
  cargarPregunta();
}


//botón para pasar de pregunta sin contestar
var pasar = document.getElementById("pasar");
pasar.addEventListener("click", function (event) {
  var letra = bd_juego[numPreguntaActual].id;
  document.getElementById(letra).classList.remove("pregunta-actual");

  cargarPregunta();
});


// Crear la función que se encargará de actualizar el cronómetro cada segundo
function largarTiempo() {
  countdown = setInterval(() => {
    // Restar un segundo al tiempo restante
    timeLeft--;

    // Actualizar el texto del cronómetro con el tiempo restante
    timer.innerText = timeLeft;

    // Si el tiempo llega a 0, detener el cronómetro
    if (timeLeft < 0) {
      clearInterval(countdown);
      mostrarPantallaFinal();
    }
  }, 1000);
}

//muestro la pantlla final
function mostrarPantallaFinal() {
  document.getElementById("acertadas").textContent = cantidadAcertadas;
  document.getElementById("score").textContent = (cantidadAcertadas * 100) / 26 + "% de acierto";
  document.getElementById("pantalla-juego").style.display = "none";
  document.getElementById("pantalla-final").style.display = "block";
}

//boton para recomenzar el juego
var recomenzar = document.getElementById("recomenzar");
recomenzar.addEventListener("click", function (event) {
  numPreguntaActual = -1;
  timeLeft = TIEMPO_DEL_JUEGO;
  timer.innerText = timeLeft;
  cantidadAcertadas = 0;
  estadoPreguntas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  //quito las clases de los circulos
  var circulos = document.getElementsByClassName("circle");
  for (i = 0; i < circulos.length; i++) {
    circulos[i].classList.remove("bien-respondida");
    circulos[i].classList.remove("mal-respondida");
  }

  document.getElementById("pantalla-final").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "block";
  largarTiempo();
  cargarPregunta();
});