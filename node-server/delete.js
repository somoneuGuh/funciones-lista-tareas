const taskList = require("./taskList");

const deleted = (indice) => {
  return new Promise((resolve, reject) => {
    taskList.splice(indice, 1);
    resolve(taskList);
  });
};
deleted();
module.exports = deleted;
