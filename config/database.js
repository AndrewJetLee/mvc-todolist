require('dotenv').config({path: "./.env"})
const mongoose = require("mongoose");

async function connectToDb () {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.esjfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
        console.log("Connected to database")
    } catch (err) {
        console.log("Error connecting to database")
    }
}

module.exports = connectToDb; 