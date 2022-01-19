require('dotenv').config({path: "./config/.env"})
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8000;


// initialize server
const app = express();

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("GIgiigigty")
})

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
