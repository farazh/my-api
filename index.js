import express from "express";

const app = express();
const port = 5000;

app.get("/users", (req, res) => {
  console.log("request came...", req);
  res.json("works");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
