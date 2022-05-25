import "./styles.css";

/* *Desarrolle un algoritmo que
permita cargar alumnos y sus
notas en los tres trimestres

* Se debe permitir obtener el
promedio anual (es decir, de sus
tres notas) de un alumno
(ingresado por el usuario)

* Luego de resolverlo, pensar en
aprovechar métodos y discutir
como representar la información*/

let cantidadAlumnos: number = Number(prompt("Ingrese la cantidad de alumnos"));
let arrayCalificaciones = new Array([cantidadAlumnos][3]);
for (let i = 0; i < cantidadAlumnos; i++) {
  console.log(`-----------------------------------------------------------`);
  let suma: number = 0;
  let nombre: string | null = prompt("Ingrese nombre A-Z:");
  arrayCalificaciones[i] = nombre;
  console.log(arrayCalificaciones[i].toUpperCase());

  for (let j = 0; j < 3; j++) {
    let nota: number = Number(prompt("Ingrese nota entre 0 - 10:"));
    if (nota >= 0 && nota <= 10) {
      arrayCalificaciones[j] = nota;
      suma = suma + arrayCalificaciones[j];
    } else {
      nota = Number(prompt("Ingrese nota entre 0 - 10:"));
    }
    console.log(arrayCalificaciones[j]);
  }

  console.log(`El promedio anual del Alumno es: ${suma / 3}`);
  console.log(`-----------------------------------------------------------`);
}
