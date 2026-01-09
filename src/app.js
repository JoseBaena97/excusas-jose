document.addEventListener('DOMContentLoaded', generadorexcusas);

function generadorexcusas() {
  let who = ['Mi gato', 'Un ninja', 'El repartidor de pizza', 'Un alien', 'Mi hermano pequeño'];
  let action = ['robó', 'escondió', 'tiró', 'pintó', 'se comió'];
  let what = ['mis tareas', 'mi ordenador', 'mi bocata', 'mis zapatillas', 'mi mochila'];
  let when = ['durante el examen', 'mientras me duchaba', 'a medianoche', 'mientras corría', 'en mitad de la clase'];

  //Seleccion de elementos aleatoria para formar la frase
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  //Construcción de la excusa completa
  let excusa = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

  document.getElementById("excusa").innerHTML = excusa;
}
