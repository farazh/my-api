import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json("server is up..");
});

app.get("/users", (req, res) => {
  console.log("request came...");
  res.json("works");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
