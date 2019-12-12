import express from 'express'
import Todo from './module/scheema'
const router = express.Router()

router.use("/api/v1.0" , require("./todo/todolist"))

module.exports = router