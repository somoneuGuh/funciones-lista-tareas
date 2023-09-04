const readline = require("readline");
const taskList = require("./taskList");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const add = (nombre, descripcion, estado) => {
  return new Promise((resolve, reject) => {
    const task = {
      nombre: nombre,
      desc: descripcion,
      status: estado,
    };
    taskList.push(task);
    resolve(taskList);
  });
};
add();
module.exports = add;
