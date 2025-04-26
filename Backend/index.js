const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
const port = 4001;

const connectionString = process.env.MONGO_URI;
mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to the database…"))
  .catch((err) => console.error("Connection error:", err));
app.listen(port, () => {
  console.log(`SERVER RUNNING IN PORT ${port}`);
});
