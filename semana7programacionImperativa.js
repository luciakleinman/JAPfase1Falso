function datosDelEstudiante() {
  //Pido datos de una persona (nombre, apellido y departamento en que vive)
  let nombre = prompt("Ingresa tu nombre: ");
    nombre = nombre[0].toUpperCase() + nombre.substring(1);
  let apellido = prompt("Ingresa tu apellido: ");
    apellido = apellido[0].toUpperCase() + apellido.substring(1);
  let departamento = prompt("Ingresa tu departamento: ");
    departamento = departamento[0].toUpperCase() + departamento.substring(1);

  //Pido sus puntajes de evaluciones
  //Mientras no ingresen un número, no deja de preguntar
  let puntajeFundamentos = NaN;
  while (isNaN(puntajeFundamentos)) {
    puntajeFundamentos = parseInt(prompt("Ingresa tu puntaje en la evaluación de Fundamentos en la Programación: "));}

  let puntajeImperativa = NaN;
  while (isNaN(puntajeImperativa)) {
    puntajeImperativa = parseInt(prompt("Ingresa tu puntaje en la evaluación de Programación Imperativa: "));}

  let puntajeProgOrientadaAObjetos = NaN;
  while (isNaN(puntajeProgOrientadaAObjetos)) {
  puntajeProgOrientadaAObjetos = parseInt(prompt("Inglesa tu puntaje en la evaluación de Programación Orientada a Objetos: "));}

  //Promedio los puntajes sabiendo que de 100%, el 30% es de la evaluación de Fundamentos de Programación, el 50% es de la evaluación de Programación Imperativa y el 20% es de la evaluación de Programación Orientada a Objetos
  let puntajeEvaluacionTecnica = puntajeFundamentos * 0.3 + puntajeImperativa * 0.5 + puntajeProgOrientadaAObjetos * 0.2;

  //Pido sus evidencias
  //Convierto si == 1, y no == 0
  //Ignoro mayúsculas
  var evidencia1 = prompt("¿Usted entregó la primer evidencia sobre Fundamentos? Si/No: ");
  if (evidencia1.toLowerCase() === "si") {
    evidencia1 = 1;
  } else {
    evidencia1 = 0;}
  var evidencia2 = prompt("¿Usted entregó la segunda evidencia sobre Programación Imperativa? Si/No: ");
  if (evidencia2.toLowerCase() === "si") {
    evidencia2 = 1;
  } else {
    evidencia2 = 0;}
  var evidencia3 = prompt("¿Usted entregó la tercer evidencia sobre Programación Orientada a Objetos? Si/No: ");
  if (evidencia3.toLowerCase() === "si") {
    evidencia3 = 1;
  } else {
    evidencia3 = 0;}
  let numeroDeEvidencias = evidencia1 + evidencia2 + evidencia3;

  //Pido datos de Inglés y CT
  //Mientras no ingresen un número, no deja de preguntar
  let puntajeIngles = NaN;
  while (isNaN(puntajeIngles)) {
    puntajeIngles = parseInt(prompt("Ingresa en números tu puntaje en inglés: "));
  }
  let totalTutorias = NaN;
  while (isNaN(totalTutorias)) {
    totalTutorias = parseInt(prompt("Ingresa en números el total de tutorías que hiciste: "));
  }

  //Hago el promedio de los puntajes para obtener el status final
  //Uso .toFixed(n) para obtener dos decimales
  let puntajeFinal = ((puntajeEvaluacionTecnica + puntajeIngles + totalTutorias * 10) / 3).toFixed(2);

  // Mostrar los resultados
  alert("¡Hola " + nombre + "!\n" +
      "Tus calificaciones en la Fase 1 son las siguientes:\n" +
      "Puntaje en tu evaluación técnica es: " + puntajeEvaluacionTecnica + "\n" +
      "Número de evidencias presentadas es: " + numeroDeEvidencias + "\n" +
      "Your score in the English course: " + puntajeIngles + "\n" +
      "En Competencias Transversales, tu total de tutorías hechas es de " + totalTutorias * 10 + "%" + "\n" +
      "En total " + nombre + ", tu puntaje final es de: " + puntajeFinal);

  alert("Te mostraremos si apruebas, desapruebas o tienes la opción del examen final.");

  if (puntajeIngles >= 50 && (totalTutorias * 10) >= 100 && puntajeEvaluacionTecnica >= 60 && numeroDeEvidencias == 3) {
    alert("¡Felicitaciones, has aprobado la Fase 1!");
    //y si no se llega a el 100% de las tutorías no se aprueba fase 1.
    //tampoco se apruba si en Inglés el puntaje es menor a 50.
  } else if (puntajeIngles < 50 || (totalTutorias * 10) < 100) {
    alert("Lo sentimos, no has aprobado la Fase 1.");
    //Técnica: 30% Fundamentos de Programación + 50% Programación Imperativa + 20% Programación Orientada a Objetos
    //Se aprueba con 60+ puntos
    //si el puntaje >= 60 pero le falta alguna de las evidencias, debe rendir examen:
  } else if (puntajeEvaluacionTecnica >= 60 && numeroDeEvidencias < 3) {
    alert("Lo sentimos. Aunque tu puntaje en la evaluación técnica es de " + puntajeEvaluacionTecnica + ", no has presentado todas las entregas de evidencias.\n" +
    "¡Pero podrás rendir un examen final! Con supervisión y debes obtener al menos un 60% para aprobar.");
    //si la persona subió las 3 entregas de evidencia y su puntaje final está en el rango de 50 a 59,99 podrá rendir el examen final:
  } else if (50 >= puntajeEvaluacionTecnica < 60 && numeroDeEvidencias == 3) {
    alert("Lo sentimos, aunque has entregado todas las evidencias, tu puntaje en la evaluación técnica es de " + puntajeEvaluacionTecnica + ". \n" +
    "¡Pero podrás rendir un examen final! Con supervisión y debes obtener al menos un 60% para aprobar.");
    //Todos los otros casos reprueban fase 1.
  } else {
    alert("Lo sentimos, no has aprobado la Fase 1.");
  }  
}
// Llamar function
datosDelEstudiante();