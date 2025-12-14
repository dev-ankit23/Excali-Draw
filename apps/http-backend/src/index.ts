import express from "express";
const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from http-server");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
