// BASIC SETUP 
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const app = express()
const PORT = 5000
app.use(cors())
app.use(express.json())

// CONNECTING DATABASE
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin123",
    database: "task_manager",
})

// HANDLE ERROR'S 
db.connect((err) => {
    if (err) {
        console.log("Failed to Connect to DB")
    } else {
        console.log("Connected to MySQL")
    }
})

// CREATE TASK API
app.post("/tasks", (req, res) => {
    const { title } = req.body
    const QUERY = "INSERT INTO tasks (title) VALUE (?)"
    db.query(QUERY, [title], (err, result) => {
        // IF ERROR THEN STOP AND SEND IT 
        if (err) return res.status(500).send(err)
        res.send("Task Created")
    })

})

// GET ALL TASK API 
app.get("/tasks", (req, res) => {
    const QUERY = "SELECT * FROM tasks"
    db.query(QUERY, (err, result) => {
        if (err) return res.status(500).send(err)
        res.json(result)
    })
})

// UPDATE TASK API
app.put("/tasks/:id", (req, res) => {
    const { id } = req.params
    const { title, completed } = req.body
    const QUERY = "UPDATE tasks SET title = ? , completed = ? WHERE id = ?"
    db.query(QUERY, [title, completed, id], (err, result) => {
        if (err) return res.status(500).send(err)
        res.send("Task Updated")
    })
})

// DELETE TASK API 
app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params
    const QUERY = "DELETE FROM tasks WHERE id = ?"
    db.query(QUERY, [id], (err, result) => {
        if (err) return res.status(500).send(err)
        res.send("Task Deleted")
    })
})


// START SERVER 
app.listen(PORT, () => {
    console.log("SERVER STARTED ... ON PORT", PORT)
})
