import express from 'express'
import Todo from './../module/scheema'
const router = express.Router()



router.get("/tasks", async (req: string, res: any) => {
    const users = await Todo.find({});
    res.send({ users })
})



router.get("/tasks/:id", async (req: string, res: any) => {
    const users = await Todo.findOne({});
    res.send({ users })
})


router.post("/tasks", (req: express.Request, res: express.Response) => {
    console.log(req.body)
    const user = new Todo(req.body)
    user.save().then(() => {
        res.send({
            message: "User Successfully Saved"
        })
    })
        .catch((err) => {
            res.send({
                message: err
            })
        })
})


router.delete("/delete/:id",async (req: express.Request, res: express.Response) => {
    console.log(req.body.id)
   await Todo.findByIdAndDelete({_id: req.body._id}).then(() => {
        res.send({
            message: "User Successfully Delete"
        })
    })
        .catch((err) => {
            res.send({
                message: err.message
            })
        })
})
router.put("/update/:id", (req: express.Request, res: express.Response) => {
    console.log(req.body)
    Todo.findByIdAndUpdate({_id: req.body._id} , { title: req.body.update}).then(() => {
        res.send({
            message: "User Successfully update"
        })
    })
        .catch((err) => {
            res.send({
                message: err
            })
        })
})


module.exports = router