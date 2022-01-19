require('dotenv').config({path: "./config/.env"})
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const connectToDb = require("./config/database");
const homeRouter = require("./routes/home");
const todoRouter = require("./routes/todos");

// initialize server
const app = express();

connectToDb();


// middleware
app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/", homeRouter);
app.use("/todos", todoRouter);


// listen
async function startServer() {
  try {
    await app.listen(PORT);
    console.log("Started server on port: " + PORT);
  } catch (err) {
    console.log("Error starting server", err);
  }
}
startServer();
