const readline = require("readline");
const taskList = require("./taskList");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const deleted = () => {
  rl.question("Indice de tarea a eliminar: ", (indice) => {
    taskList.splice(indice, 1);
    console.log(taskList);
    rl.close();
  });
};
deleted();
module.exports = deleted;
