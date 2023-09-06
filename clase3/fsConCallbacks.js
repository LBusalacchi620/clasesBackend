// cuando se usan callbacks, se agrega un último argumento que es un callback y que cuyo primer argumento es para el error.
const fs = require("fs");
fs.writeFile("example2.json", "Estoy escribiendo algo importante", (error) => {
  if (error)
    return console.log(
      `Se produjo un error en la escritura del archivo example2.json`
    );
  fs.readFile("example2.json", "utf-8", (error, resultado) => {
    if (error) return console.log(`Error al leer el archivo`);
    console.log(resultado);
    fs.appendFile("example2.json", " agrego más contenido", (error) => {
      if (error)
        return console.log(
          `Error al agregar más contenido al agregar contenido`
        );
      fs.readFile("example2.json", "utf-8", (error, resultado) => {
        if (error) return console.log(`Error al leer el archivo`);
        console.log(resultado);
        fs.unlink("example2.json", (error) => {
          if (error) return console.log(`Error al eliminar el archivo`);
        });
      });
    });
  });
});
