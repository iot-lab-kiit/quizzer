const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyparser = require('body-parser');
const path = require("path");
const cors = require("cors");
const http = require("http");
require("dotenv/config");

app.use(cors());
app.use(bodyparser.json());
app.use("/admin", express.static(path.join(__dirname, '/dashboard')));


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

//Routes
app.get("/", (req, res) => {
  res.send("server is live");
});

//for server 
const httpServer = http.createServer(app);
httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80");
});
