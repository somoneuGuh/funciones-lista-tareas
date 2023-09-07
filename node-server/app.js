const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const tasks = [
  { id: 1, description: "Tarea 1", completed: false },
  { id: 2, description: "Tarea 2", completed: true },
  { id: 3, description: "Tarea 3", completed: false },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
