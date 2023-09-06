const fs = require("fs");

// Obtener la fecha y hora actual
const fechaHoraActual = new Date().toLocaleString();
console.log(fechaHoraActual);

// Nombre del archivo en el que escribiremos la fecha y hora
const nombreArchivo = "fecha_hora.txt";

// // Escribir la fecha y hora en el archivo
fs.writeFile(nombreArchivo, fechaHoraActual, (err) => {
  if (err) {
    console.error("Error al escribir en el archivo:", err);
  } else {
    console.log("Fecha y hora escritas en el archivo exitosamente.");

    // Leer el archivo y mostrar su contenido por consola
    fs.readFile(nombreArchivo, "utf8", (err, data) => {
      if (err) {
        console.error("Error al leer el archivo:", err);
      } else {
        console.log("Contenido del archivo:");
        console.log(data);
      }
    });
  }
});
