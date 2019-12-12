import express from "express"
const app = express()
import mongoose from './src/router/db'
import cors from 'cors'
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("database successfully connected")
});
let PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("server is running")
})
app.use(cors());
app.use(express.json())
app.use("/todo", require("./src/router"))