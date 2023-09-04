const readline = require("readline");
const taskList = require("./taskList");
const completedTask = require("./completedTask");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const complete = () => {
  console.log(taskList);
  rl.question("tarea terminada: ", (index) => {
    completedTask.push(taskList[index]);
    console.log(completedTask);
    rl.close();
  });
};
complete();
module.exports = complete;
