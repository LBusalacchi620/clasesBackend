//writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
//readFileSync = Para obtener el contenido de un archivo.
//appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
//unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
//existsSync = Corrobora que un archivo exista!

// para poder acceder a las herramientas de fs, teno que importar el módulo nativo que viene en node
const fs = require("fs");
fs.writeFileSync("example.json", "Esto es lo primero que quiero escribir");

if (fs.existsSync("example.json")) {
  console.log(
    `Esto estuvo escrito alguna vez en el archivo ${fs.readFileSync(
      "example.json",
      "utf-8"
    )}`
  );
}
fs.appendFileSync("example.json", " Se puede escribir mas contenido");
console.log(`Esto se agregó despues ${fs.readFileSync("example.json")}`);
fs.readFileSync("example.json", "utf-8");

//fs.unlinkSync("example.json");
