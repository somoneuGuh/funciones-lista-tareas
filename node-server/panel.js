const readline = require("readline");
const taskList = require("./taskList");
const add = require("./add");
const deleted = require("./delete");
const complete = require("./complete");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const panel = () => {
  console.log(taskList);
  console.log("1 para añadir tarea");
  console.log("2 para eliminar tarea");
  console.log("3 para completar tarea");
  rl.question("Ingrese opcion: ", (opcion) => {
    if (opcion == "1") {
      rl.question("ingrese nombre: ", (nombre) => {
        rl.question("ingrese descripcion: ", (descripcion) => {
          rl.question("ingrese estado: ", (estado) => {
            mostrarAdd(nombre, descripcion, estado);
            panel();
            rl.close();
          });
        });
      });
    }
    if (opcion == "2") {
      rl.question("ingrese numero de tarea a eliminar: ", (indice) => {
        indice = parseInt(indice);
        mostrarDelete(indice);
        rl.close();
      });
    }
    if (opcion == "3") {
      rl.question("ingrese numero de tarea completada: ", (index) => {
        index = parseInt(index);
        mostrarCompleted(index);
        rl.close();
      });
    }
  });
};
panel();
async function mostrarAdd(nombre, descripcion, estado) {
  const añadir = await add(nombre, descripcion, estado);
  console.log(añadir);
}
async function mostrarDelete(indice) {
  const del = await deleted(indice - 1);
  console.log(del);
}
async function mostrarCompleted(index) {
  const com = await complete(index - 1);
  console.log(com);
}
