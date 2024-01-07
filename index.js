import express from "express";

const app = express();

app.get('/users', (req, res) => {
    res.json("works")
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})