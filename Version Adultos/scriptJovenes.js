//total preguntas del juego
const TOTAL_PREGUNTAS = 26;
//tiempo del juego
const TIEMPO_DEL_JUEGO = 300;
//estructura para almacenar las preguntas
const bd_juego = [
  {
    id: 'A',
    pregunta: "Empieza por A, región autónoma que está formada por ocho provincias.",
    respuesta: "andalucia"
  },
  {
    id: 'B',
    pregunta: "Empieza por B, conjunto de instrumentos musicales de percusión usado por muchas agrupaciones musicales como tambores y platillos.",
    respuesta: "bateria"
  },
  {
    id: 'C',
    pregunta: "Empieza por C, animal herbívoro que tiene rayas negras y habita en áfrica.",
    respuesta: "cebra"
  },
  {
    id: 'D',
    pregunta: "Empieza por D, animal mamífero que vive en el agua que tiene aletas y hacen acrobacias en el agua",
    respuesta: "delfin"
  },
  {
    id: 'E',
    pregunta: "Empieza por E, cuando vemos arriba que la Luna oculta el Sol y proyecta una sombra en la Tierra",
    respuesta: "eclipse"
  },
  {
    id: 'F',
    pregunta: "Empieza por F, fruto del comestible, de color rojo más oscuro que el de la fresa, olor suave y sabor dulce.",
    respuesta: "frambuesa"
  },
  {
    id: 'G',
    pregunta: "Empieza por G, fuerza por la que un planeta u otro cuerpo atrae objetos hacia su centro",
    respuesta: "gravedad"
  },
  {
    id: 'H',
    pregunta: "Empieza por H, herramienta para cortar madera, en especial árboles y ramas, que consiste en una pieza de metal con un filo cortante.",
    respuesta: "hacha"
  },
  {
    id: 'I',
    pregunta: "Empieza por I, el hijo de Dédalo en la mitología griega murió de caída por acercarse al sol con sus alas.",
    respuesta: "icaro"
  },
  {
    id: 'J',
    pregunta: "Empieza por J, Período de la vida de la persona comprendido entre la infancia y la madurez.",
    respuesta: "juventud"
  },
  {
    id: 'K',
    pregunta: "Contiene la K, ¿Cómo se llama la famosa aplicación de videos cortos que se ha vuelto muy popular entre los jóvenes?",
    respuesta: "tiktok"
  },
  {
    id: 'L',
    pregunta: "Empieza por L, instrumento óptico para ampliar la imagen de los objetos que consiste en una lente de aumento provista de un mango.",
    respuesta: "lupa"
  },
  {
    id: 'M',
    pregunta: "Empieza por la M, representación geográfica de la Tierra, o de parte de ella, sobre una superficie plana, de acuerdo con una escala.",
    respuesta: "mapa"
  },
  {
    id: 'N',
    pregunta: "Empieza por N, un molusco bivalvo marino que vive enterrado en la arena y se encuentra frente a las costas.",
    respuesta: "navaja"
  },
  {
    id: 'O',
    pregunta: "Empieza por la O, que no es copia ni imitación de otros.",
    respuesta: "original"
  },
  {
    id: 'P',
    pregunta: "Empieza por la P, cuerpo geométrico que tiene como base un polígono cualquiera, y sus caras laterales son triángulos que se juntan en un vértice común",
    respuesta: "piramide"
  },
  {
    id: 'Q',
    pregunta: "Empieza por la Q, monstruo fabuloso que se representa con cabeza de león, cuerpo de cabra y cola de dragón",
    respuesta: "quimera"
  },
  {
    id: 'R',
    pregunta: "Empieza por la R, nota oficial que hace un médico indicando el nombre del medicamento que debe tomar el enfermo.",
    respuesta: "receta"
  },
  {
    id: 'S',
    pregunta: "Empieza por la S, cuerpo que, a diferencia de los líquidos y los gases, presenta forma propia y opone resistencia a ser dividido",
    respuesta: "solido"
  },
  {
    id: 'T',
    pregunta: "Empieza por la T, documento oficial que acredita haber realizado los estudios y superado las pruebas o exámenes requeridos para ejercer cierta profesión o cargo.",
    respuesta: "titulo"
  },
  {
    id: 'U',
    pregunta: "Empieza por la U, especialidad médico-quirúrgica que se ocupa del estudio, diagnóstico y tratamiento de las patologías que afectan al aparato urinario",
    respuesta: "urologia"
  },
  {
    id: 'V',
    pregunta: "Empieza por la V, sustancia química u orgánica que, introducida en el organismo, produce la muerte o graves trastornos.",
    respuesta: "veneno"
  },
  {
    id: 'W',
    pregunta: "Empieza por la W, ¿Cómo se llama la popular aplicación de mensajería instantánea propiedad de Facebook?",
    respuesta: "whatsapp"
  },
  {
    id: 'X',
    pregunta: "Contiene la X, automóvil de servicio público que transporta de un lugar a otro a las personas que lo solicitan a cambio de dinero",
    respuesta: "taxi"
  },
  {
    id: 'Y',
    pregunta: "Empieza por la Y, ser fantástico y gigantesco con figura humana y con el cuerpo cubierto de pelo; según una leyenda habita en las regiones del Himalaya.",
    respuesta: "yeti"
  },
  {
    id: 'Z',
    pregunta: "Empieza por la Z, emperador de Rusia",
    respuesta: "zar"
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