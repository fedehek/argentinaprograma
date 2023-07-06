const readline = require("readline-sync");

//Extra 1: definimos las constantes para cada jugada//

const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";

//con esta funcion obtenemos el movimiento de la computadora//

function obtenerJugadaComputadora() {
  const jugadas = [PIEDRA, PAPEL, TIJERAS];
  const indiceAleatorio = Math.floor(Math.random() * jugadas.length);
  return jugadas[indiceAleatorio];
}

//con la siguiente funcion vamos a obtener la jugada del usuario//

function obtenerJugadaUsuario() {
  const jugadas = [PIEDRA, PAPEL, TIJERAS];
  let movimientoJugador;

  while (true) {
    movimientoJugador = readline
      .question("Elige tu jugada: piedra, papel o tijeras: ")
      .toLowerCase()
      .trim();
    if (jugadas.includes(movimientoJugador)) {
      break;
    }
    console.log("Elige una de las opciones válidas: piedra, papel o tijeras");
  }
  return movimientoJugador;
}

//con la siguiente funcion determinamos el juego//

function determinarGanador(movimientoJugador, movimientoPc) {
  if (movimientoPc === movimientoJugador) {
    return "Empate";
  } else if (
    (movimientoJugador === PIEDRA && movimientoPc === TIJERAS) ||
    (movimientoJugador === PAPEL && movimientoPc === PIEDRA) ||
    (movimientoJugador === TIJERAS && movimientoPc === PAPEL)
  ) {
    return "Usuario";
  } else {
    return "Computadora";
  }
}

//con la siguiente funcion determinamos la cantidad de juegos y mostramos cada resultado (Extra2)//

function jugar() {
  console.log("¡Juguemos al Piedra, Papel o Tijeras!");
  let partidos = parseInt(
    readline.question("Cuantos partidos quieres realizar?: ")
  );

  let victoriasUsuario = 0;
  let victoriasComputadora = 0;

  for (let i = 1; i <= partidos; i++) {
    console.log("---------------------------------------");
    const jugadaComputadora = obtenerJugadaComputadora();
    const jugadaUsuario = obtenerJugadaUsuario();

    console.log("La computadora eligió: " + jugadaComputadora);
    console.log("El usuario eligió: " + jugadaUsuario);

    const ganador = determinarGanador(jugadaUsuario, jugadaComputadora);

    if (ganador === "Empate") {
      console.log("el resultado es: " + ganador);
    } else {
      console.log("El ganador de la partida es: " + ganador);
    }
    if (ganador === "Usuario") {
      victoriasUsuario++;
    } else if (ganador === "Computadora") {
      victoriasComputadora++;
    }
  }
  console.log("Las victorias del usuario son: " + victoriasUsuario);
  console.log("Las victorias de la computadora son: " + victoriasComputadora);

  console.log("---------------------------------------");

  if (victoriasUsuario > victoriasComputadora) {
    console.log("Has ganado el juego!!");
  } else if (victoriasUsuario < victoriasComputadora) {
    console.log("La computadora ha ganado el juego!!");
  } else {
    console.log("El juego termino en empate!!");
  }
}

jugar();
