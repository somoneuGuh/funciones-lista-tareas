const readline = require("readline");
const taskList = require("./taskList");
const completedTask = require("./completedTask");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const complete = (index) => {
  return new Promise((resolve, reject) => {
    completedTask.push(taskList[index]);
    resolve(taskList);
  });
};
complete();
module.exports = complete;
