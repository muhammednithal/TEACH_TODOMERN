const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ToDo = require("./model/todo");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const port = 4001;

const connectionString = process.env.MONGO_URI;
mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to the database…"))
  .catch((err) => console.error("Connection error:", err));
//routes

app.get("/todo", async (req, res) => {
  const todos = await ToDo.find();
  res.json(todos);
});

app.post("/todo", async (req, res) => {
  const newTask = await ToDo.create(req.body);
  res.status(201).json({ newTask });
});

app.delete("/todo/:id", async (req, res) => {
  const result = await ToDo.findByIdAndDelete(req.params.id);
  res.json(result);
});

app.listen(port, () => {
  console.log(`SERVER RUNNING IN PORT ${port}`);
});
