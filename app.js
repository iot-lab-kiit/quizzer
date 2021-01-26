const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyparser = require('body-parser');
const cors = require("cors");
const http = require("http");
require("dotenv/config");

app.use(cors());
app.use(bodyparser.json());


//Mongo DB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });


const quizRouter = require('./routes/quiz');
const questionRouter = require('./routes/question');

app.use("/api/quiz", quizRouter);
app.use("/api/question", questionRouter);

//Routes
app.get("/api", (req, res) => {
  res.send("server is live");
});

//for server 
// const httpServer = http.createServer(app);
// httpServer.listen(80, () => {
//   console.log("HTTP Server running on port 80");
// });
app.listen(3000, () => console.log("Server started"));