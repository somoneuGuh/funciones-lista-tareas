const readline = require("readline");
const taskList = require("./taskList");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const add = () => {
  rl.question("Ingrese el nombre: ", (nombre) => {
    rl.question("Ingrese la descripción: ", (descripcion) => {
      rl.question("Ingrese el estado: ", (estado) => {
        const task = {
          nombre: nombre,
          desc: descripcion,
          status: estado,
        };
        taskList.push(task);
        console.log(taskList);
        if (nombre == "a") {
          deleted();
        }
        rl.close();
      });
    });
  });
};
add();
module.exports = add;
