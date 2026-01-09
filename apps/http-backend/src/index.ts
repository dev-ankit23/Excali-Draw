import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello From http server");
});

app.listen(3001, () => {
  console.log("Server is Listening to port 3000");
});
