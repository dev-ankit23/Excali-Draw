import express from "express";
import JWT_SECRET from "./config";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
const app = express();

app.post("/signup", (req, res) => {
  // const username = req.body.username;
  // const email = req.body.email;
  // const password = req.body.password;
});
app.post("/signin", (req, res) => {
  const userID = 1;
  const token = jwt.sign({ sub: userID }, JWT_SECRET);

  res.status(200).json({
    message: "Signin Successful",
    token: token,
  });
});
app.post("/room", middleware, (req, res) => {});

app.listen(3001, () => {
  console.log("Server is Listening to port 3000");
});
